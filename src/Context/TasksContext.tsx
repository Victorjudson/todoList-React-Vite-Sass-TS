import React, { createContext, } from "react";

export interface Task {
  title: string;
  id: number;
  done: boolean;
}

interface TasksContextType {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;

}
export const TasksContext = createContext({} as TasksContextType);

