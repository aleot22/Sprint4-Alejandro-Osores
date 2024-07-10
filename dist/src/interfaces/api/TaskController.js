"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const Task_1 = require("../../Domain/models/Task");
const uuid_1 = require("uuid");
class TaskController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    async addTask(req, res) {
        const { title, description } = req.body;
        const task = new Task_1.Task((0, uuid_1.v4)(), title, description);
        await this.taskService.addTask(task);
        res.status(201).json(task);
    }
    async getTask(req, res) {
        const { taskId } = req.params;
        const task = await this.taskService.getTask(taskId);
        if (task) {
            res.json(task);
        }
        else {
            res.status(404).send('Task not found');
        }
    }
    async listTasks(req, res) {
        const tasks = await this.taskService.listTasks();
        res.json(tasks);
    }
    async completeTask(req, res) {
        const { taskId } = req.params;
        await this.taskService.completeTask(taskId);
        res.status(204).send();
    }
    async deleteTask(req, res) {
        const { taskId } = req.params;
        await this.taskService.deleteTask(taskId);
        res.status(204).send();
    }
}
exports.TaskController = TaskController;
exports.default = TaskController;
