export function SectionSkeleton({ heightClass = "h-[480px]" }: { heightClass?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 py-28 md:px-16 ${heightClass}`}>
      <div className="h-full w-full animate-pulse rounded-[28px] bg-panel/40" />
    </div>
  );
}
