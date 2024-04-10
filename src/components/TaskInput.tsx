import React, { useState } from 'react';

interface TaskInputProps {
    addTask: (taskName: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;
