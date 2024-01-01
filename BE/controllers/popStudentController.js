"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");

// THE BOSS OF THE APPLICATION LOGIC - COMMAND, CREATE & RETRIVE

const storeStudent = async (res) => {
    try {

    let response = await axios.get(`http://localhost:3000/students`) //fetch local API
    
        const students = response.data;
       
        console.log(students)

        for(let student of students) {
        

        const formatStudent ={
            // id: c.MakeId,
            studentName: student.name,
            teacherId: student.teacherId,
            userName: student.userName,
            email: student.email,
            DOB: student.DOB,
            grade: student.grade,
            contact: student.contact,
            password: student.password,
            capability: student.capability,
            location: student.location
        
        
        };

        let [newStudent, created ] = await Models.Student.findOrCreate({
            where: {studentName: student.name}, //finds existing name records
            defaults: formatStudent //no record - created new default value

        })


        // let [newStudent, created ] = await Models.Grade.findOrCreate({
        //     where: {grade: meanings.grades},
        //     defaults: formatStudent

        // })
       
        }
        res.send("HELLO STUDENT")
    } catch (err) {
        console.log(err.message)
        res.send("PROBLEM" + (err.message))
    } // error - catches errors, logs error and response given to indicate the prob
}





module.exports = {
    storeStudent
}