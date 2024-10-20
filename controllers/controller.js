let properties = [
    {
      "id": 1,
      "type": "Sales",
      "title": "A 4-bedroom fully detached apartment",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Eko Valley, Lagos",
      "price": "100M",
      "company": {
        "name": "Golden Sage",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "goldensage@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    },
    {
      "id": 2,
      "type": "Rentage",
      "title": "A 2-bedroom apartment",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Lekki Phase-2, Lagos",
      "price": "70M /Year",
      "company": {
        "name": "Golden Sage",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "goldensage@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    },
    {
      "id": 3,
      "type": "Sales",
      "title": "A 4-bedroom bungalow",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Gwarimpa, Abuja",
      "price": "25M",
      "company": {
        "name": "Golden Sage",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "goldensage@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    },
    {
      "id": 4,
      "type": "Distress Sales",
      "title": "A 3-bedroom fully furnished building",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Asokoro, Abuja",
      "price": "$90K - 100K",
      "company": {
        "name": "House-Agent Co-op",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "HAC@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    },
    {
      "id": 5,
      "type": "Rentage",
      "title": "A Service apartment",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Eko Atlantica",
      "price": "50K /Day",
      "company": {
        "name": "Golden Sage",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "goldensage@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    },
    {
      "id": 6,
      "type": "Sales",
      "title": "A 4-bedroom fully detached apartment",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
      "location": "Eko Valley",
      "price": "100M",
      "company": {
        "name": "Golden Sage",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde. Officiis, ea at fuga iste voluptate rerum neque assumenda eius deleniti perspiciatis modi. Sunt aut libero, ipsam facilis qui hic.",
        "contactEmail": "goldensage@outlook.com",
        "contactNumber": "(234) 70-400-5824"
      }
    }
  ]

// @desc GET ALL PROPERTIES
// @route GET /api/properties
export const getProperties = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(properties.slice(0, limit));
    }
    res.status(200).json(properties);
};

// @desc Get Single Property by id
// @route GET /api/properties/:id
export const getProperty = (req, res, next) => {
    const id = parseInt(req.params.id);
    const property = properties.find((property) => property.id === id);

    if(!property){
        const error = new Error(`Property with the id of ${id} not found`);
        
        error.status = 404;
        return next(error);
    }

    res.status(200).json(property);
};

// @desc Post New Property
// @route POST /api/properties
export const createProperty = (req, res, next) => {
    const newProperty = {
        id: properties.length + 1,
        title: req.body.title
    }

    if (!newProperty.title) {
        const error = new Error("Please include title");
        
        error.status = 404;
        return next(error);
    }

    properties.push(newProperty);
    res.status(201).json(properties);

};

// @desc Put Property by id
// @route PUT /api/properties/:id
export const updateProperty =  (req, res, next) => {
    const id = parseInt(req.params.id);
    const property = properties.find((property) => property.id === id);

    if (!property) {
        const error = new Error(`Property with the id of ${id} not updated`);
        
        error.status = 404;
        return next(error);
    }
    property.title = req.body.title;
    res.status(200).json(properties);

};

// @desc Delete Property
// @route DELETE /api/properties/:id
export const deleteProperty = (req, res, next) => {
    const id = parseInt(req.params.id);
    const property = properties.find((property) => property.id === id);

    if (!property) {
         const error = new Error(`Property with the id of ${id} not found`);
        error.status = 404;
        return next(error);
    }
    properties = properties.filter((property) => property.id !== id);

    res.status(200).json(properties);
}; 