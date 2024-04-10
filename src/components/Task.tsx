import React from 'react';
import '../styles/Task.css';

interface TaskProps {
    task: string;
    id: string;
}

const Task: React.FC<TaskProps> = ({ task, id }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', id);
    };

    return (
        <div id={id} key={id} draggable onDragStart={handleDragStart} >
            <div className="task__title">
                {task}
            </div>
        </div>
    )
}

export default Task