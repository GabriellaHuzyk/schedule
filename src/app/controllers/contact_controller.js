const express = require("express");
const { json } = require("sequelize");
const ContactService = require("../services/contact_service");

class ContactController {
  constructor() {
    this.service = new ContactService();
  }

  async createContact(req, res) {    

    try {
      const { firstName, lastName, email, phone } = req.body;
      const contact = await this.service.createContact({
      firstName, lastName, email, phone });

      return res.json(contact);
    } catch (err) {
      return res.json({ message: "Error! Contact don't be created." }, err);
    }
  }

  async listContacts(req, res) {
    const contacts = await this.service.listContacts();

    try {
      return res.json(contacts);
    } catch (err) {
      return res.json({ message: "Error!" }, err);
    }
  }

  async foundContact(req, res) {
   
    try {
      const { firstName } = req.query;
      const contact = await this.service.foundContact({firstName});

      return res.json(contact);
    } catch (err) {
      return res.json({ message: "Contact not found" }, err);
    }
  }

  async updateContact(req, res) {    

    try {
      const { firstName, lastName, email, phone } = req.body;
      const { id } = req.params;

      const contact = await this.service.updateContact({
      firstName, lastName, email, phone }, { id });

      return res.json("Contact updated successfully!");
    } catch (err) {
      return res.json({ message: "Error! Contact can't be updated." }, err);
    }
  }

  async deleteContact(req, res) {   

    try {
      const { id } = req.params;
      const contact = await this.service.deleteContact({ id });

      return res.json({ message: "Contact deleted successfully" });
    } catch (error) {
      return res.json({ message: "Error! Contact not found" }, err);
    }
  }
}

module.exports = ContactController;

