"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Pencil, 
  Trash2, 
  Eye,
  Calendar,
  Filter,
  FileText,
  Image,
  Video
} from "lucide-react"

interface Content {
  id: string
  title: string
  type: "article" | "page" | "media"
  status: "published" | "draft" | "archived"
  author: string
  createdAt: string
  updatedAt: string
  views?: number
  excerpt?: string
}

const mockContent: Content[] = [
  {
    id: "1",
    title: "Digital Transformation in 2024",
    type: "article",
    status: "published",
    author: "Admin",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-16",
    views: 1250,
    excerpt: "Exploring the latest trends in digital transformation and how businesses can adapt..."
  },
  {
    id: "2",
    title: "About Brillion Digital",
    type: "page",
    status: "published",
    author: "Admin",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18",
    views: 890,
    excerpt: "Learn more about our company, mission, and the team behind Brillion Digital..."
  },
  {
    id: "3",
    title: "Cloud Services Overview",
    type: "article",
    status: "draft",
    author: "Sarah Johnson",
    createdAt: "2024-01-20",
    updatedAt: "2024-01-22",
    excerpt: "A comprehensive guide to our cloud services and how they can benefit your business..."
  },
  {
    id: "4",
    title: "Hero Background Video",
    type: "media",
    status: "published",
    author: "Mike Wilson",
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12"
  },
  {
    id: "5",
    title: "Cybersecurity Best Practices",
    type: "article",
    status: "archived",
    author: "Admin",
    createdAt: "2024-01-08",
    updatedAt: "2024-01-09",
    views: 450,
    excerpt: "Essential cybersecurity practices every business should implement to stay secure..."
  },
]

export default function ContentPage() {
  const router = useRouter()
  const [content, setContent] = useState<Content[]>(mockContent)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<Content | null>(null)
  const [newContent, setNewContent] = useState({
    title: "",
    type: "article" as Content["type"],
    status: "draft" as Content["status"],
    excerpt: ""
  })

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin/login")
    }
  }, [router])

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.excerpt && item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesType = typeFilter === "all" || item.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  })

  const handleAddContent = () => {
    const contentItem: Content = {
      id: Date.now().toString(),
      ...newContent,
      author: "Admin",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    setContent([...content, contentItem])
    setNewContent({ title: "", type: "article", status: "draft", excerpt: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditContent = (contentItem: Content) => {
    setEditingContent(contentItem)
    setNewContent({
      title: contentItem.title,
      type: contentItem.type,
      status: contentItem.status,
      excerpt: contentItem.excerpt || ""
    })
  }

  const handleUpdateContent = () => {
    if (!editingContent) return
    
    const updatedContent = content.map(item =>
      item.id === editingContent.id
        ? { ...item, ...newContent, updatedAt: new Date().toISOString().split("T")[0] }
        : item
    )
    setContent(updatedContent)
    setEditingContent(null)
    setNewContent({ title: "", type: "article", status: "draft", excerpt: "" })
  }

  const handleDeleteContent = (contentId: string) => {
    setContent(content.filter(item => item.id !== contentId))
  }

  const handleViewContent = (contentItem: Content) => {
    if (contentItem.type === "article") {
      // Map article titles to slugs for navigation
      const titleToSlugMap: { [key: string]: string } = {
        "Digital Transformation in 2024": "microsoft-365-team-adoption",
        "Cloud Services Overview": "cloud-migration-best-practices",
        "Cybersecurity Best Practices": "cloud-security-2024"
      }
      
      const slug = titleToSlugMap[contentItem.title] || contentItem.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      router.push(`/insights/${slug}`)
    } else {
      // For pages and media, you could implement different logic
      console.log("Viewing:", contentItem.title)
    }
  }

  const getStatusBadge = (status: Content["status"]) => {
    const variants = {
      published: "default",
      draft: "secondary",
      archived: "outline"
    } as const
    
    const colors = {
      published: "bg-green-100 text-green-800",
      draft: "bg-orange-100 text-orange-800",
      archived: "bg-gray-100 text-gray-800"
    }
    
    return <Badge className={colors[status]}>{status}</Badge>
  }

  const getTypeIcon = (type: Content["type"]) => {
    switch (type) {
      case "article":
        return <FileText className="h-4 w-4" />
      case "page":
        return <FileText className="h-4 w-4" />
      case "media":
        return <Image className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
            <p className="text-gray-600 mt-1">Create and manage your website content</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Content
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Add New Content</DialogTitle>
                <DialogDescription>
                  Create a new content item for your website.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input
                    id="title"
                    value={newContent.title}
                    onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">Type</Label>
                  <Select value={newContent.type} onValueChange={(value: Content["type"]) => setNewContent({...newContent, type: value})}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="article">Article</SelectItem>
                      <SelectItem value="page">Page</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">Status</Label>
                  <Select value={newContent.status} onValueChange={(value: Content["status"]) => setNewContent({...newContent, status: value})}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="excerpt" className="text-right mt-2">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={newContent.excerpt}
                    onChange={(e) => setNewContent({...newContent, excerpt: e.target.value})}
                    className="col-span-3"
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddContent} className="bg-[#f97316] hover:bg-[#ea580c] text-white">Add Content</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Content</p>
                  <p className="text-2xl font-bold text-gray-900">{content.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-gray-900">{content.filter(c => c.status === "published").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Drafts</p>
                  <p className="text-2xl font-bold text-gray-900">{content.filter(c => c.status === "draft").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Image className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Media</p>
                  <p className="text-2xl font-bold text-gray-900">{content.filter(c => c.type === "media").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Content</CardTitle>
            <CardDescription>
              View and manage all your website content
            </CardDescription>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="page">Page</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Content</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContent.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="max-w-xs">
                        <div className="font-medium">{item.title}</div>
                        {item.excerpt && (
                          <div className="text-sm text-gray-600 truncate">{item.excerpt}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-2 capitalize">{item.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="text-sm">{item.author}</TableCell>
                    <TableCell className="text-sm">
                      {item.views ? item.views.toLocaleString() : "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.updatedAt}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewContent(item)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditContent(item)}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleDeleteContent(item.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Edit Content Dialog */}
      <Dialog open={!!editingContent} onOpenChange={() => setEditingContent(null)}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit Content</DialogTitle>
            <DialogDescription>
              Update the content item details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-title" className="text-right">Title</Label>
              <Input
                id="edit-title"
                value={newContent.title}
                onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-type" className="text-right">Type</Label>
              <Select value={newContent.type} onValueChange={(value: Content["type"]) => setNewContent({...newContent, type: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="page">Page</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-status" className="text-right">Status</Label>
              <Select value={newContent.status} onValueChange={(value: Content["status"]) => setNewContent({...newContent, status: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="edit-excerpt" className="text-right mt-2">Excerpt</Label>
              <Textarea
                id="edit-excerpt"
                value={newContent.excerpt}
                onChange={(e) => setNewContent({...newContent, excerpt: e.target.value})}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleUpdateContent} className="bg-[#f97316] hover:bg-[#ea580c] text-white">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  )
}