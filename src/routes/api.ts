import { Router } from "express";

import * as ApiControler from '../controllers/apiController';

const router = Router();

router.get("/ping", ApiControler.ping);
router.get('/random', ApiControler.random)
router.get('/name/:name', ApiControler.name);

router.post("/frases", ApiControler.createPhrase);
router.post("/frases", ApiControler.listPhrase);
router.post("/frase/:id", ApiControler.getPhrase);
router.post("/frase/:id", ApiControler.updatePhrase);
router.post("/frase/:id", ApiControler.deletePhrase);

export default router;
