import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskWrapper } from "./components/TaskWrapper/TaskWrapper";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  // const [removedTasks, setRemovedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles["main-side-section"]}>
        <div className={styles.container}>
          <div className={styles["left-side"]}>
            <TaskForm tasks={tasks} setTasks={setTasks} />

            {/* <div className={`${styles.cards} ${styles["removed-card-list"]}`}>
              <div id="remove-list-title" className={styles["main-title"]}>
                <h1>Removed list:</h1>
              </div>

              {removedTasks.map((task) => (
                <div key={task.title} className={styles["removed-card"]}>
                  <div className={styles["card-title"]}>
                    <p>{task.title}</p>
                  </div>

                  <button>Remove</button>
                </div>
              ))}
            </div> */}
          </div>

          <TaskWrapper tasks={tasks} setTasks={setTasks} />
        </div>
      </section>
    </div>
  );
};

export default Home;
