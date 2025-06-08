import { Card, CardContent } from "@/components/ui/card"

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-16 bg-gray-100 animate-pulse" />

      {/* Hero Skeleton */}
      <div className="h-32 bg-gray-200 animate-pulse" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Skeleton */}
          <div className="h-4 bg-gray-200 rounded w-48 mb-6 animate-pulse" />

          {/* Title Skeleton */}
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-2 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>

          {/* Form Skeleton */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
                <div className="h-12 bg-gray-200 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
