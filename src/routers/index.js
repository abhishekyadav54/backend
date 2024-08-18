import { Router } from 'express';

import path from 'path';  
import { fileURLToPath } from 'url';  

const __filename = fileURLToPath(import.meta.url);//giving the current module's file path  
const __dirname = path.dirname(__filename);


const router = Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

export {router};