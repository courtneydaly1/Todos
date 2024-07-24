import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input
                type="text"
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
