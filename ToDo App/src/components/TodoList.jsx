import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTask] = useState("");

    function addTask() {
        if (newTasks.trim() === "") return;
        setTasks([...tasks, { text: newTasks, completed: false }]);
        setNewTasks("");
    }

    function toggleTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="container">
            <h2 >L I S T</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <input
                    type="text"
                    placeholder="Input task"
                    value={newTasks}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}> + </button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "completed" : ""}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}> X </button>
                    </li>
                ))}
            </ul>
        </div>


    )
}

export default TodoList;