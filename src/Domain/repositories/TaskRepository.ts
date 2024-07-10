import { Task } from '../models/Task';

export interface TaskRepository {
  add(task: Task): Promise<void>;
  get(taskId: string): Promise<Task | null>;
  list(): Promise<Task[]>;
  update(task: Task): Promise<void>;
  delete(taskId: string): Promise<void>;
}