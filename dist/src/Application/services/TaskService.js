"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async addTask(task) {
        return this.taskRepository.add(task);
    }
    async getTask(taskId) {
        return this.taskRepository.get(taskId);
    }
    async listTasks() {
        return this.taskRepository.list();
    }
    async completeTask(taskId) {
        const task = await this.taskRepository.get(taskId);
        if (task) {
            task.completed = true;
            await this.taskRepository.update(task);
        }
    }
    async deleteTask(taskId) {
        return this.taskRepository.delete(taskId);
    }
}
exports.TaskService = TaskService;
