import { server } from '../../../config';
import Link from 'next/link';
import Meta from '../../../components/Meta';

const task = ({ task }) => {

  console.log(task);

  return (
    <div>
      <Meta title={task.title} description={task.description} />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Testing</p>
      <p>What</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

export const getStaticProps = async context => {
  // const res = await fetch(`${server}/api/tasks/${context.params.id}`);
  const res = await fetch(`http://localhost:5000/api/tasks/${context.params.id}`);

  const task = await res.json();

  return {
    props: {
      task,
    },
  };
};

export const getStaticPaths = async () => {
  // const res = await fetch(`${server}/api/tasks`);
  const res = await fetch(`http://localhost:5000/api/tasks`);

  const tasks = await res.json();

  const ids = tasks.map(task => task.id); //[1,2,3]
  const paths = ids.map(id => ({
    params: { id: id.toString() } 
  }));  // [{params: {id: '1'}}, {params: {id: '2'}}, ...]

  return {
    paths,
    fallback: false,
  };
};

export default task;
