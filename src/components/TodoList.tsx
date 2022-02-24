import React from 'react'
import { css } from '@emotion/css';

interface TodoListProps {
    items: {id: string, text: string}[],
    deleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    const deleteTodo = (id: string) => {
        props.deleteTodo(id);
    }

  return (
    <ul>
        {props.items.map(todo => 
        <li key={todo.id} className={classes.todo}>
           <span className={classes.todo_details}>{todo.text}
           <button onClick={deleteTodo.bind(null,todo.id)} className={classes.delete_btn}>DELETE</button>
           </span> 
            </li> )}
    </ul>
  )
}

const softRed = '#d64406'

const classes = {
    todo: css`
    margin-top: 5px;
    opacity: 0.4;
    width: 400px;
    border-radius: 4px;
    list-style: none;
    border: 1px solid ${softRed}
    `,
    todo_details: css`
    display: flex;
    flex-direction: row,
    align-item: center;
    justify-content: space-between;
    padding: 8px;
    `,
    delete_btn: css`
    background-color: ${softRed};
    color: white;
    border-radius: 4px;
    &:hover{
        background-color: black;
    }
    `
}

export default TodoList;
