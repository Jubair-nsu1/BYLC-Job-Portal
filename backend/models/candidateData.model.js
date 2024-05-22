const { text } = require('body-parser');
const mongoose = require('mongoose')

const CandidateData = mongoose.Schema(
    {
        //Personal
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        //Educational
        university: {
            type: String,
            required: true,
        },
        passing_year: {
            type: String,
            required: true,
        },
        major: {
            type: String,
            required: true,
        },
        result: {
            type: String,
            required: true,
        },
        //Experience
        work_experience: {
            type: String,
            required: true,
        },

        //Others
        ethnicity: {
            type: String,
            required: true,
        },
        disability: {
            type: String,
            required: true,
        },

        resume_link: {
            type: String,
            required: true,
        }
    },
    { collection: 'candidate-info' }
);

const model = mongoose.model('CandidateData' , CandidateData)

module.exports = model