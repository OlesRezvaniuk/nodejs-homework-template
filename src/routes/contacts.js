const express = require("express");
const {
  getContactsController,
  getContactByIdController,
  addContactController,
  deleteContactController,
  updateContactController,
  patchContactStatusController,
} = require("../controls/controls");
const {
  updateValidationMidleware,
  createValidationMidleware,
} = require("../validation/validation");

const router = express.Router();

router.get("/", getContactsController);
router.post("/", createValidationMidleware, addContactController);

router.get("/:contactId", getContactByIdController);
router.put("/:contactId", updateValidationMidleware, updateContactController);
router.delete("/:contactId", deleteContactController);

router.patch(
  "/:contactId/favorite",
  updateValidationMidleware,
  patchContactStatusController
);

module.exports = router;
