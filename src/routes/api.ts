import { Router } from "express";

import * as ApiControler from '../controllers/apiController';

const router = Router();

router.get("/ping", ApiControler.ping);
router.get('/random', ApiControler.random)
router.get('/name/:name', ApiControler.name);

router.post("/frases", ApiControler.createPhrase);
router.get("/frases", ApiControler.listPhrase);
router.get("/frase/aleatoria", ApiControler.randomPhrase);
router.get("/frase/:id", ApiControler.getPhrase);
router.put("/frase/:id", ApiControler.updatePhrase);
router.delete("/frase/:id", ApiControler.deletePhrase);




export default router;
