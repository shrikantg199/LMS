"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Loading() {
  return (
    <Suspense fallback={null}>
      <LoadingContent />
    </Suspense>
  );
}

function LoadingContent() {
  const [showLoader, setShowLoader] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 1 second minimum loading time

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // Re-trigger on route changes

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-3 border-red-800"></div>
      </div>
    </div>
  );
}
