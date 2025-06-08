import { Card, CardContent } from "@/components/ui/card"

export default function CategoryLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-16 bg-gray-100 animate-pulse" />

      {/* Hero Skeleton */}
      <div className="h-32 bg-gray-200 animate-pulse" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Breadcrumb Skeleton */}
            <div className="h-4 bg-gray-200 rounded w-48 mb-6 animate-pulse" />

            {/* Title Skeleton */}
            <div className="mb-8">
              <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-48 mb-4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-96 animate-pulse" />
            </div>

            {/* Articles Grid Skeleton */}
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gray-200 animate-pulse" />
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-20 animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <Card className="p-4">
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </Card>
            <Card className="p-4">
              <div className="h-32 bg-gray-200 rounded animate-pulse" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
