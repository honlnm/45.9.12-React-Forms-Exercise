import React, { useState } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

function ToDoList() {
    const [toDos, setToDos] = useState([]);

    // add a new toDo
    const create = newToDo => {
        setToDos(toDos => [...toDos, newToDo]);
    };

    // update a toDo with updatedTask
    const update = (id, updatedTask) => {
        setToDos(toDos =>
            toDos.map(toDo =>
                toDo.id === id ? { ...toDo, task: updatedTask } : toDo
            )
        );
    };

    // delete a toDo by id
    const remove = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    };

    const toDoComponents = toDos.map(toDo => (
        <ToDo
            remove={remove}
            key={toDo.id}
            id={toDo.id}
            task={toDo.task}
            update={update}
        />
    ));

    return (
        <div>
            <NewToDoForm createToDo={create} />
            <ul>{toDoComponents}</ul>
        </div>
    );
}

export default ToDoList;
