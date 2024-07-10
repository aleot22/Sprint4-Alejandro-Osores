import { Task } from '../../Domain/models/Task';
import { TaskRepository } from '../../Domain/repositories/TaskRepository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async addTask(task: Task): Promise<void> {
    return this.taskRepository.add(task);
  }

  async getTask(taskId: string): Promise<Task | null> {
    return this.taskRepository.get(taskId);
  }

  async listTasks(): Promise<Task[]> {
    return this.taskRepository.list();
  }

  async completeTask(taskId: string): Promise<void> {
    const task = await this.taskRepository.get(taskId);
    if (task) {
      task.completed = true;
      await this.taskRepository.update(task);
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    return this.taskRepository.delete(taskId);
  }
}