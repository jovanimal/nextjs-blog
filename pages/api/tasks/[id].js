import { tasks } from '../../../data2';

export default async function handler({ query: { id } }, res) {
  // const request = await fetch('http://localhost:5000/api/tasks');
  // const tasks = await request.json();
  const filtered = tasks.filter(task => task.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `The task id of ${id} is not found.` });
  }
}
