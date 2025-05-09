
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  selectedRole: string;
  onRoleChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  onResetFilters: () => void;
}

export function FilterBar({ 
  selectedRole, 
  onRoleChange, 
  sortBy, 
  onSortChange, 
  onResetFilters 
}: FilterBarProps) {
  return (
    <div className="container py-4 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
      <div className="flex flex-wrap gap-3">
        <Select value={selectedRole} onValueChange={onRoleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="batsman">Batsman</SelectItem>
            <SelectItem value="bowler">Bowler</SelectItem>
            <SelectItem value="all-rounder">All-Rounder</SelectItem>
            <SelectItem value="wicketkeeper">Wicketkeeper</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort Players" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            <SelectItem value="runs-desc">Most Runs</SelectItem>
            <SelectItem value="wickets-desc">Most Wickets</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" onClick={onResetFilters} className="h-10">
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
