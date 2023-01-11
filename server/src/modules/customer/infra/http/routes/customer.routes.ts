import { Router } from "express";
import CreateCustomerController from "../controllers/CreateCustomerController";
import DeleteCustomerController from "../controllers/DeleteCustomerController";
import GetCustomersController from "../controllers/GetCustomesController";
import UpdateCustomerController from "../controllers/UpdateCustomerController";

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const getCustomersController = new GetCustomersController();

customerRoutes.post('/create', createCustomerController.create);
customerRoutes.put('/update', updateCustomerController.update);
customerRoutes.delete('/delete', deleteCustomerController.delete);
customerRoutes.get('/find-all', getCustomersController.get);

export default customerRoutes;