import express from 'express';
import customerController from '../controllers/customerController';

const router = express.Router();

router.get('/getbymail/', customerController.getuseremail);
router.get('/getpostsuser/', customerController.getpostsuser);


router.get('/:id', customerController.getCustomer);

router.get('/', customerController.getCustomers);


router.post('/savepost/', customerController.savepost);

router.post('/', customerController.postCustomer);



router.patch('/:id', customerController.patchCustomer);

router.delete('/:id', customerController.deleteCustomer);

export default router;