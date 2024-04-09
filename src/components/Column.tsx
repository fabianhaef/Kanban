import React from 'react'
import Task from './Task'

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
            <div>
                {tasks.map((task, index) => (
                    <Task task={task} index={index} handleTaskMove={handleTaskMove} />
                ))}
            </div>
        </div>
    );
}


export default Column;