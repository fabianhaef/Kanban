import React, { useState } from 'react'
import Task from './Task'

import '../styles/Column.css'

interface ColumnProps {
    title: string;
    tasks: string[];
    maxTasks?: number;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, maxTasks }) => {
    const [columnTasks, setColumnTasks] = useState(tasks)


    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const draggableId = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);

        // Check if adding this task would exceed the maxTasks limit
        if (columnTasks.length < maxTasks) {
            e.target.appendChild(draggableElement);
            setColumnTasks([...tasks, draggableId]);
        } else {
            alert("Too many tasks in progress. Finish your tasks before you add new ones.")
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        const draggableId = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        const draggableId = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);

    };

    return (
        <div className="column"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <h2 className='column__title'>{title}</h2>
            <div>
                {tasks.map((task, index) => (
                    <Task task={task} id={`draggable-${title}-${index}`} key={index} />
                ))}
            </div>
        </div>
    );
}


export default Column;