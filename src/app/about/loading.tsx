import { Card, CardContent } from "@/components/ui/card"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-16 bg-gray-100 animate-pulse" />

      {/* Hero Skeleton */}
      <div className="h-96 bg-gray-200 animate-pulse" />

      {/* Content Sections Skeleton */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="h-48 bg-gray-200 rounded mb-4 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* More sections skeleton */}
      <div className="h-32 bg-gray-100 animate-pulse" />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
