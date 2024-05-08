import styles from "./styles/Task.module.css";
import x_icon from "../../../assets/close_delete_remove_icon.svg";
import Image from "next/image";

const Task = ({
  id,
  title,
  description,
  isDone,
  creationDate,
  tasks,
  setTasks,
}) => {
  const changeTaskStatus = () => {
    const index = tasks.findIndex((task) => task.id === id);

    const tasksClone = tasks;

    tasksClone[index].isDone = !isDone;

    setTasks([...tasksClone]);
  };

  return (
    <div className={styles["card-content"]}>
      <div className={styles["added-card"]}>
        <div className={styles["remove-symbol"]}>
          <Image alt="exit icon" className={styles.x_icon} src={x_icon} />
        </div>

        <div className={styles["card-title"]}>
          <p>{title}</p>
        </div>
        <p>{description}</p>

        <div className={styles["bottom-circle"]}>
          <button onClick={changeTaskStatus}>
            <p className={styles["button-paragraph"]}>Click</p>
          </button>

          <p className={styles["added-date"]}>{creationDate}</p>

          <div
            className={`${
              isDone ? styles["color-check-green"] : styles["color-check-red"]
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export { Task };
