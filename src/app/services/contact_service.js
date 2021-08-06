//Responsável pelas regras de negócio.
const ContactRepo = require("../repositories/contact_repo_sqlite");

// existe muitas pessoas falando a respeito de services englobarem lógica de negócio
// e tal, mas cuidado com isso, caso contrário o teu código vai ficar cheio de services
// misturados, atrapalhando a organização do código.
//
// eu gosto muito de seguir a filosofia e organização de código do Phoenix:
// https://hexdocs.pm/phoenix/contexts.html#thinking-about-design
// vai precisar ler um pouco de Elixir pra entender os exemplos, mas acho que os
// conceitos são suficientes. Depois te passo uma palestra no youtube que é 10
class ContactService {
  constructor() {
    this.repo = new ContactRepo();
  }

  // o Service não deve depender da camada web. Muito menos de algo específico
  // do framework usado (nesse caso, o express).
  //
  // poderia passar direto os argumentos que esse método precisa pra criar o contato
  // aí se quiser delegar pro repositório, model, active record, etc, fica a tua escolha
  // mas é importante de não misturar domínios na aplicação.
  //
  // sempre que ficar na dúvida, se pergunta: "faz sentido essa função ter acesso
  // a todas as parafernalhas do express?"
  async createContact(req, res) {
    return this.repo.createContact(req, res);
  }

  async listContacts(req, res) {
    return this.repo.listContacts();
  }

  async foundContact(req, res) {
    return this.repo.foundContact(req, res);
  }

  async updateContact(req, res) {
    return this.repo.updateContact(req, res);
  }

  async deleteContact(req, res) {
    return this.repo.deleteContact(req, res);
  }
}

module.exports = ContactService;

