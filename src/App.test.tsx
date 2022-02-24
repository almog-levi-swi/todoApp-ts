import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('test todo list app', () => {

  test('label and placeholder should be in the document', () => {
    render(<App />);

    expect(screen.getByText('New Todo Text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add new task/)).toBeInTheDocument();   
    
  });

  test('should add new task', async () => {
    render(<App/>);

    expect(screen.queryByText('learn to work with docker')).toBeNull();

    // screen.debug();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'learn to work with docker' }
    });
    const btns = screen.getAllByRole<HTMLButtonElement>('button');
    fireEvent.click(btns[0]);
    // screen.debug();

    expect(screen.queryByText('learn to work with docker')).toBeInTheDocument();
  })
})
