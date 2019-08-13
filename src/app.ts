require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { ConfigurationServiceRoutes } from "./api/routes/configurationServiceRoutes";

const PORT = process.env.PORT || 8888;
const app = express();
app.use(cors());
app.use('/', new ConfigurationServiceRoutes().initializeConfigurationServiceRoutes());

app.listen(PORT, () => {
    console.log("App listening on port : " + PORT);
});