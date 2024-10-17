import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import properties from "./Routes/Properties.js";
import logger from "./middleware/Logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const port = process.env.PORT || 8000;

const app = express();


//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//LOGGER MIDDLEWARE
app.use(logger);


//SETUP STATIC FOLDER
// app.use(express.static(path.join{__dirname, "public"}));

//ROUTES    
app.use("/api/properties", properties);


//ERRORHANDLER
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));