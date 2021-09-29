const express = require("express");
const router = express.Router();
const ContactController = require("../app/controllers/contact_controller");

const contactController = new ContactController();

router.post("/create", async (req, res) => {
  contactController.createContact(req, res);
});

router.get("/list", async (req, res) => {
  contactController.listContacts(req, res);
});

router.get("/found", async (req, res) => {
  contactController.foundContact(req, res);
});

router.put("/update/:id", async (req, res) => {
  contactController.updateContact(req, res);
});

router.delete("/delete/:id", async (req, res) => {
  contactController.deleteContact(req, res);
});

router.delete("/delete", async (req, res) => {
  contactController.deleteAllContacts(req, res);
});

module.exports = router;
