/**
 * @prop {string} host - IP address or DNS of database server.
 * @prop {integer} port - Database server port number.
 * @prop {string} database - Default database to use when establishing the connection.
 * @prop {string} user - User to access database.
 * @prop {string} password - User password.
 * @prop {integer} connectionLimit - Maximum number of connection in pool.
 * @prop {boolean} compress - Compress exchanges with database using gzip.
 * @prop {boolean} rowsAsArray - Return result-sets as array, rather than a JSON object.
 */
module.exports = {
    host: 'localhost',
    port: '3306',
    database: 'api_logs',
    user: 'root',
    password: '',
    connectionLimit: 10,
    compress: true,
    rowsAsArray: false,
 }