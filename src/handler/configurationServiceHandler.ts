export class ConfigurationServiceHandler {

    constructor() { }

    public handleGetDatabaseConfiguation() {
        return {
            'host': process.env.HOST,
            'user': process.env.USER,
            'password': process.env.PASSWORD,
            'database': process.env.DATABASE,
            'charset': process.env.CHARSET
        }
    }

}