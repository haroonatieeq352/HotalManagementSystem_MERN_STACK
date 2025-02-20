const express = require("express");
const router = express.Router();


const Room = require("../models/rooms"); // Correct import



router.get("/getallrooms", async(req, res) => {
    
    try {
        const rooms = await Room.find({});
        return res.json({rooms});
    } catch (error) {
        return res.status(500).json({message: "Error fetching rooms"});
    }
});

module.exports =  router;