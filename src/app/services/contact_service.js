//Responsável pelas regras de negócio.
const Express = require("express");
const { json} = require("sequelize");
const Sequelize = require("/home/gabriella/Documentos/AplicacoesNodejs/schedule_nodejs/src/config/sequelize.js");
const ContactRepo = require("../repositories/contact_repo_sqlite");


class ContactService{

    constructor(){
        this.repo = new ContactRepo()       
    }

    async createContact(req, res){
        

        const contact = await this.repo.createContact(req, res);         

        try{
            return contact;
        }
        catch(error){
            return err;
        }
    }

    async listContacts(req, res){
        
        const contacts = await this.repo.listContacts();        

        try{
            return contacts;
        }
        catch(error){
             return err;
        }   
    }

    async foundContact(req,res){ 
        
        const contact = await this.repo.foundContact(req, res);

       try{         
            return contact;
        }
        catch(error){
            return err;
        }
    }

    async updateContact(req,res){

        const contact = await this.repo.updateContact(req, res);

        try{
            return contact;
        }
        catch(error){
            return err;
        }
    }

    async deleteContact(req, res){

        const contact = await this.repo.deleteContact(req, res);      

        try{
            return contact;
        }
        catch(error){
            return err;
        }
    }
}

module.exports = ContactService;