const ContactRepo = require("../repositories/contact_repo_sqlite");


class ContactService {
  constructor() {
    this.repo = new ContactRepo();
  }

  async createContact({ firstName, lastName, email, phone }) {
    return this.repo.createContact({ firstName, lastName, email, phone });
  }

  async listContacts() {
    return this.repo.listContacts();
  }

  async foundContact({ firstName }) {
    return this.repo.foundContact({ firstName });
  }

  async updateContact({
    firstName, lastName, email, phone }, { id }) {

    return this.repo.updateContact({
      firstName, lastName, email, phone }, { id });
  }

  async deleteContact({ id }) {
    return this.repo.deleteContact({ id });
  }
}

module.exports = ContactService;

