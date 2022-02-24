import React, { useRef } from 'react';
import { css } from '@emotion/css';

interface NewTodoProps {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    }

  return (
    <form onSubmit={todoSubmitHandler} className={classes.form}>
        <div className={classes.input_label}>
            <label htmlFor="todo-text">New Todo Text</label>
            <input type='text' id='todo-text' ref={textInputRef} placeholder='Add new task...' />
        </div>
        <button type="submit" className={classes.add_btn}>Add</button>
    </form>
  )
}

const softRed = '#d64406'

const classes = {
    form: css`
    width: 400px;
    margin-left: 40px;
    margin-top: 20px;
    `,
    input_label: css`
    display: flex;
    flex-direction: column;
    text-align: center;
     input{
      height: 25px;
      border-radius: 5px;
      border-color: ${softRed}   
     }
    `,
    add_btn: css`
    width: 20%;
    text-align: center;
    margin-top: 10px;
    margin-left: 40%;
    background-color: ${softRed};
    color: white;
    opacity: 0.5;
    border-radius: 5px;
    width: 100px;
    height: 35px;
    font-size: 16px;
    &:hover{
        background-color: black;
    }
    `
}

export default NewTodo;
