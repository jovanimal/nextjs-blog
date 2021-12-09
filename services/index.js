const express = require('express');
const getTasks = require('./notion');
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.static('public'));

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    console.log(error)
  }
});

app.get('/api/tasks/:id', async (req, res) => {
  try {
    const tasks = await getTasks();
    const task = tasks.filter(task => task.id === req.params.id)
    res.json(task[0]);
  } catch (error) {
    console.log(error)
  }
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
