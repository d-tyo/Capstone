"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs')

// THE BOSS OF THE APPLICATION LOGIC - COMMAND, CREATE & RETRIVE

const storeTeacher = async (res) => {
    try {

    let response = await axios.get(`http://localhost:3000/teachers`) // fetch local API
    
        const teachers = response.data;
        // console.log(teachers)

        for(let teacher of teachers) {
        

        const formatTeacher ={
            // id: c.MakeId,
            teacherName: teacher.name,
            email: teacher.email,
            grade: teacher.grade,
            DOB: teacher.DOB,
            contact: teacher.contactNumber,
            password: await bcrypt.hash(teacher.password, 10),
        
        };
        console.log(teacher.DOB)
        let [newTeacher, created ] = await Models.Teacher.findOrCreate({
            where: {teacherName: teacher.name}, //finds existing name records
            defaults: formatTeacher //no record - created new default value

        })


        // let [newTeacher, created ] = await Models.Grade.findOrCreate({
        //     where: {grade: meanings.grades},
        //     defaults: formatTeacher

        // })
       
        }
        res.send("HELLO TEACHER")
    } catch (err) {
        console.log(err.message)
        res.send("PROBLEM" + (err.message))
    }
// error - catches errors, logs error and response given to indicate the prob
}




module.exports = {
    storeTeacher
}