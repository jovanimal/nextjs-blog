import { tasks } from '../../../data2';

export default async function handler(req, res) {
  // const request = await fetch('http://localhost:5000/api/tasks');
  // const tasks = await request.json();
  
  res.status(200).json(tasks);
}
