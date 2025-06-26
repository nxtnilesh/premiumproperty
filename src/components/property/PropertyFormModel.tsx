import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function PropertyFormModal() {
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    title: "",
    location: "",
    propertyType: "",
    price: "",
    description: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log("Submitted Property:", formData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-blue-600 hover:bg-blue-200">Add Property</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Property Title</Label>
            <Input
              placeholder="Luxury Apartment in Mumbai"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Location</Label>
            <Input
              placeholder="Bandra, Mumbai"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Property Type</Label>
            <Select
              onValueChange={(value) => handleChange("propertyType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Price (₹)</Label>
            <Input
              type="number"
              placeholder="e.g. 15000000"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Add a short description of the property"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
