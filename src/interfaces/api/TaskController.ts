import { Request, Response } from 'express';
import { TaskService } from '../../Application/services/TaskService';
import { Task } from '../../Domain/models/Task';
import { v4 as uuidv4 } from 'uuid';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async addTask(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;
    const task = new Task(uuidv4(), title, description);
    await this.taskService.addTask(task);
    res.status(201).json(task);
  }

  async getTask(req: Request, res: Response): Promise<void> {
    const { taskId } = req.params;
    const task = await this.taskService.getTask(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  }

  async listTasks(req: Request, res: Response): Promise<void> {
    const tasks = await this.taskService.listTasks();
    res.json(tasks);
  }

  async completeTask(req: Request, res: Response): Promise<void> {
    const { taskId } = req.params;
    await this.taskService.completeTask(taskId);
    res.status(204).send();
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const { taskId } = req.params;
    await this.taskService.deleteTask(taskId);
    res.status(204).send();
  }
}

export default TaskController;