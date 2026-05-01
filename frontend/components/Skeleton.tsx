import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-md dark:bg-gray-700 ${className}`}
    />
  );
};

export default Skeleton;
