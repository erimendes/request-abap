import { Router, Request, Response } from "express";
import { AddObjectController } from "../controllers/object/AddObjectController";
import { DelObjectController } from "../controllers/object/DelObjectController";
import { GetObjectController } from "../controllers/object/GetObjectController";
import { ListObjectController } from "../controllers/object/ListObjectController";
import { MoveObjectController } from "../controllers/object/MoveObjectController";
import { LockObjectController } from "../controllers/object/LockObjectController";
import { UnlockObjectController } from "../controllers/object/UnlockObjectController";

import { ChangeRequestController } from "../controllers/request/ChangeRequestController";
import { CreateRequestController } from "../controllers/request/CreateRequestController";
import { DelRequestController } from "../controllers/request/DelRequestController";
import { FindRequestController } from "../controllers/request/FindRequestController";
import { ReleaseRequestController } from "../controllers/request/ReleaseRequestController";

import { CancelTaskController } from "../controllers/task/CancelTaskController";
import { CreateTaskController } from "../controllers/task/CreateTaskController";
import { ReleaseTaskController } from "../controllers/task/ReleaseTaskController";

const router = Router();

// .. Rotas Objects ..
router.post('/object-add', new AddObjectController().handle);
router.delete('/object-del', new DelObjectController().handle);
router.get('/object-get', new GetObjectController().handle);
router.get('/object-list', new ListObjectController().handle);
router.put('/object-move', new MoveObjectController().handle);
router.put('/object-lock', new LockObjectController().handle);
router.put('/object-unlock', new UnlockObjectController().handle);

// .. Rotas Requests ..
router.put('/request-change', new ChangeRequestController().handle);
router.post('/request-create', new CreateRequestController().handle)
router.delete('/request-del', new DelRequestController().handle);
router.get('/request-find', new FindRequestController().handle);
router.put('/request-release', new ReleaseRequestController().handle);

// .. Rotas Tasks ..
router.delete('/task-cancel', new CancelTaskController().handle);
router.post('/task-create', new CreateTaskController().handle );
router.put('/task-release', new ReleaseTaskController().handle);

export { router };