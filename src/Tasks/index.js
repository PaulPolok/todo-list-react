import './style.css'

const Tasks = (props) => (
<ul className="tasks">
    {props.tasks.map(task => (
        <li className={`tasks__item ${props.hideDoneTask && task.done ? "tasks__item--hidden" : ""}`} >
          <button className="tasks__button tasks__button--toggleDone ">
                            {task.done ? "✔" : ""}
                        </button>
                        <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
                            {task.content}
                        </span>
                        <button classNae="tasks__button tasks__button--remove">
                            🗑
                        </button>
        </li> 
        ))}
    
</ul>
)

export default Tasks; 