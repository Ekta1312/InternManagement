const express = require('express');
const router = express.Router();
const formDetails = require('../models/candidate_form');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage });
router.post('/form/post',upload.single('resume'), async (req,res)=>{
    try {
        const {
          RID,
          title,
          fathersname,
          address1,
          address2,
          city,
          country,
          pincode,
          phone,
          mobile,
        } = req.body;
    
        // Create a new form entry in your database
        const newFormEntry = new formDetails({
          RID,
          title,
          fathersname,
          address1,
          address2,
          city,
          country,
          pincode,
          phone,
          mobile,
          resume: req.file.filename 
        });
    
        await newFormEntry.save();
        res.status(200).json({ message: 'Form data submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form data', error: error.message });
    }
})
module.exports = router;