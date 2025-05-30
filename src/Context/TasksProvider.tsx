import { useState, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import type { Task } from "./TasksContext";

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [task, setTask] = useState([] as Task[]);
  useEffect(() => {
    const localtask = localStorage.getItem("tasks");
    if (localtask) {
      setTask(JSON.parse(localtask));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        task,
        setTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
