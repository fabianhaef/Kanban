import React, { useState } from 'react';
import Column from './Column';
import '../styles/Kanban.css'

// Define the interface for parent component props
interface ParentProps {
    initialColumns: { title: string; tasks: string[] }[];
}


const Kanban: React.FC<ParentProps> = ({ initialColumns }) => {
    const [columns, setColumns] = useState<{ title: string; tasks: string[] }[]>(initialColumns);

    const handleTaskMove = (taskTitle: string, direction: 'left' | 'right', columnIndex: number) => {
        const updatedColumns = [...columns];
        const currentColumn = updatedColumns[columnIndex];
        const taskIndex = currentColumn.tasks.indexOf(taskTitle);

        if (direction === 'left' && taskIndex > 0) {
            // Move task left
            const movedTask = currentColumn.tasks.splice(taskIndex, 1)[0];
            updatedColumns[columnIndex - 1].tasks.push(movedTask);
        } else if (direction === 'right' && taskIndex < currentColumn.tasks.length - 1) {
            // Move task right
            const movedTask = currentColumn.tasks.splice(taskIndex, 1)[0];
            updatedColumns[columnIndex + 1].tasks.push(movedTask);
        }

        setColumns(updatedColumns);
    };

    return (
        <div className="kanban">
            <h1 className='kanban__title'>Kanban</h1>
            <div className="kanban__wrapper">
                {columns.map((column, index) => (
                    <Column
                        key={index}
                        title={column.title}
                        tasks={column.tasks}
                        onTaskMove={(taskTitle, direction) => handleTaskMove(taskTitle, direction, index)}
                    />
                ))}
            </div>
        </div>
    );

}

export default Kanban