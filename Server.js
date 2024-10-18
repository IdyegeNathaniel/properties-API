import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
import properties from "./api/Routes/Properties.js";
import logger from "./api/middleware/Logger.js";
import errorHandler from "./api/middleware/error.js";
import notFound from "./api/middleware/notFound.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

const port = process.env.PORT || 8080 ; 


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


app.listen(port, () => console.log(`This server is running on port ${port}`));

export default app;