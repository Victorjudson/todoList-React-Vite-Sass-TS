import { useContext, useState, type FormEvent } from "react";
import styles from "./style.module.scss";
import { TasksContext } from "../../Context/TasksContext";

export const Tesks: React.FC = () => {
  const [teskTitle, setTeskTitle] = useState("");

  const { task, setTask } = useContext(TasksContext);

  function renderTesk(evento: FormEvent) {
    evento.preventDefault();

    if (teskTitle.length <= 3) {
      alert("Digite uma tarefa valida");
      return;
    }

    const dataTask = [...task, { id: new Date().getTime(), title: teskTitle, done: false }];

    setTask(dataTask);
    localStorage.setItem("tasks", JSON.stringify(dataTask));
    setTeskTitle("");
  }

  function handleToggleTask(taskid: number) {
    const updatedTasks = task.map((tasklist) => {
      if (taskid === tasklist.id) {
        return { ...tasklist, done: !tasklist.done };
      }

      return tasklist;
    });

    setTask(updatedTasks);
  }

  function handleDeleteTask(taskid: number) {
    const checkDone = task.find((t) => t.id === taskid);
    if (checkDone && !checkDone.done) {
      alert("Você não pode deletar uma tarefa que não foi concluída.");
    }
    const deleteTask = task.filter((tasklist) => {
      if (taskid === tasklist.id && tasklist.done) {
        return null;
      }
      return tasklist;
    });
    setTask(deleteTask);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={renderTesk}>
        <div>
          <label htmlFor="tesk-title">Digite sua tarefa</label>
          <input value={teskTitle} onChange={(evento) => setTeskTitle(evento.target.value)} type="text" id="tesk-title" placeholder="Digite aqui" />
        </div>
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {task.map((task) => {
          return (
            <li key={task.id}>
              <input type={"checkbox"} id={`task- ${task.id}`} onChange={() => handleToggleTask(task.id)} />
              <div>
                {" "}
                <label htmlFor={`tasks-${task.id}`} className={task.done ? styles.done : ""}>
                  {task.title}
                </label>
                <button onClick={() => handleDeleteTask(task.id)}>Deletar</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
