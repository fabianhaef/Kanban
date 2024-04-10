import React, { useState } from 'react';
import Column from './Column';
import '../styles/Kanban.css'

// Define the interface for parent component props
interface ParentProps {
    initialColumns: {
        title: string;
        tasks: string[],
        maxTasks?: number
    }[];
}

const Kanban: React.FC<ParentProps> = ({ initialColumns }) => {
    const [columns, setColumns] = useState<{ title: string; tasks: string[] }[]>(initialColumns);

    return (
        <div className="kanban">
            <h1 className='kanban__title'>Kanban</h1>
            <div className="kanban__wrapper">
                {columns.map((column, index) => (
                    <Column
                        key={index}
                        title={column.title}
                        tasks={column.tasks}
                        maxTasks={column.maxTasks}
                    />
                ))}
            </div>
        </div>
    );

}

export default Kanban