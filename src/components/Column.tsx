import React from 'react'
import Task from './Task'

import '../styles/Column.css'

interface ColumnProps {
    title: string;
    tasks: string[];
}

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        const draggableId = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);
        e.target.appendChild(draggableElement);
    };

    return (
        <div className="column"
            onDragOver={handleDragOver}
            onDrop={handleDrop}>
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