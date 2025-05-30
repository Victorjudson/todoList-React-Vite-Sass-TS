import { Header } from "./components/Header/Header";
import { Tesks } from "./components/Tasks/Tesks";
import { TasksProvider } from "./Context/TasksProvider";
import "./global.module.scss";
export function App() {
  return (
    <TasksProvider>
      <Header />
      <Tesks />
    </TasksProvider>
  );
}
