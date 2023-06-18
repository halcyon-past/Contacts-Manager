const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find({});
    res.status(200).json(
        contacts
    )
});

//@desc Create New contacts
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req,res) => {
    console.log(`The request body is: ${JSON.stringify(req.body)}`);
    const {name,email,phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Required");
    }
    const contact = await Contact.create(req.body);
    res.status(201).json(
        contact
    )
});

//@desc Get contacts
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(
        contact
    )
});

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const {name,email,phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Required");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );


    res.status(200).json(updatedContact)
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    await Contact.remove();
    res.status(200).json(contact)
});

module.exports = 
    {getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact};