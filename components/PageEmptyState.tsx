type Props = { hasTasks: boolean };

export const PageEmptyState = ({ hasTasks }: Props) => {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-2">
      <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-[#EAF0EB] text-[#5C8A74]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-[#1F3D36]">
        {hasTasks ? "No tasks here" : "Your list starts here"}
      </p>
      <p className="text-base text-[#7C8F85]">
        {hasTasks ? "Try another filter to see your tasks." : "Add your first task above."}
      </p>
    </div>
  );
};