import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <nav className="space-y-2">
          <Button
            variant={activeTab === "gallery" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </Button>
          <Button
            variant={activeTab === "data" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("data")}
          >
            Data Display
          </Button>
          <Button
            variant={activeTab === "model" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("model")}
          >
            Model Integration
          </Button>
        </nav>
      </div>
    </div>
  )
}

