import './TodoItem.css';

function TodoItem({todo, onChange, onDelete}) {
    return(
        <div className='item'>
            <label className='checkbox'>
                <input className='checkbox' type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                {todo.text}
                <button className='itButton' onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;
