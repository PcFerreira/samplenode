/**
 * Dependencies 
 */
const database = require('../database/mariadb'); 


/**
 * Inserir log no banco
 * @param {object} log
 * @param {string} log.app
 * @param {string} log.description
 * @param {string} log.httpStatusCode
 * @param {string} log.moment
 * @param {string} log.code
 * @param {string} log.filePath
 * @param {string} log.url
 * @param {string} log.reqBody
 * @param {string} log.stringError
 * @param {string} log.user
 * @param {string} log.userAgentString
 * @param {string} log.userBrowser
 * @param {string} log.userOs
 * @param {string} log.userDevice
 * @param {string} log.userDeviceType
 */
async function insertNewLog(log){
    const queryInsertNewLog = `
    INSERT INTO logs 
    (
    app, description, httpStatusCode, 
    code, filePath, url,
    reqBody, stringError, user, 
    userAgentString, userBrowser, userOs,
    userDevice, userDeviceType
    ) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const newLog = Object.assign({}, log)
    console.log(newLog)
    try {
        const queryResult = await database.executeQuery(queryInsertNewLog, newLog)
        console.log(queryResult)
        return queryResult
    } catch (error) {
        console.log(error)
    }
}
module.exports.insertNewLog = insertNewLog

