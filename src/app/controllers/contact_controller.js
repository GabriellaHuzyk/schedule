const express = require("express");
const { json } = require("sequelize");
const ContactService = require("../services/contact_service");

class ContactController {
  constructor() {
    this.service = new ContactService();
  }

  async createContact(req, res) {
    const contact = await this.service.createContact(req, res);

    try {
      return res.json(contact);
    } catch (error) {
      return res.json({ message: "Error! Contact don't be created." }, err);
    }
  }

  async listContacts(req, res) {
    const contacts = await this.service.listContacts();

    try {
      return res.json(contacts);
    } catch (error) {
      return res.json({ message: "Error!" }, err);
    }
  }

  async foundContact(req, res) {
    const contact = await this.service.foundContact(req, res);

    try {
      return res.json(contact);
    } catch (error) {
      return res.json({ message: "Contact not found" }, err);
    }
  }

  async updateContact(req, res) {
    const contact = await this.service.updateContact(req, res);

    try {
      return res.json("Contact updated successfully!");
    } catch (error) {
      return res.json({ message: "Error! Contact can't be updated." }, err);
    }
  }

  async deleteContact(req, res) {
    const contact = await this.service.deleteContact(req, res);

    try {
      return res.json({ message: "Contact deleted successfully" });
    } catch (error) {
      return res.json({ message: "Error! Contact not found" }, err);
    }
  }
}

module.exports = ContactController;

