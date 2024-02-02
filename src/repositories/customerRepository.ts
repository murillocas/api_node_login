import Customer from '../models/Customer';
import {all_users} from '../../prisma/envio/all_users' 
import {create_user} from '../../prisma/envio/create_user' 
import {find_user_by_email} from "../../prisma/envio/get_user_email"

import {savePost} from "../../prisma/envio/save_post"

import {getPostsByUser} from "../../prisma/envio/get_post_by_user"



const customers: Customer[] = [];

async function getCustomer(id: number): Promise<Customer | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(customers.find(c => c.id === id));
    })
}

async function getCustomers() {
    return new Promise((resolve, reject) => {
        return resolve(all_users());
    })
}
async function addCustomer(customer:any): Promise<Customer> {
    return new Promise((resolve, reject) => {
        

        return resolve(create_user(customer));
    })
}
async function getpostsuser(data:any) {
    return new Promise((resolve, reject) => {
        return resolve(getPostsByUser(data));
    })
}


async function savepost(data:any) {
    return new Promise((resolve, reject) => {
        

        return resolve(savePost(data));
    })
}

async function get_user_email(data:any) {
        console.log("testestes" + data.query)

        return find_user_by_email(data);

}

async function updateCustomer(id: number, newCustomer: Customer): Promise<Customer | undefined> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newCustomer.name && customers[index].name !== newCustomer.name)
                customers[index].name = newCustomer.name;

            if (newCustomer.cpf && customers[index].cpf !== newCustomer.cpf)
                customers[index].cpf = newCustomer.cpf;

            return resolve(customers[index]);
        }

        return resolve(undefined);
    })
}

async function deleteCustomer(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            customers.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer,
    get_user_email,
    savepost,
    getpostsuser
}