
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlayerType } from "@/types/player";

interface PlayerCardProps {
  player: PlayerType;
  onAddToCart: (player: PlayerType) => void;
  isInCart: boolean;
}

export function PlayerCard({ player, onAddToCart, isInCart }: PlayerCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  const roleClass = `role-${player.role.toLowerCase().replace(' ', '-')}`;
  const roleBadgeClass = `role-badge-${player.role.toLowerCase().replace(' ', '-')}`;

  const formatAmount = (amount: number): string => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `${(amount / 100000).toFixed(2)} L`;
    }
    return amount.toLocaleString();
  };

  return (
    <div 
      className={`bg-card shadow rounded-lg transition-all duration-300 p-4 flex flex-col items-center ${isInCart ? 'ring-2 ring-primary' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative">
        <div className={`w-20 h-20 rounded-full overflow-hidden border-4 ${roleClass} mb-2`}>
          <img
            src={player.imageUrl || '/placeholder.svg'}
            alt={player.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        <Badge className={`absolute -bottom-1 ${roleBadgeClass} text-xs`}>
          {player.role}
        </Badge>
      </div>
      
      <h3 className="font-semibold text-lg mt-2 text-center">{player.name}</h3>
      <p className="text-sm text-muted-foreground text-center">{player.team}</p>
      
      <div className="flex justify-center gap-3 mt-2 mb-2 text-xs">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{player.matches}</span>
          <span className="text-muted-foreground">Matches</span>
        </div>
        
        {player.role !== 'Bowler' && (
          <div className="flex flex-col items-center">
            <span className="font-semibold">{player.runs}</span>
            <span className="text-muted-foreground">Runs</span>
          </div>
        )}
        
        {player.role !== 'Batsman' && player.role !== 'Wicketkeeper' && (
          <div className="flex flex-col items-center">
            <span className="font-semibold">{player.wickets}</span>
            <span className="text-muted-foreground">Wickets</span>
          </div>
        )}
      </div>
      
      <div className="mt-auto pt-2 w-full flex items-center justify-between">
        <div className="text-sm font-medium">
          {formatAmount(player.basePrice)}
        </div>
        
        <Button 
          size="sm" 
          variant={isInCart ? "outline" : "default"}
          onClick={() => onAddToCart(player)}
          className="text-xs py-1 h-7"
        >
          {isInCart ? "Selected" : "Select"}
        </Button>
      </div>
    </div>
  );
}
