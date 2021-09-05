import React from 'react'

function Todo({ text, todo, todos, setTodos }) {

    const deleteHandler = (e) => {
        setTodos(todos.filter(ele => ele.id !== todo.id));
    }


    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, complete: !item.complete
                }
            }
            return item;
        }))
    }


    return (
        <div className='todo'>
            <li className={`todo-item ${todo.complete ? "complete" : ''}`}>{text}</li>

            <button onClick={completeHandler}
                className="complete-btn">
                Done
           </button >
            <button onClick={deleteHandler} className="trash-btn">
                Delete
              </button>
        </div>
    )
}

export default Todo;
