import styles from "./styles/TaskWrapper.module.css";
import { Task } from "../Task/Task";

const TaskWrapper = ({ tasks, setTasks }) => {
  return (
    <div className={styles.cards}>
      <div className={styles["main-title"]}>
        <h2 className={styles["h2-title"]}>In progress:</h2>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isDone={task.isDone}
          creationDate={task.creationDate}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export { TaskWrapper };
