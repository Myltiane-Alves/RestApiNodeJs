import { Router } from "express";

import * as ApiControler from '../controllers/apiController';

const router = Router();

router.get("/ping", ApiControler.ping);

router.get('/random', ApiControler.random)

router.get('/name/:name', ApiControler.name);

export default router;
