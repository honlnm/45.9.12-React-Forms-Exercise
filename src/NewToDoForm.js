import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewToDoForm({ createToDo }) {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createToDo({ task, id: uuid() });
        setTask("");
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add a toDo!</button>
            </form>
        </div>
    );
}

export default NewToDoForm;
