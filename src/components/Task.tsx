import React from 'react';

interface TaskProps {
    task: string;
    index: number;
    handleTaskMove: (task: string, direction: 'left' | 'right') => void;
}

const Task: React.FC<TaskProps> = ({ task, index, handleTaskMove }) => {
    return (
        <div key={index}>
            <div className="task__title">
                {task}
            </div>
            <div>
                <button onClick={() => handleTaskMove(task, 'left')}>Move Left</button>
                <button onClick={() => handleTaskMove(task, 'right')}>Move Right</button>
            </div>
        </div>
    )
}

export default Task