import React from 'react'
import '../styles/Column.css'

// Define the interface for column props
interface ColumnProps {
    title: string;
    tasks: string[]; // Assuming tasks are represented by their titles as strings
    onTaskMove: (taskTitle: string, direction: 'left' | 'right') => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onTaskMove }) => {
    const handleTaskMove = (taskTitle: string, direction: 'left' | 'right') => {
        onTaskMove(taskTitle, direction);
    };

    return (
        <div className="column">
            <h2 className='column__title'>{title}</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <div>
                            <button onClick={() => handleTaskMove(task, 'left')}>Move Left</button>
                            <button onClick={() => handleTaskMove(task, 'right')}>Move Right</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Column;