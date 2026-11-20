"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { PageTaskInput } from "@/components/PageTaskInput";
import { PageFilterTabs, type Filter } from "@/components/PageFilterTabs";
import { PageTaskList, type Task } from "@/components/PageTaskList";
import { PageEmptyState } from "@/components/PageEmptyState";

const createId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const MainPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = (title: string) => {
    setTasks((prev) => [{ id: createId(), title, done: false }, ...prev]);
    setFilter((prev) => (prev === "completed" ? "all" : prev));
  };

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id: string) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const visible = tasks.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EAF0EB] px-16 py-20">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_80px_-24px_rgba(23,74,69,0.18)]">
        <PageHeader />
        <PageTaskInput onAdd={addTask} />
        <PageFilterTabs value={filter} onChange={setFilter} count={visible.length} />
        {visible.length === 0 ? (
          <PageEmptyState hasTasks={tasks.length > 0} />
        ) : (
          <PageTaskList tasks={visible} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      </div>
    </main>
  );
};

export default MainPage;