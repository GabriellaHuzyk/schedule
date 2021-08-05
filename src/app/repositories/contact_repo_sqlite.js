//Responsável pelas querys do bd. Guardar, 
//extrair, excluir dados do bd.
const Express =  require("express");
const Model = require("../models/contact_model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ContactRepo{
    
    async createContact(req, res){
        const {firstName, lastName, email, phone} = req.body;

        const contact =  await Model.create(req.body); 
        contact.save(contact); 

        try{   
            return contact;
        }
        catch(err){
            return err;
        }         
    }

    async listContacts(req, res){        
        
        const contacts = await Model.findAndCountAll();
        
        try{
            return contacts;
        }   
        catch(err){
            return (err);
        }        
    }

    async foundContact(req, res){
        
        const firstName = req.query.firstName;

        const contact = await Model.findAll({where:
        {firstName: req.query.firstName}});                     
        
        try{    
            return contact;
        }
        catch(err){
            return ("Contact not found", err);
        }
    }

    async updateContact(req, res){
        const {firstName, lastName, email, phone} = req.body;
        const id = req.params.id;

        const contact = await Model.update({firstName, lastName, email, phone}, 
            {where: {id: {[Op.eq]: req.params.id}}})

        try{
            return contact;
        }
        catch(err){
            return err;
        }
    }

    async deleteContact(req, res){
        
        const id = req.params.id;

        const contact = await Model.destroy({
            where:{id: req.params.id
            }});

        try{
            return contact;
        }
        catch(err){
            return err;
        }
    }
}

module.exports = ContactRepo;