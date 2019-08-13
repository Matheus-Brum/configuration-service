import * as express from "express";
import { ConfigurationServiceHandler } from "../../handler/configurationServiceHandler";

export class ConfigurationServiceRoutes {

    private routePrefix:string;
    private router:express.Router;
    private configurationServiceHandler:ConfigurationServiceHandler;

    constructor(router:express.Router = express.Router(), configurationServiceHandler:ConfigurationServiceHandler = new ConfigurationServiceHandler()) {
        this.routePrefix = '/v1';
        this.router = router;
        this.configurationServiceHandler = configurationServiceHandler;
    }

    public initializeConfigurationServiceRoutes() {
        return this.router.get(this.routePrefix + '/configurations/db', (req:express.Request, res:express.Response, next:express.NextFunction) => {
            res.status(200).send(this.configurationServiceHandler.handleGetDatabaseConfiguation());
        });
    }

}