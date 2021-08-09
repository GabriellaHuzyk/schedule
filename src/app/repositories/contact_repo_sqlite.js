//Responsável pelas querys do bd. Guardar,
//extrair, excluir dados do bd.
const Model = require("../models/contact_model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ContactRepo {
  // ContactRepo.createContact depende das variáveis req e res
  // porém o repositório deveria depender apenas da abstração de
  // persistência dos dados
  //
  // aqui tu poderia mudar para:
  // async createContact({ firstName, lastName, email, phone }) { ...
  async createContact(req, res) {
    const { firstName, lastName, email, phone } = req.body;

    // o try/catch precisa ser usado com cuidado, se tu englobar
    // um escopo muito grande no bloco `try`, vai precisar lidar
    // com vários tipos de erro no bloco `catch`. Porém também
    // tem que se atentar de não englobar coisas que não vão
    // estourar excessão.
    try {
      const contact = await Model.create(req.body);
      contact.save(contact);

      return contact;
    } catch (err) {
      return err;
    }
  }

  // o mesmo se aplica aqui e aos outros métodos dessa classe, eles
  // dependem desses objetos req, res. Tem muito "conhecimento externo"
  // dentro desses métodos
  async listContacts(req, res) {
    try {
      const contacts = await Model.findAndCountAll();

      return contacts;
    } catch (err) {
      return err;
    }
  }

  async foundContact(req, res) {
    // aqui, o repositório precisa saber que no objeto `req`, vai ter um
    // objeto `query` e dentro de query vai ter um valor `firstName`.
    // É melhor só passar o firstName pro método `foundContat`.
    const firstName = req.query.firstName;

    try {
      const contact = await Model.findAll({
        where: { firstName: req.query.firstName },
      });

      return contact;
    } catch (err) {
      return "Contact not found", err;
    }
  }

  async updateContact(req, res) {
    const { firstName, lastName, email, phone } = req.body;
    const id = req.params.id;

    try {
      const contact = await Model.update(
        { firstName, lastName, email, phone },
        { where: { id: { [Op.eq]: req.params.id } } }
      );

      return contact;
    } catch (err) {
      return err;
    }
  }

  async deleteContact(req, res) {
    const id = req.params.id;

    try {
      const contact = await Model.destroy({
        where: { id: req.params.id },
      });

      return contact;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ContactRepo;

