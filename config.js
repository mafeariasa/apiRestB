module.exports = {
    port: process.env.PORT ||3001,
    db: process.env.MONGODB || 'mongodb://mafearias:8923595m@ds115753.mlab.com:15753/restb', 
    SECRET_TOKEN: 'miclavedetokens' 
} 