const express = require('express');

const app = express();
const photoModel = require("../Models/photos");

exports.createController = async (req, res) => {
    console.log(req.body)
    const { name, desc, mime_type, media_metadata } = req.body;
    if (!name || !desc || !mime_type || !media_metadata) {
        res.status(402).send({
            message: "please enter required field"
        })
    }
    const data = await photoModel.create({ name, desc, mime_type, media_metadata })
    res.status(201).send({
        message: "Created successfully!"
    })
}
exports.getController = async(req, res)=>{
    const name = req.body;
    const data = await photoModel.findOne(name)
    if(!data){
        res.status(402).send({
            message: "Data not found"
        })
    }
    res.status(201).send({
        message:"Fetched Successfully",
        data
    })
}
exports.updateController = async(req, res)=>{
    // const id = req.params;
    const {name, desc, mime_type, media_metadata } = req.body
    if(!name){
        res.status(402).send({
            message: "Id not found"
        })
    }
    const updatedData = await photoModel.findOneAndUpdate({name}, {name, desc, mime_type, media_metadata});
    res.status(201).send({
        message:"updated successfully",
        updatedData
    })

}
exports.deleteController = async(req, res)=>{
    // const id = req.params
    const {name} = req.body
    if(!name){
        res.status(402).send({
            message: "Id not found"
        })
    }
    const deletedData = await photoModel.findOneAndDelete({name})
    res.status(201).send({
        message:"Deleted successfully",
        deletedData
    })
}