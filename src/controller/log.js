/**
 * Dependencies.
 */
const mLogs = require('../model/log')

/**
 * Inserir Log
 * @param {object} req
 * @param {string} req.body.app
 * @param {string} req.body.description
 * @param {string} req.body.httpStatusCode
 * @param {string} req.body.moment
 * @param {string} req.body.code
 * @param {string} req.body.filePath
 * @param {string} req.body.url
 * @param {string} req.body.reqBody
 * @param {string} req.body.stringError
 * @param {string} req.body.user
 */

async function insertNewLog(req, res, next){

    //console.log(req)

    console.log(req.body)


    if(!req.body || req.body === ''){
        res.status(400).send({ message: 'Corpo da requisição vazio!' }).end()
        return null
    }

    if(!req.body.app || req.body.app === ''){
        res.status(400).send({ message: 'A identificação da aplicação está vazia!' }).end()
        return null
    }
    

    const log = {
        app: req.body.app,
        description: req.body.description || null,
        httpStatusCode: req.body.httpStatusCode || null,
        code: req.body.code || null,
        filePath: req.body.filePath || null,
        url: req.body.url || null,
        reqBody: req.body.reqBody || null,
        stringError: req.body.stringError || null,
        user: req.body.user || null,
        userAgentString: req.body.userAgentString || null,
        userBrowser: req.body.userBrowser || null,
        userOs: req.body.userOs || null,
        userDevice: req.body.userDevice || null,
        userDeviceType: req.body.userDeviceType || null
    }

    try {
        inserirLog = await mLogs.insertNewLog(log)
        if(inserirLog.affectedRows === 1){
            res.status(200).send({status: 'ok'})
        }else{
            res.status(500).send();
        }
    } catch (error) {
        next(error)
    }
}
module.exports.insertNewLog = insertNewLog