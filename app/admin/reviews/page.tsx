"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { reviewsService, Review } from "@/lib/firebase-services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BrillionLoader from "@/components/ui/BrillionLoader"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Star, Trash2 } from "lucide-react"

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [reviewToDelete, setReviewToDelete] = useState<Review | null>(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    setLoading(true)
    const data = await reviewsService.getAll()
    setReviews(data)
    setLoading(false)
  }

  const handleDelete = async () => {
    if (!reviewToDelete?.id) return
    setDeleting(true)
    try {
      await reviewsService.delete(reviewToDelete.id)
      setReviews((prev) => prev.filter((r) => r.id !== reviewToDelete.id))
      setReviewToDelete(null)
    } catch (error) {
      console.error("Error deleting review:", error)
      alert("Failed to delete review. Please try again.")
    } finally {
      setDeleting(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
          <p className="text-muted-foreground">
            Manage customer reviews shown on the website
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Reviews ({reviews.length})</CardTitle>
            <CardDescription>
              Reviews are posted by signed-in users. Deleting a review removes
              it from the website immediately.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-12">
                <BrillionLoader size="lg" theme="minimal" />
              </div>
            ) : reviews.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No reviews yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="max-w-md">Review</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reviews.map((review) => (
                      <TableRow key={review.id}>
                        <TableCell>
                          <div className="font-medium">{review.userName}</div>
                          <div className="text-xs text-muted-foreground">
                            {review.userEmail}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? "text-orange-500 fill-orange-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className="text-sm line-clamp-3 whitespace-pre-line">
                            {review.text}
                          </p>
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                          {review.createdAt?.toDate
                            ? review.createdAt.toDate().toLocaleDateString("en-CA", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "—"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setReviewToDelete(review)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete confirmation */}
      <AlertDialog
        open={!!reviewToDelete}
        onOpenChange={(open) => !open && setReviewToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this review?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove the review by{" "}
              <span className="font-medium">{reviewToDelete?.userName}</span>{" "}
              from the website. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault()
                handleDelete()
              }}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deleting ? "Deleting..." : "Delete Review"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  )
}
