import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockData = {
  totalItems: 1000,
  recyclable: 600,
  nonRecyclable: 400,
  topCategories: [
    { name: "Plastic", count: 400 },
    { name: "Paper", count: 300 },
    { name: "Metal", count: 200 },
    { name: "Glass", count: 100 },
  ],
}

export function DataDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Items Identified</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{mockData.totalItems}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recyclable vs Non-Recyclable</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-semibold text-green-600">{mockData.recyclable}</p>
              <p>Recyclable</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-red-600">{mockData.nonRecyclable}</p>
              <p>Non-Recyclable</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Top Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockData.topCategories.map((category, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-semibold">{category.count}</p>
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

