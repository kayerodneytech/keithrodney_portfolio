import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-dark-800/50", className)}
      {...props}
    />
  );
}

export function SkeletonText({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Skeleton className="h-4 w-[250px]" {...props} />
      <Skeleton className="h-4 w-[200px]" {...props} />
      <Skeleton className="h-4 w-[150px]" {...props} />
    </div>
  );
}

export function SkeletonCard({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton className="h-[200px] w-full rounded-lg" {...props} />
      <Skeleton className="h-4 w-2/3" {...props} />
      <Skeleton className="h-4 w-1/2" {...props} />
    </div>
  );
}

export function SkeletonAvatar({ className, ...props }: SkeletonProps) {
  return (
    <Skeleton className={cn("h-12 w-12 rounded-full", className)} {...props} />
  );
}
