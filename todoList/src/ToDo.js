

function ToDo ({todo, toggleTask, removeTask}) {

    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? 'utem-text strike' : 'item-text'}
                    onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>
            <div className='item-delete' onclick={() => removeTask(todo.id)}>
                x
            </div>
        </div>
    )
 }
    
    export default ToDo