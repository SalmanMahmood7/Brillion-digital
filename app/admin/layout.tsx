import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brillion Digital - Admin Panel",
  description: "Admin dashboard for managing Brillion Digital website",
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}