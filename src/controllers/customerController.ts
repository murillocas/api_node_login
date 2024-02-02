import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';
import customerRepository from '../repositories/customerRepository';

async function getCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = await customerRepository.getCustomer(parseInt(id));
    if (customer)
        res.json(customer);
    else
        res.sendStatus(404);
}
async function getuseremail(req: Request, res: Response, next: NextFunction) {
    console.log("controller " + req)
    const data = await customerRepository.get_user_email(req);
    //console.log("eroooooooooooooooooooooooooou")
    //const data = {"deu certo ????": "deu errado ??"} 
    if (data)
        res.status(201).json(data);
    else
        res.sendStatus(404);
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {

    const customers = await customerRepository.getCustomers();
    res.json(customers);
}

async function getpostsuser(req: Request, res: Response, next: NextFunction) {

    console.log("controller " + req)
    const data = await customerRepository.getpostsuser(req);
    //console.log("eroooooooooooooooooooooooooou")
    //const data = {"deu certo ????": "deu errado ??"} 
    if (data)
        res.status(201).json(data);
    else
        res.sendStatus(404);
}
async function postCustomer(req: Request, res: Response, next: NextFunction) {
    const customer = req.body ;
    const result = await customerRepository.addCustomer(customer);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}
async function savepost(req: Request, res: Response, next: NextFunction) {
    console.log("save post " +  req.body)
    const data = req.body;
    const result = await customerRepository.savepost(data);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = req.body as Customer;
    const result = await customerRepository.updateCustomer(parseInt(id), customer);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await customerRepository.deleteCustomer(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer,
    getuseremail,
    savepost,
    getpostsuser
}