"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminWebinars() {
  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-900">Webinars Management</h1>
        <p className="text-gray-600 mt-2">Manage upcoming webinars and events</p>
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800">Webinars admin panel is loading...</p>
        </div>
      </div>
    </AdminLayout>
  );
}