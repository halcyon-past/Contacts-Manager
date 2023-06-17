//@desc GET all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req,res) => {
    req.status(200).json({
        message:"Get all Contacts"
    })
};

//@desc Create New contacts
//@route POST /api/contacts
//@access Public
const createContact = (req,res) => {
    res.status(201).json({
        message:"Create Contacts"
    })
};

//@desc Get contacts
//@route GET /api/contacts/:id
//@access Public
const getContact = (req,res) => (req,res) => {
    res.status(200).json({
        message:`Get Contact for ${req.params.id}`
    })
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req,res) => {
    res.status(200).json({
        message:`Update Contact for ${req.params.id}`
    })
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req,res) => {
    res.status(200).json({
        message:`Delete Contact for ${req.params.id}`
    })
};

module.exports = 
    {getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact};