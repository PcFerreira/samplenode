/**
 * Dependencies
 */
const webServer = require('./webserver/webserver')
const pool = require('./database/mariadb')

/**
 * Startup the webServer Module
 */
async function startUp(){
    console.log('Iniciando..')
    
    try {
        console.log('Iniciando o servidor Web.. ')
        await webServer.initialize()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
startUp()

/**
 * Stops the webServer Modules and Pool Connection
 * @param {*} e 
 */
async function shutdown(e){
    let err = e
    console.log('Encerrando a aplicação')
        
    try{
        console.log('Encerrando o pool de conexões..')
        await pool.endPool()
    }catch (error) {
        console.error(e)
        err = error
    }
    
    if(err){
        process.exit(1) //Encerrado com Erro
    }else{
        process.exit(0)
    }
}

/**
 * Get SIGTERM (Terminate Apllication)
 */
process.on('SIGTERM', () =>{
    console.log('SIGTERM Recebido')
    shutdown()
})

/**
 * Get SIGINT (Interrupt the Application)
 */
process.on('SIGINT', () => {
    console.log('SIGINT Recebido')
    shutdown()
})

/**
 * End Application on Uncaught Exception
 */
process.on('uncaughtException', err => {
    console.log('Uncaught exception')
    console.log(err)
    shutdown(err)
})
