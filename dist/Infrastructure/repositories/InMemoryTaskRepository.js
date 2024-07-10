"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTaskRepository = void 0;
class InMemoryTaskRepository {
    tasks = [];
    async add(task) {
        this.tasks.push(task);
    }
    async get(taskId) {
        return this.tasks.find(task => task.id === taskId) || null;
    }
    async list() {
        return this.tasks;
    }
    async update(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.tasks[index] = task;
        }
    }
    async delete(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}
exports.InMemoryTaskRepository = InMemoryTaskRepository;
