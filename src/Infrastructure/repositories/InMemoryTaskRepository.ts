import { Task } from '../../Domain/models/Task';
import { TaskRepository } from '../../Domain/repositories/TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async add(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async get(taskId: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === taskId) || null;
  }

  async list(): Promise<Task[]> {
    return this.tasks;
  }

  async update(task: Task): Promise<void> {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  async delete(taskId: string): Promise<void> {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}