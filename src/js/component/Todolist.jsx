import React, { useState } from "react";

export const Todolist = () => {
    const [addString, setAddString] = useState("");
    const [listTodo, setListTodo] = useState([]);
    const handleAddString = (event) => {
        setAddString(event.target.value);
    };
    const handleAddListToDo = () => {
        if (addString.trim() !== "") {
            setListTodo([...listTodo, addString]);
            setAddString("");
        }
    };
    const handleDelete = (index) => {
        const updateListTodo = listTodo.filter((element, i) => i !== index);
        setListTodo(updateListTodo);
    }
    return (
        <>
             <h1>Todo List</h1>    
             <div className="container">
                <form>
                    <label htmlFor="exampleDataList" className="form-label">
                    </label>
                    <input
                        className="form-control" list="datalistOptions" onChange={handleAddString} value={addString}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleAddListToDo();
                            }
                        }}
                        id="exampleDataList"
                        placeholder="Poner tarea a realizar"
                    />
                    <ul className="list-group mt-3">
                        {listTodo.length > 0 ? (listTodo.map((element, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between hidden-icon" >
                                {element}
                                <span>
                                    <button className="btn btn-close bg-danger m-1 float-end" type="button" onClick={() => handleDelete(index)}></button>
                                </span>
                            </li>
                        ))) : (
                            <li className="list-group-item">No hay tareas</li>
                        )}
                        <div className="text-end ">
                            {listTodo.length} Tareas
                        </div>
                    </ul>
                </form >
            </div>
        </>
    );
};