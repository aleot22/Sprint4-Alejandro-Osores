"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("./TaskController"));
const TaskService_1 = require("../../Application/services/TaskService");
const InMemoryTaskRepository_1 = require("../../Infrastructure/repositories/InMemoryTaskRepository");
const router = (0, express_1.Router)();
const taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository();
const taskService = new TaskService_1.TaskService(taskRepository);
const taskController = new TaskController_1.default(taskService);
router.post('/tasks', (req, res) => taskController.addTask(req, res));
router.get('/tasks', (req, res) => taskController.listTasks(req, res));
router.get('/tasks/:taskId', (req, res) => taskController.getTask(req, res));
router.patch('/tasks/:taskId/complete', (req, res) => taskController.completeTask(req, res));
router.delete('/tasks/:taskId', (req, res) => taskController.deleteTask(req, res));
exports.default = router;
