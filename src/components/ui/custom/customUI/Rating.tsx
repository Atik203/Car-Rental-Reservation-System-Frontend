import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../badge";

interface RatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  fill?: boolean;
  Icon?: React.ReactElement;
  variant?: keyof typeof ratingVariants;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  showBadge?: boolean;
}

const ratingVariants = {
  default: {
    star: "text-foreground",
    emptyStar: "text-muted-foreground",
  },
  destructive: {
    star: "text-red-500",
    emptyStar: "text-red-200",
  },
  yellow: {
    star: "text-yellow-500",
    emptyStar: "text-yellow-200",
  },
};

export const Rating: React.FC<RatingProps> = ({
  rating: initialRating,
  totalStars = 5,
  size = 20,
  fill = true,
  Icon = <Star />,
  variant = "default",
  onRatingChange,
  readOnly = false,
  showBadge = true,
  ...props
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(initialRating);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly) return;
    setIsHovering(true);
    const starIndex = parseInt(
      (event.currentTarget as HTMLDivElement).dataset.starIndex || "0"
    );
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setIsHovering(false);
    setHoverRating(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly) return;
    const starIndex = parseInt(
      (event.currentTarget as HTMLDivElement).dataset.starIndex || "0"
    );
    setCurrentRating(starIndex);
    setHoverRating(null);
    onRatingChange?.(starIndex);
  };

  const displayRating = hoverRating ?? currentRating;
  const fullStars = Math.floor(displayRating);
  const partialStar =
    displayRating % 1 > 0 ? (
      <PartialStar
        fillPercentage={displayRating % 1}
        size={size}
        className={cn(ratingVariants[variant].star)}
        Icon={Icon}
      />
    ) : null;

  return (
    <div
      className={cn("flex w-fit items-center gap-2")}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="flex items-center" onMouseEnter={handleMouseEnter}>
        {[...Array(fullStars)].map((_, i) =>
          React.cloneElement(Icon, {
            key: i,
            size,
            className: cn(
              fill ? "fill-current stroke-1" : "fill-transparent",
              ratingVariants[variant].star
            ),
            onClick: handleClick,
            onMouseEnter: handleMouseEnter,
            "data-star-index": i + 1,
          })
        )}
        {partialStar}
        {[
          ...Array(Math.max(0, totalStars - fullStars - (partialStar ? 1 : 0))),
        ].map((_, i) =>
          React.cloneElement(Icon, {
            key: i + fullStars + 1,
            size,
            className: cn("stroke-1", ratingVariants[variant].emptyStar),
            onClick: handleClick,
            onMouseEnter: handleMouseEnter,
            "data-star-index": i + fullStars + 1,
          })
        )}
      </div>
      {showBadge && (
        <Badge className="px-2 py-1 bg-primary text-white rounded-full">{`${currentRating}`}</Badge>
      )}
    </div>
  );
};

interface PartialStarProps {
  fillPercentage: number;
  size: number;
  className?: string;
  Icon: React.ReactElement;
}

const PartialStar: React.FC<PartialStarProps> = ({
  fillPercentage,
  size,
  className,
  Icon,
}) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {React.cloneElement(Icon, {
        size,
        className: cn("fill-transparent", className),
      })}
      <div
        style={{
          position: "absolute",
          top: 0,
          overflow: "hidden",
          width: `${fillPercentage * 100}%`,
        }}
      >
        {React.cloneElement(Icon, {
          size,
          className: cn("fill-current", className),
        })}
      </div>
    </div>
  );
};
