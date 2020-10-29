/**
 * Dependencies.
 */
const express = require('express')
const router = new express.Router()

/**
 * Middlewares
 */

/**
 * Controllers
 */
const logs = require('../controller/log')

/**
 * Routes
 */
router.route('/log').post(logs.insertNewLog)






module.exports = router