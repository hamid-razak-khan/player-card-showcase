
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  onResetFilters: () => void;
}

export function FilterBar({ onResetFilters }: FilterBarProps) {
  return (
    <div className="container py-4 flex justify-between items-center">
      <div className="flex gap-3">
        <Button variant="outline" onClick={onResetFilters} className="h-10">
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
