import React, { useState } from 'react';
import Column from './Column';
import TaskInput from './TaskInput';
import '../styles/Kanban.css'

// Define initial columns data
const initialColumns = [
    {
        title: 'To Do',
        tasks: [''],
    },
    {
        title: 'In Progress',
        tasks: [''],
        maxTasks: 2
    },
    {
        title: 'Done',
        tasks: [''],
    }
];

const Kanban: React.FC = () => {
    const [toDoTasks, setToDoTasks] = useState<string[]>([]);
    const [inProgressTasks, setInProgressTasks] = useState<string[]>([]);
    const [finishedTasks, setFinishedTasks] = useState<string[]>([]);


    const addTaskToTodoColumn = (taskName: string) => {
        setToDoTasks([...toDoTasks, taskName]);
    };

    return (
        <div className="kanban">
            <h1 className='kanban__title'>Kanban</h1>
            <TaskInput addTask={addTaskToTodoColumn} />
            <div className="kanban__wrapper">
                <Column
                    key="0"
                    title="To do"
                    tasks={toDoTasks}
                />
                <Column
                    key="1"
                    title="In Progress"
                    tasks={inProgressTasks}
                    maxTasks={2}
                />
                <Column
                    key="2"
                    title="Done"
                    tasks={finishedTasks} />

            </div>
        </div>
    );

}

export default Kanban