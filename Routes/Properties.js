import express from "express";
import { 
  getProperties, 
  getProperty, 
  createProperty, 
  updateProperty, 
  deleteProperty } from "../controllers/controller.js"

const router = express.Router();

//GET ALL PROPERTIES
router.get("/", getProperties);

//GET SINGLE PROPERTY
router.get("/:id", getProperty);

//CREATE NEW PROPERTY LISTING
router.post("/", createProperty);

//UPDATE PROPERTIES
router.put("/:id", updateProperty);

//DELETE PROPERTY 
router.delete("/:id", deleteProperty);

export default router;