import { Router } from 'express';
import { testBL } from '../businessLogic/characterBL';

const router = Router();

router.route('/').get(async (req, res)=>{
    var resp = await testBL()
    return res.json(resp)
})

router.route('/').post(async (req, res)=>{
    console.log(req.body);
    
    return res.send("post")
})

export default router;