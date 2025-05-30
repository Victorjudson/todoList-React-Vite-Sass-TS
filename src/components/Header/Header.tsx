// Estamos usando um componente funcional junto com o typeScript, e estamos usando o React.FC para tipar o componente com o typeScript. isso nos permite evisar erros futuros que talvez possam acontecer
import { useContext } from "react";
import { TasksContext } from "../../Context/TasksContext.tsx";
import { StatsCard } from "../StatsCard/StatsCard.tsx";
import style from "./style.module.scss";

export const Header: React.FC = () => {
  const { task } = useContext(TasksContext);

  const totalTasks = task.length;
  const totalPendingTasks = task.reduce((total, tasks) => {
    if (!tasks.done) {
      return total + 1;
    }
    return total;
  }, 0);
  const totalCompletedTasks = totalTasks - totalPendingTasks;

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem vindo, Victor!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas pendentes" value={totalPendingTasks} />
          <StatsCard title="Total Concluídas" value={totalCompletedTasks} />
        </div>
      </div>
    </header>
  );
};
