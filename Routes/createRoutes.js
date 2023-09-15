const express = require("express")
const router = express.Router();
const app = express();
const {createController, getController, updateController, deleteController} = require("../Controller/photoController")

router.route("/create").post(createController);
router.route("/get").get(getController)
router.route("/update").put(updateController)
router.route("/delete").delete(deleteController)

module.exports = router