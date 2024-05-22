const { text } = require('body-parser');
const mongoose = require('mongoose')

const JobData = mongoose.Schema(
    {
        designation: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        employment_type: {
            type: String,
            required: true,
        },
        job_nature: {
            type: String,
            required: true,
        },
        job_location: {
            type: String,
            required: true,
        },
        application_deadline: {
            type: String,
            required: true,
        },
        job_description: {
            type: String,
            required: true,
        },
        experience_year: {
            type: Number,
            required: true,
        },
        vacancies: {
            type: Number,
            required: true,
        },
        education_requirement: {
            type: String,
            required: true,
        },
        experience_details: {
            type: String,
            required: true,
        },
        //Core Responsibilities
        strategic: {
            type: String,
            required: true,
        },
        operational: {
            type: String,
            required: true,
        },
        people_development: {
            type: String,
            required: true,
        },

        technical_skills: {
            type: String,
            required: true,
        },
        behavioral_skills: {
            type: String,
            required: true,
        },
        soft_skills: {
            type: String,
            required: true,
        },
    },
    { collection: 'job-info' }
);

const model = mongoose.model('JobData' , JobData)

module.exports = model