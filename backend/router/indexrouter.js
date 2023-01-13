const express=require('express');
const router=express.Router();
const product=require('../module/createtable');
const controllerindex=require('../controller/index');

router.post('/', controllerindex.postadddata);
router.get('/fetchdata',controllerindex.fetchdata);
router.delete('/deleteuser/:id',controllerindex.deletedata);

module.exports=router;