export type Task = { id: string; title: string; done: boolean };

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const PageTaskList = ({ tasks, onToggle, onDelete }: Props) => {
  return (
    <ul className="flex flex-col">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-4 border-b border-[#EEF2EF] px-8 py-4 transition hover:bg-[#F3F6F3] last:border-b-0"
        >
          <button
            type="button"
            role="checkbox"
            aria-checked={task.done}
            onClick={() => onToggle(task.id)}
            className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
              task.done
                ? "border-[#2F6B55] bg-[#2F6B55] text-white"
                : "border-[#B9C8BF] hover:border-[#2F6B55]"
            }`}
          >
            {task.done && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            )}
          </button>
          <span
            className={`flex-1 text-lg transition ${
              task.done ? "text-[#9AAAA1] line-through" : "text-[#1F3D36]"
            }`}
          >
            {task.title}
          </span>
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            aria-label="Delete task"
            className="text-[#9AAAA1] transition hover:text-[#B54A4A]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M6 6l1 14h10l1-14" />
              <path d="M10 11v5M14 11v5" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};