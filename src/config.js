module.exports = {
    MYSQL_DATABASE: process.env.DATABASE || 'learning',
    MYSQL_USERNAME: process.env.USERNAME || 'dharm',
    MYSQL_PASSWORD: process.env.PASSWORD || 'Black9024!@',
    MYSQL_HOST: process.env.HOST || 'localhost',
    MYSQL_PORT: process.env.PORT || '3306',
    MONGO_DB: process.env.MONGO_DB_STRING || 'mongodb://127.0.0.1:27017/teaching'
}