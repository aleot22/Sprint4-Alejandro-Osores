import { Router } from 'express';
import TaskController from './TaskController';
import { TaskService } from '../../Application/services/TaskService';
import { InMemoryTaskRepository } from '../../Infrastructure/repositories/InMemoryTaskRepository';

const router = Router();
const taskRepository = new InMemoryTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post('/tasks', (req, res) => taskController.addTask(req, res));
router.get('/tasks', (req, res) => taskController.listTasks(req, res));
router.get('/tasks/:taskId', (req, res) => taskController.getTask(req, res));
router.patch('/tasks/:taskId/complete', (req, res) => taskController.completeTask(req, res));
router.delete('/tasks/:taskId', (req, res) => taskController.deleteTask(req, res));

export default router;