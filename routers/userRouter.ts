import { Router } from 'express';


const router = Router();

router.route('/get-users').get(async (req, res)=>{
    // var resp = await testBL()
    return res.json("get-users")
})

router.route('/get-user-by-id').get(async (req, res)=>{
    console.log(req.query); 
    return res.json("get-user-by-id")
})

router.route('/add-user').post(async (req, res)=>{
    console.log(req.body);
    
    return res.send("add-user")
})

router.route('/delete-user').delete(async (req, res)=>{
    console.log(req.body);
    
    return res.send("delete-user")
})



export default router;