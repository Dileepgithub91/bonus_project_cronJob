const express = require('express')

const router = express.Router()
const contr = require("./controller")

router.post("/cron", contr.schedule1)

module.exports = router
