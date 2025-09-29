"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { webinarsService, Webinar, initializeWebinars, resetToSixWebinars } from "@/lib/firebase-services"
import { Timestamp } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
  Play,
  Users,
  Video,
  Star
} from "lucide-react"

export default function AdminWebinars() {
  const router = useRouter()
  const [webinars, setWebinars] = useState<Webinar[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingWebinar, setEditingWebinar] = useState<Webinar | null>(null)
  const [newWebinar, setNewWebinar] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    views: "0",
    date: "",
    youtubeId: "",
    speaker: "",
    topics: [] as string[],
    thumbnail: "",
    status: "upcoming" as Webinar["status"],
    featured: false
  })

  const categories = [
    "Digital Transformation",
    "Cloud Solutions", 
    "AI & Machine Learning",
    "Cybersecurity",
    "Data Analytics",
    "Software Development"
  ]

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin/login")
    } else {
      fetchWebinars()
    }
  }, [router])

  const fetchWebinars = async () => {
    try {
      setLoading(true)
      const webinarsList = await webinarsService.getAll()
      console.log('Admin panel - fetched webinars:', webinarsList.length)
      setWebinars(webinarsList)
      
      // If no webinars found, auto-initialize
      if (webinarsList.length === 0) {
        console.log('No webinars found, initializing...')
        await handleInitializeWebinars()
      } else if (webinarsList.length > 6) {
        console.log(`Found ${webinarsList.length} webinars, more than 6 - you may want to reset`)
      }
    } catch (error) {
      console.error('Error fetching webinars:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInitializeWebinars = async () => {
    try {
      console.log('Initializing webinars...')
      await initializeWebinars()
      console.log('Webinars initialized, refetching...')
      const webinarsList = await webinarsService.getAll()
      setWebinars(webinarsList)
      console.log('After initialization - webinars count:', webinarsList.length)
    } catch (error) {
      console.error('Error initializing webinars:', error)
    }
  }

  const handleResetToSix = async () => {
    try {
      setLoading(true)
      console.log('🔄 Clearing all and adding exactly 6 webinars...')
      await resetToSixWebinars()
      console.log('✅ Reset complete, refetching...')
      const webinarsList = await webinarsService.getAll()
      setWebinars(webinarsList)
      console.log('Final count after reset:', webinarsList.length)
    } catch (error) {
      console.error('Error resetting webinars:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || webinar.status === statusFilter
    const matchesCategory = categoryFilter === "all" || webinar.category === categoryFilter
    
    return matchesSearch && matchesStatus && matchesCategory
  })

  const handleAddWebinar = async () => {
    try {
      await webinarsService.create({
        ...newWebinar,
        topics: newWebinar.topics.length > 0 ? newWebinar.topics : []
      })
      await fetchWebinars()
      setNewWebinar({
        title: "",
        description: "",
        category: "",
        duration: "",
        views: "0",
        date: "",
        youtubeId: "",
        speaker: "",
        topics: [],
        thumbnail: "",
        status: "upcoming",
        featured: false
      })
      setIsAddDialogOpen(false)
    } catch (error) {
      console.error('Error adding webinar:', error)
    }
  }

  const handleEditWebinar = (webinar: Webinar) => {
    setEditingWebinar(webinar)
    setNewWebinar({
      title: webinar.title,
      description: webinar.description,
      category: webinar.category,
      duration: webinar.duration,
      views: webinar.views,
      date: webinar.date,
      youtubeId: webinar.youtubeId,
      speaker: webinar.speaker,
      topics: webinar.topics || [],
      thumbnail: webinar.thumbnail,
      status: webinar.status,
      featured: webinar.featured || false
    })
  }

  const handleUpdateWebinar = async () => {
    if (!editingWebinar?.id) return
    
    try {
      await webinarsService.update(editingWebinar.id, {
        ...newWebinar,
        topics: newWebinar.topics.length > 0 ? newWebinar.topics : []
      })
      await fetchWebinars()
      setEditingWebinar(null)
      setNewWebinar({
        title: "",
        description: "",
        category: "",
        duration: "",
        views: "0",
        date: "",
        youtubeId: "",
        speaker: "",
        topics: [],
        thumbnail: "",
        status: "upcoming",
        featured: false
      })
    } catch (error) {
      console.error('Error updating webinar:', error)
    }
  }

  const handleDeleteWebinar = async (webinarId: string) => {
    if (!confirm('Are you sure you want to delete this webinar?')) return
    
    try {
      await webinarsService.delete(webinarId)
      await fetchWebinars()
    } catch (error) {
      console.error('Error deleting webinar:', error)
    }
  }

  const handleViewWebinar = (webinar: Webinar) => {
    // Open webinars page in a new tab
    window.open('/webinars', '_blank')
  }

  const getStatusBadge = (status: Webinar["status"]) => {
    const colors = {
      upcoming: "bg-blue-100 text-blue-800",
      live: "bg-green-100 text-green-800",
      completed: "bg-gray-100 text-gray-800"
    }
    
    return <Badge className={colors[status]}>{status}</Badge>
  }

  const handleTopicsChange = (topicsString: string) => {
    const topics = topicsString.split(',').map(topic => topic.trim()).filter(topic => topic.length > 0)
    setNewWebinar({...newWebinar, topics})
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Webinars Management</h1>
            <p className="text-gray-600 mt-1">Create and manage webinars and video content</p>
          </div>
          
          <div className="flex space-x-2">
            {webinars.length === 0 && (
              <Button 
                onClick={handleInitializeWebinars}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                🚀 Initialize Sample Data
              </Button>
            )}
            
            {webinars.length > 6 && (
              <Button 
                onClick={handleResetToSix}
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                🔄 Reset to Only 6
              </Button>
            )}
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Webinar
                </Button>
              </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Webinar</DialogTitle>
                <DialogDescription>
                  Create a new webinar entry for your website.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={newWebinar.title}
                    onChange={(e) => setNewWebinar({...newWebinar, title: e.target.value})}
                    placeholder="Enter webinar title"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={newWebinar.description}
                    onChange={(e) => setNewWebinar({...newWebinar, description: e.target.value})}
                    placeholder="Enter webinar description"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={newWebinar.category} onValueChange={(value) => setNewWebinar({...newWebinar, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration *</Label>
                    <Input
                      id="duration"
                      value={newWebinar.duration}
                      onChange={(e) => setNewWebinar({...newWebinar, duration: e.target.value})}
                      placeholder="e.g., 45 min"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="views">Views</Label>
                    <Input
                      id="views"
                      value={newWebinar.views}
                      onChange={(e) => setNewWebinar({...newWebinar, views: e.target.value})}
                      placeholder="e.g., 2.3K"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      value={newWebinar.date}
                      onChange={(e) => setNewWebinar({...newWebinar, date: e.target.value})}
                      placeholder="e.g., Dec 15, 2024"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="speaker">Speaker *</Label>
                  <Input
                    id="speaker"
                    value={newWebinar.speaker}
                    onChange={(e) => setNewWebinar({...newWebinar, speaker: e.target.value})}
                    placeholder="e.g., Sarah Chen, Digital Strategy Director"
                  />
                </div>

                <div>
                  <Label htmlFor="youtubeId">YouTube Video ID *</Label>
                  <Input
                    id="youtubeId"
                    value={newWebinar.youtubeId}
                    onChange={(e) => setNewWebinar({...newWebinar, youtubeId: e.target.value})}
                    placeholder="e.g., dQw4w9WgXcQ"
                  />
                </div>

                <div>
                  <Label htmlFor="thumbnail">Thumbnail URL *</Label>
                  <Input
                    id="thumbnail"
                    value={newWebinar.thumbnail}
                    onChange={(e) => setNewWebinar({...newWebinar, thumbnail: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>

                <div>
                  <Label htmlFor="topics">Topics (comma-separated)</Label>
                  <Input
                    id="topics"
                    value={newWebinar.topics.join(', ')}
                    onChange={(e) => handleTopicsChange(e.target.value)}
                    placeholder="e.g., Cloud Migration, Process Automation, Change Management"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={newWebinar.status} onValueChange={(value: Webinar["status"]) => setNewWebinar({...newWebinar, status: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newWebinar.featured}
                        onChange={(e) => setNewWebinar({...newWebinar, featured: e.target.checked})}
                        className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm font-medium">Featured</span>
                    </label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddWebinar} className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                  Add Webinar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Video className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Webinars</p>
                  <p className="text-2xl font-bold text-gray-900">{webinars.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Play className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{webinars.filter(w => w.status === "completed").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Upcoming</p>
                  <p className="text-2xl font-bold text-gray-900">{webinars.filter(w => w.status === "upcoming").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-[#f97316]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Featured</p>
                  <p className="text-2xl font-bold text-gray-900">{webinars.filter(w => w.featured).length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Webinars</CardTitle>
            <CardDescription>
              View and manage all your webinars
            </CardDescription>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search webinars..."
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
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <BrillionLoader size="lg" theme="orange" showText={true} text="Loading webinars..." />
              </div>
            ) : filteredWebinars.length === 0 && webinars.length === 0 ? (
              <div className="text-center py-16">
                <Video className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No webinars found</h3>
                <p className="text-gray-500 mb-4">
                  Get started by initializing sample webinars or adding your first webinar.
                </p>
                <Button 
                  onClick={handleInitializeWebinars}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  🚀 Initialize Sample Webinars
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Webinar</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Speaker</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWebinars.map((webinar) => (
                    <TableRow key={webinar.id}>
                      <TableCell>
                        <div className="max-w-xs">
                          <div className="font-medium flex items-center">
                            {webinar.title}
                            {webinar.featured && (
                              <Star className="h-4 w-4 text-yellow-500 ml-2" />
                            )}
                          </div>
                          <div className="text-sm text-gray-600 truncate">{webinar.description}</div>
                          <div className="text-xs text-gray-500 mt-1">{webinar.date}</div>
                        </div>
                      </TableCell>
                      <TableCell>{webinar.category}</TableCell>
                      <TableCell className="text-sm">{webinar.speaker}</TableCell>
                      <TableCell>{getStatusBadge(webinar.status)}</TableCell>
                      <TableCell>{webinar.duration}</TableCell>
                      <TableCell>{webinar.views}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleViewWebinar(webinar)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditWebinar(webinar)}>
                              <Pencil className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              onClick={() => webinar.id && handleDeleteWebinar(webinar.id)}
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
            )}
          </CardContent>
        </Card>
      </div>

      {/* Edit Webinar Modal */}
      {editingWebinar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setEditingWebinar(null)}
          />
          
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b">
              <h2 className="text-2xl font-semibold">Edit Webinar</h2>
              <p className="text-sm text-gray-600 mt-1">Update webinar details</p>
              <button
                onClick={() => setEditingWebinar(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <Label htmlFor="edit-title">Title *</Label>
                <Input
                  id="edit-title"
                  value={newWebinar.title}
                  onChange={(e) => setNewWebinar({...newWebinar, title: e.target.value})}
                  placeholder="Enter webinar title"
                />
              </div>
              
              <div>
                <Label htmlFor="edit-description">Description *</Label>
                <Textarea
                  id="edit-description"
                  value={newWebinar.description}
                  onChange={(e) => setNewWebinar({...newWebinar, description: e.target.value})}
                  placeholder="Enter webinar description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-category">Category *</Label>
                  <Select value={newWebinar.category} onValueChange={(value) => setNewWebinar({...newWebinar, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="edit-duration">Duration *</Label>
                  <Input
                    id="edit-duration"
                    value={newWebinar.duration}
                    onChange={(e) => setNewWebinar({...newWebinar, duration: e.target.value})}
                    placeholder="e.g., 45 min"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-views">Views</Label>
                  <Input
                    id="edit-views"
                    value={newWebinar.views}
                    onChange={(e) => setNewWebinar({...newWebinar, views: e.target.value})}
                    placeholder="e.g., 2.3K"
                  />
                </div>

                <div>
                  <Label htmlFor="edit-date">Date *</Label>
                  <Input
                    id="edit-date"
                    value={newWebinar.date}
                    onChange={(e) => setNewWebinar({...newWebinar, date: e.target.value})}
                    placeholder="e.g., Dec 15, 2024"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="edit-speaker">Speaker *</Label>
                <Input
                  id="edit-speaker"
                  value={newWebinar.speaker}
                  onChange={(e) => setNewWebinar({...newWebinar, speaker: e.target.value})}
                  placeholder="e.g., Sarah Chen, Digital Strategy Director"
                />
              </div>

              <div>
                <Label htmlFor="edit-youtubeId">YouTube Video ID *</Label>
                <Input
                  id="edit-youtubeId"
                  value={newWebinar.youtubeId}
                  onChange={(e) => setNewWebinar({...newWebinar, youtubeId: e.target.value})}
                  placeholder="e.g., dQw4w9WgXcQ"
                />
              </div>

              <div>
                <Label htmlFor="edit-thumbnail">Thumbnail URL *</Label>
                <Input
                  id="edit-thumbnail"
                  value={newWebinar.thumbnail}
                  onChange={(e) => setNewWebinar({...newWebinar, thumbnail: e.target.value})}
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <Label htmlFor="edit-topics">Topics (comma-separated)</Label>
                <Input
                  id="edit-topics"
                  value={newWebinar.topics.join(', ')}
                  onChange={(e) => handleTopicsChange(e.target.value)}
                  placeholder="e.g., Cloud Migration, Process Automation, Change Management"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-status">Status</Label>
                  <Select value={newWebinar.status} onValueChange={(value: Webinar["status"]) => setNewWebinar({...newWebinar, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newWebinar.featured}
                      onChange={(e) => setNewWebinar({...newWebinar, featured: e.target.checked})}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm font-medium">Featured</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setEditingWebinar(null)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleUpdateWebinar}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}