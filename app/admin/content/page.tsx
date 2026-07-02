"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { articlesService, Article } from "@/lib/firebase-services"
import { Timestamp } from "firebase/firestore"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
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
  slug?: string
  category?: string
  industry?: string
  featured?: boolean
}

// Convert Firebase article to Content interface
const articleToContent = (article: Article): Content => {
  const createdAt = article.createdAt instanceof Timestamp 
    ? article.createdAt.toDate().toISOString().split('T')[0]
    : article.date || new Date().toISOString().split('T')[0]
    
  const updatedAt = article.updatedAt instanceof Timestamp
    ? article.updatedAt.toDate().toISOString().split('T')[0]
    : createdAt
    
  return {
    id: article.id || '',
    title: article.title,
    type: 'article',
    status: article.published ? 'published' : 'draft',
    author: article.author || 'Admin',
    createdAt,
    updatedAt,
    excerpt: article.excerpt,
    slug: article.slug,
    category: article.category,
    industry: article.industry,
    featured: article.featured
  }
}

export default function ContentPage() {
  const router = useRouter()
  const [content, setContent] = useState<Content[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<Content | null>(null)
  const [newContent, setNewContent] = useState({
    title: "",
    type: "article" as Content["type"],
    status: "draft" as Content["status"],
    excerpt: "",
    category: "",
    industry: "",
    slug: "",
    featured: false,
    content: "",
    author: "",
    image: "",
    topic: "",
    readTime: "",
    downloadableAsset: ""
  })

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin/login")
    } else {
      fetchArticles()
    }
  }, [router])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const articles = await articlesService.getAllAdmin()
      const contentItems = articles.map(articleToContent)
      setContent(contentItems)
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.excerpt && item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesType = typeFilter === "all" || item.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  })

  const handleAddContent = async () => {
    try {
      // For articles, redirect to the add-post page
      if (newContent.type === "article") {
        router.push("/admin/add-post")
        return
      }
      // Handle other content types as before
      const contentItem: Content = {
        id: Date.now().toString(),
        ...newContent,
        author: "Admin",
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0]
      }
      setContent([...content, contentItem])
      setNewContent({ 
        title: "", 
        type: "article", 
        status: "draft", 
        excerpt: "",
        category: "",
        industry: "",
        slug: "",
        featured: false,
        content: "",
        author: "",
        image: "",
        topic: "",
        readTime: "",
        downloadableAsset: ""
      })
      setIsAddDialogOpen(false)
    } catch (error) {
      console.error('Error adding content:', error)
    }
  }

  const handleEditContent = async (contentItem: Content) => {
    setEditingContent(contentItem)
    
    // If it's an article, fetch the full article data
    if (contentItem.type === 'article' && contentItem.id) {
      try {
        // Get the full article data including content
        const articles = await articlesService.getAllAdmin()
        const fullArticle = articles.find(a => a.id === contentItem.id)
        
        if (fullArticle) {
          setNewContent({
            title: fullArticle.title || "",
            type: "article",
            status: fullArticle.published ? "published" : "draft",
            excerpt: fullArticle.excerpt || "",
            category: fullArticle.category || "",
            industry: fullArticle.industry || "",
            slug: fullArticle.slug || "",
            featured: fullArticle.featured || false,
            content: fullArticle.content || "",
            author: fullArticle.author || "",
            image: fullArticle.image || "",
            topic: fullArticle.topic || "",
            readTime: fullArticle.readTime || "",
            downloadableAsset: fullArticle.downloadableAsset || ""
          })
        }
      } catch (error) {
        console.error('Error fetching full article:', error)
      }
    } else {
      setNewContent({
        title: contentItem.title,
        type: contentItem.type,
        status: contentItem.status,
        excerpt: contentItem.excerpt || "",
        category: contentItem.category || "",
        industry: contentItem.industry || "",
        slug: contentItem.slug || "",
        featured: contentItem.featured || false,
        content: "",
        author: contentItem.author || "",
        image: "",
        topic: "",
        readTime: "",
        downloadableAsset: ""
      })
    }
  }

  const handleUpdateContent = async () => {
    if (!editingContent) return
    
    try {
      if (editingContent.type === 'article') {
        // Update article in Firebase with all fields
        await articlesService.update(editingContent.id, {
          title: newContent.title,
          excerpt: newContent.excerpt,
          published: newContent.status === 'published',
          category: newContent.category,
          industry: newContent.industry,
          slug: newContent.slug,
          featured: newContent.featured,
          content: newContent.content,
          author: newContent.author,
          image: newContent.image,
          topic: newContent.topic,
          readTime: newContent.readTime,
          downloadableAsset: newContent.downloadableAsset
        })
        // Refresh articles
        await fetchArticles()
      } else {
        // Handle other content types as before
        const updatedContent = content.map(item =>
          item.id === editingContent.id
            ? { ...item, ...newContent, updatedAt: new Date().toISOString().split("T")[0] }
            : item
        )
        setContent(updatedContent)
      }
      setEditingContent(null)
      setNewContent({ 
        title: "", 
        type: "article", 
        status: "draft", 
        excerpt: "",
        category: "",
        industry: "",
        slug: "",
        featured: false,
        content: "",
        author: "",
        image: "",
        topic: "",
        readTime: "",
        downloadableAsset: ""
      })
    } catch (error) {
      console.error('Error updating content:', error)
    }
  }

  const handleDeleteContent = async (contentId: string) => {
    try {
      const contentItem = content.find(item => item.id === contentId)
      if (contentItem?.type === 'article') {
        // Delete from Firebase
        await articlesService.delete(contentId)
        // Refresh articles
        await fetchArticles()
      } else {
        // Handle other content types as before
        setContent(content.filter(item => item.id !== contentId))
      }
    } catch (error) {
      console.error('Error deleting content:', error)
    }
  }

  const handleViewContent = (contentItem: Content) => {
    if (contentItem.type === "article") {
      // Use actual slug from article
      if (contentItem.slug) {
        router.push(`/insights/${contentItem.slug}`)
        return
      }
      // Fallback: Map article titles to slugs for navigation
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
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="relative w-16 h-16 mb-6">
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" style={{animationDuration: '1.5s'}}></div>
                  {/* Middle rotating ring (opposite direction) */}
                  <div className="absolute inset-1 rounded-full border border-transparent border-b-blue-500 border-l-blue-500 animate-spin" style={{animationDuration: '1s', animationDirection: 'reverse'}}></div>
                  {/* Inner pulsing core */}
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 animate-pulse opacity-80" style={{animationDuration: '2s'}}></div>
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                </div>
                <p className="text-gray-600 animate-pulse font-medium">Loading content...</p>
              </div>
            ) : (
              <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Content</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
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
                      <div className="flex items-center gap-2">
                        {item.category || "-"}
                        {item.featured && (
                          <Badge variant="secondary" className="text-xs">Featured</Badge>
                        )}
                      </div>
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
            </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Edit Article Modal - Rebuilt */}
      {editingContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setEditingContent(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b">
              <h2 className="text-2xl font-semibold">Edit Article</h2>
              <p className="text-sm text-gray-600 mt-1">
                Update all article details. Changes will be saved to Firebase.
              </p>
              <button
                onClick={() => setEditingContent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {/* Basic Information Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Basic Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={newContent.title}
                        onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                        placeholder="Enter article title"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="slug">URL Slug *</Label>
                        <Input
                          id="slug"
                          value={newContent.slug}
                          onChange={(e) => setNewContent({...newContent, slug: e.target.value})}
                          placeholder="article-url-slug"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          value={newContent.author}
                          onChange={(e) => setNewContent({...newContent, author: e.target.value})}
                          placeholder="Author name"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select 
                          value={newContent.status} 
                          onValueChange={(value: Content["status"]) => setNewContent({...newContent, status: value})}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-end">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newContent.featured}
                            onChange={(e) => setNewContent({...newContent, featured: e.target.checked})}
                            className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                          />
                          <span className="text-sm font-medium">Featured Article</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categorization Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Categorization</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select 
                        value={newContent.category} 
                        onValueChange={(value) => setNewContent({...newContent, category: value})}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Digital Transformation">Digital Transformation</SelectItem>
                          <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="Cloud Services">Cloud Services</SelectItem>
                          <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                          <SelectItem value="Software Development">Software Development</SelectItem>
                          <SelectItem value="Applied Data & Analytics">Applied Data & Analytics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select 
                        value={newContent.industry} 
                        onValueChange={(value) => setNewContent({...newContent, industry: value})}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Financial Services">Financial Services</SelectItem>
                          <SelectItem value="Retail">Retail</SelectItem>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="topic">Topic</Label>
                    <Input
                      id="topic"
                      value={newContent.topic}
                      onChange={(e) => setNewContent({...newContent, topic: e.target.value})}
                      placeholder="e.g., AI & Machine Learning, Cloud Migration, Security"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Content</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        value={newContent.excerpt}
                        onChange={(e) => setNewContent({...newContent, excerpt: e.target.value})}
                        placeholder="Brief description that appears in article listings"
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Full Content</Label>
                      <div className="mt-1">
                        <RichTextEditor
                          value={newContent.content}
                          onChange={(value) => setNewContent({...newContent, content: value})}
                          placeholder="Main article content - use the toolbar to format text"
                          minHeight="400px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media & Assets Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Media & Assets</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="image">Featured Image URL</Label>
                      <Input
                        id="image"
                        value={newContent.image}
                        onChange={(e) => setNewContent({...newContent, image: e.target.value})}
                        placeholder="/images/article-image.jpg"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="download">Downloadable Asset</Label>
                        <Input
                          id="download"
                          value={newContent.downloadableAsset}
                          onChange={(e) => setNewContent({...newContent, downloadableAsset: e.target.value})}
                          placeholder="/downloads/resource.pdf"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="readtime">Read Time</Label>
                        <Input
                          id="readtime"
                          value={newContent.readTime}
                          onChange={(e) => setNewContent({...newContent, readTime: e.target.value})}
                          placeholder="5 min read"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setEditingContent(null)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleUpdateContent}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                Save All Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}