const express = require ('express');
const from_control = require('../controllers/usersConrol')
const router = express.Router();

router.get('/', from_control.all_users);

router.get('/create', from_control.create);
  
router.post('/', from_control.add);
  
router.get('/:id', from_control.id);
  
router.delete('/del/:id', from_control.del);
  

module.exports = router;