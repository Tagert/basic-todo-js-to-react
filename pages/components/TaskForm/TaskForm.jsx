import styles from "./styles/TaskForm.module.css";
import { useState } from "react";

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generateId = () => {
    const randomNumber = () => Math.floor(Math.random() * 10);

    const id = [
      randomNumber(),
      randomNumber(),
      "-",
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
    ].join("");

    return id;
  };

  const addTask = () => {
    if (title.length >= 3) {
      const formattedDate = new Date().toLocaleDateString("lt-LT", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const newTask = {
        id: generateId(),
        title: title,
        description: description,
        isDone: false,
        creationDate: formattedDate,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks([...tasks, newTask]);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      setTitle("");
      setDescription("");
    } else {
      console.log("Please enter more than 3 letters");
    }
  };

  return (
    <div className={`${styles.cards} ${styles["add-task-side"]}`}>
      <div className={styles["main-title"]}>
        <h1>Todo list: application</h1>
      </div>

      <div className={styles.form}>
        <div className={styles.title}>
          <label>Add your title:</label>
          <input
            className={styles["titleId"]}
            value={title}
            placeholder="Enter a title for this card..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles["text-area"]}>
          <label>Add your description:</label>
          <textarea
            name="text-area"
            className={styles["text-areaId"]}
            value={description}
            cols="30"
            rows="5"
            placeholder="Your description here..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={styles["add-button"]}>
          <button className={styles["add-buttonId"]} onClick={addTask}>
            <p>Add a card</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { TaskForm };
