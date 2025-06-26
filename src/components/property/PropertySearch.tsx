import { useState } from "react";
import { Search, Mic, LocateFixed, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Buy",
  "Rent",
  "New Launch",
  "PG / Co-living",
  "Plots/Land",
];

export default function SearchBarTabs() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl sm:p-4 shadow-sm border">
      {/* Tabs (Hidden on mobile) */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 border-b pb-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`bg-white relative text-sm font-medium transition-colors ${
              activeTab === item
                ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {item}
            {item === "New Launch" && (
              <span className="absolute -top-1 -right-2 text-red-500 text-xs">
                ●
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Desktop Search Bar */}
      <div className=" hidden sm:flex mt-4 items-center gap-1">
        {/* Dropdown */}
        <Select defaultValue="All Residential">
          <SelectTrigger className="h-9 w-40 text-sm">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Residential">All Residential</SelectItem>
            <SelectItem value="Flat/Apartment">Flat / Apartment</SelectItem>
            <SelectItem value="Independent House">Independent House</SelectItem>
            <SelectItem value="Villa">Villa</SelectItem>
            <SelectItem value="Plot/Land">Plot / Land</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>

        {/* Input */}
        <input
          type="text"
          placeholder="Search '3 BHK in Mumbai'"
          className="flex-1 h-9 px-3 border bg-white border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        {/* Icons */}
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 p-2">
            <LocateFixed className="h-4 w-4 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 p-2">
            <Mic className="h-4 w-4 text-blue-600" />
          </Button>
        </div>

        {/* Search */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm font-medium">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Mobile Search Input Only */}
      <div className="sm:hidden flex items-center p-2">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search '3 BHK in Mumbai'"
          className="flex-1 h-9 px-3 border bg-white border-gray-200 border-none rounded-md text-sm focus:outline-none focus:border-none focus:ring-1 focus:ring-blue-500"
        />

        {/* Search */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm font-medium">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}
