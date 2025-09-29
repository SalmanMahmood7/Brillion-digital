"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { articlesService } from "@/lib/firebase-services";
import { Timestamp } from "firebase/firestore";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Eye } from "lucide-react";

export default function AddPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "Brillion Digital Team",
    status: "draft" as "draft" | "published",
    featured: false,
    category: "",
    industry: "",
    topic: "",
    excerpt: "",
    content: "",
    image: "",
    downloadableAsset: "",
    readTime: "5 min read",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      title: value,
      slug: generateSlug(value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Prepare article data
      const articleData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        author: formData.author,
        published: formData.status === "published",
        featured: formData.featured,
        category: formData.category,
        industry: formData.industry,
        topic: formData.topic,
        excerpt: formData.excerpt,
        content: formData.content,
        image: formData.image || `/insight-${Math.floor(Math.random() * 4) + 1}.jpg`,
        downloadableAsset: formData.downloadableAsset,
        readTime: formData.readTime,
        date: new Date().toISOString().split('T')[0],
        dateValue: Timestamp.fromDate(new Date()),
        icon: "TrendingUp", // Default icon
        color: "blue", // Default color
        relatedServices: [], // Can be added later
        keyTakeaways: [] // Can be extracted from content later
      };

      await articlesService.create(articleData, "admin-user");
      setMessage("✅ Article created successfully!");
      
      // Redirect to content page after 2 seconds
      setTimeout(() => {
        router.push("/admin/content");
      }, 2000);
      
    } catch (error) {
      console.error('Error creating article:', error);
      setMessage(`❌ Error creating article: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    if (formData.slug) {
      window.open(`/insights/${formData.slug}`, '_blank');
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Article</h1>
              <p className="text-gray-600 mt-1">Add a new article to the insights section</p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push("/admin/content")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Content
            </Button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.startsWith('✅') 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Basic Information Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Essential details about your article</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter article title"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({...formData, slug: e.target.value})}
                      placeholder="article-url-slug"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      placeholder="Author name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select 
                      value={formData.status} 
                      onValueChange={(value: "draft" | "published") => setFormData({...formData, status: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                        className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm font-medium">Featured Article</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categorization Card */}
            <Card>
              <CardHeader>
                <CardTitle>Categorization</CardTitle>
                <CardDescription>Organize your article with categories and tags</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({...formData, category: value})}
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
                      value={formData.industry} 
                      onValueChange={(value) => setFormData({...formData, industry: value})}
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

                <div>
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    placeholder="e.g., AI & Machine Learning, Cloud Migration, Security"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content Card */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your article content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Brief description that appears in article listings"
                    rows={3}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="content">Full Content *</Label>
                  <div className="mt-1">
                    <RichTextEditor
                      value={formData.content}
                      onChange={(value) => setFormData({...formData, content: value})}
                      placeholder="Write your article content here. Use the toolbar to format text."
                      minHeight="500px"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media & Assets Card */}
            <Card>
              <CardHeader>
                <CardTitle>Media & Assets</CardTitle>
                <CardDescription>Add images and downloadable resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="image">Featured Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="/images/article-image.jpg or https://..."
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave empty to use a default image
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="download">Downloadable Asset</Label>
                    <Input
                      id="download"
                      value={formData.downloadableAsset}
                      onChange={(e) => setFormData({...formData, downloadableAsset: e.target.value})}
                      placeholder="/downloads/resource.pdf"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="readtime">Read Time</Label>
                    <Input
                      id="readtime"
                      value={formData.readTime}
                      onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                      placeholder="5 min read"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center p-6 bg-gray-50 rounded-lg">
              <Button
                type="button"
                variant="outline"
                onClick={handlePreview}
                disabled={!formData.slug}
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/content")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {loading ? 'Creating...' : 'Create Article'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}