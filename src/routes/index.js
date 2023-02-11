const express = require("express");
const clientRoute=require("./client.routes.js")
const contactRoute=require("./contact.routes.js")
const router=express.Router()

router.use('/api/client',clientRoute)
router.use('/api/contact',contactRoute)

module.exports =router