const Model = require("../models/contact_model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ContactRepo {
  async authContact({ phone }) {
    const contact = await Model.findAll({ where: { phone: phone } });
    return contact;
  }

  async createContact({ firstName, lastName, email, phone }) {
    try {
      const contact = await Model.create({ firstName, lastName, email, phone });

      return contact;
    } catch (error) {
      return error;
    }
  }

  async listContacts() {
    try {
      const contacts = await Model.findAndCountAll();

      return contacts;
    } catch (err) {
      return err;
    }
  }

  async foundContact({ firstName }) {
    try {
      const contact = await Model.findAll({
        where: { firstName: firstName },
      });

      return contact;
    } catch (err) {
      return "Contact not found", err;
    }
  }

  async updateContact({ firstName, lastName, email, phone }, { id }) {
    try {
      const contact = await Model.update({ firstName, lastName, email, phone }, { where: { id: { [Op.eq]: id } } });

      return contact;
    } catch (err) {
      return err;
    }
  }

  async deleteContact({ id }) {
    try {
      const contact = await Model.destroy({
        where: { id: id },
      });

      return contact;
    } catch (err) {
      return err;
    }
  }

  async deleteAllContacts() {
    const contact = await Model.drop();

    return contact;
  }
}

module.exports = ContactRepo;
