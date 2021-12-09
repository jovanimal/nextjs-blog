import React from 'react';
import Link from 'next/link';

import articleStyles from '../styles/Article.module.css';

const TaskItem = ({ task }) => {
  return (
    <Link href="/task/[id]" as={`/task/${task.id}`}>
      <a className={articleStyles.card} href="">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </a>
    </Link>
  );
};

export default TaskItem;
