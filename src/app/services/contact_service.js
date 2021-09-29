const ContactRepo = require("../repositories/contact_repo_sqlite");

class ContactService {
  constructor() {
    this.repo = new ContactRepo();
  }

  async createContact({ firstName, lastName, email, phone }) {
    const auth = await this.repo.authContact({ phone });

    if (auth.length !== 0) {
      throw new Error("Phone ja existe");
    } else if (firstName.length !== 0) {
      const contact = await this.repo.createContact({
        firstName,
        lastName,
        email,
        phone,
      });

      return contact;
    } else {
      throw new Error("FirstName is null");
    }
  }

  async listContacts() {
    return this.repo.listContacts();
  }

  async foundContact({ firstName }) {
    const contact = await this.repo.foundContact({ firstName });
    if (contact.length !== 0) {
      return contact;
    } else {
      throw Error("FirstName not exists");
    }
  }

  async updateContact({ firstName, lastName, email, phone }, { id }) {
    return this.repo.updateContact(
      {
        firstName,
        lastName,
        email,
        phone,
      },
      { id }
    );
  }

  async deleteContact({ id }) {
    return this.repo.deleteContact({ id });
  }

  async deleteAllContacts() {
    return this.repo.deleteAllContacts();
  }
}

module.exports = ContactService;
