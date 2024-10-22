import express from "express";
import cors from "cors";
import properties from "./Routes/Properties.js";
import logger from "./middleware/Logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const app = express();

const port = process.env.PORT || 8080 ; 


app.use(cors());

//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//LOGGER MIDDLEWARE
app.use(logger);

//ROUTES    
app.use("/api/properties", properties);

//ERRORHANDLER
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`This server is running on port ${port}`));


export default app;