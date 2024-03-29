import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonProfile({ theme }) {
  const themeClasses = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClasses}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
