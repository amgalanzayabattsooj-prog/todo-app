export const PageHeader = () => {
  return (
    <header className="flex items-center gap-3 px-8 pb-6 pt-8">
      <div className="flex size-11 items-center justify-center rounded-xl bg-[#E3EEE7] text-[#2F6B55]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="5" height="5" rx="1" />
          <path d="M4.5 16.5l1.5 1.5 2.5-3" />
          <path d="M12 6.5h9M12 17h9" />
        </svg>
      </div>
      <h1 className="text-3xl font-semibold text-[#1F3D36]">
        My tasks<span className="text-[#5C8A74]">.</span>
      </h1>
    </header>
  );
};