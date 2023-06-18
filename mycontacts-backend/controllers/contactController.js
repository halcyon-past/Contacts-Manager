const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find({});
    res.status(200).json({
        contacts
    })
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
    res.status(201).json({
        contact
    })
});

//@desc Get contacts
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        message:`Get Contact for ${req.params.id}`
    })
});

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        message:`Update Contact for ${req.params.id}`
    })
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        message:`Delete Contact for ${req.params.id}`
    })
});

module.exports = 
    {getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact};