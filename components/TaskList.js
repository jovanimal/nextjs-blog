import React from 'react';

import TaskItem from './TaskItem';

import articleStyles from '../styles/Article.module.css';

const TaskList = ({ tasks }) => {
  return (
    <div className={articleStyles.grid}>
      {tasks.map(task => (
        <TaskItem task={task} />
      ))}
    </div>
  );
};

export default TaskList;
