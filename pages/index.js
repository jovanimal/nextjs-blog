import { server } from '../config';
import ArticleList from '../components/ArticleList';
import TaskList from '../components/TaskList';

export default function Home({ articles, tasks }) {
  console.log(tasks);
  return (
    <div>
      {
      <ArticleList articles={articles} />
      }
      {
      <TaskList tasks={tasks} />
      }
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(` ${server}/api/articles`);
//   const articles = await res.json();

  // const request = await fetch('http://localhost:5000/api/tasks');
  // const tasks = await request.json();

//   return {
//     props: {
//       articles,
//       tasks,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  const request = await fetch('http://localhost:5000/api/tasks');
  const tasks = await request.json();

  return {
    props: {
      articles,
      tasks,
    },
  };
};
