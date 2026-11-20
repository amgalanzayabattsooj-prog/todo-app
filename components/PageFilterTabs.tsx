export type Filter = "all" | "active" | "completed";

type Props = {
  value: Filter;
  onChange: (value: Filter) => void;
  count: number;
};

const tabs: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export const PageFilterTabs = ({ value, onChange, count }: Props) => {
  return (
    <nav className="flex h-12 items-stretch gap-7 border-b border-[#E8EEE9] px-8">
      {tabs.map(({ key, label }) => {
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`relative text-base font-medium transition ${
              active ? "text-[#2F6B55]" : "text-[#6B7F74] hover:text-[#2F6B55]"
            }`}
          >
            {label}
            {active && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#2F6B55]" />}
          </button>
        );
      })}
      <span className="my-auto ml-auto rounded-md bg-[#F0F3F0] px-2 py-0.5 text-sm text-[#6B7F74]">
        {count}
      </span>
    </nav>
  );
};