import { Router } from 'express';
import { testBl } from '../businessLogic/characterBl';

const router = Router();

router.route('/').get(async (req, res)=>{
    let resp = await testBl()
    return res.json(resp)
})

router.route('/').post(async (req, res)=>{
    console.log(req.body);
    
    return res.send("post")
})

export default router;