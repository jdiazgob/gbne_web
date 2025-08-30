"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Apply classes to body during hydration
  useEffect(() => {
    if (className) {
      document.body.className = `${className} antialiased`;
    } else {
      document.body.className = "antialiased";
    }
  }, [className]);

  return <body suppressHydrationWarning className={`${className || ""} antialiased`}>{children}</body>;
}
