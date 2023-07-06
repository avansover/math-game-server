import { Router } from 'express';

const router = Router();

router.route('/').get(async (req, res)=>{
    return res.send("get")
})

router.route('/').post(async (req, res)=>{
    console.log(req.body);
    
    return res.send("post")
})

export default router;