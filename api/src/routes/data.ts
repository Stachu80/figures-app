import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

const route = '/data';
router.get(route, (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'jsons', `data.json`), (err, data) => {
    res.json(JSON.parse(data.toString()));
  });
});

export default router;
