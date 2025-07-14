"use client"

export default function SkeletonRoom() {
  return (
    <section className="py-20 px-6 animate-pulse bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="h-6 w-1/3 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-300 rounded" />
          ))}
        </div>
        <div className="h-5 w-1/4 bg-gray-300 rounded" />
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 w-3/4 bg-gray-300 rounded" />
          ))}
        </div>
        <div className="h-6 w-1/3 bg-gray-300 rounded mt-8" />
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 w-36 bg-gray-300 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
}
