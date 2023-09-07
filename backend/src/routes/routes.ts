import { Router, Request, Response } from "express";
import { AddObjectController } from "../controllers/object/AddObjectController";
import { CreateRequestController } from "../controllers/request/CreateRequestController";
import { CreateTaskController } from "../controllers/task/CreateTaskController";

const router = Router();

// .. Rotas Objects ..
router.post('/object-add', new AddObjectController().handle);
router.get('/object-get', async (req, res) => { });
router.get('/object-list', async (req, res) => {});
router.put('/object-move', async (req, res) => {});
router.put('/object-lock', async (req, res) => {});
router.put('/object-unlock', async (req, res) => {});
router.delete('/object-del', async (req, res) => {});
// .. Rotas Requests ..
router.put('/request-change', async (req, res) => {});
router.get('/request-find', async (req, res) => {});
router.put('/request-release', async (req, res) => {});
router.delete('/request-del', async (req, res) => {});
router.post('/request-create', new CreateRequestController().handle)
// .. Rotas Tasks ..
router.post('/task-create', new CreateTaskController().handle );
router.put('/task-release', async (req, res) => {});
router.delete('/task-cancel', async (req, res) => {});

export { router };