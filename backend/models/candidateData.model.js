const { text } = require('body-parser');
const mongoose = require('mongoose')

const CandidateSchema = mongoose.Schema(
    {
        //Personal
        position: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },

        //Educational
        university: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        cgpa: {
            type: String,
            required: true,
        },
        uni_passing_year: {
            type: String,
            required: true,
        },
        hsc_passing_year: {
            type: String,
            required: true,
        },


        current_employer: {
            type: String,
            required: true,
        },        
        work_experience: {
            type: String,
            required: true,
        },
        current_designation: {
            type: String,
            required: true,
        },
        current_salary: {
            type: String,
            required: true,
        },
        resume_link: {
            type: String,
            required: true,
        },
        cover_letter: {
            type: String,
            required: true,
        },
        expected_salary: {
            type: String,
            required: true,
        },
        knowing_media: {
            type: String,
            required: true,
        },

    }
);

const CandidateData = mongoose.model('CandidateData' , CandidateSchema)

module.exports = CandidateData