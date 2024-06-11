const express = require('express')
const router = express.Router()
const {jobPost,viewJobs,viewJobsById,updateJob,deleteJob} = require('../controllers/jobController')
const {postCandidateData,viewCandidateData} = require('../controllers/candidateController')


//{ Inside Middleware-------------------
router.post('/jobPost',jobPost)  // Data submitted by hr during new job post
router.get('/viewJobs',viewJobs)  // View the Jobs posted by HR
router.get('/viewJob/:id',viewJobsById)  // View a Job by ID posted by HR
router.get('/updateJob/:id',updateJob)  // Update a Job posted by HR
router.get('/deleteJob/:id',deleteJob)  // Delete a Job posted by HR

router.get('/viewCandidateData',viewCandidateData) //view Candidate data
// -------------------Inside Middleware }


//{ Inside Middleware-------------------
router.post('/jobApplication',postCandidateData) //data submitted by candidate when they apply

// -------------------Outside Middleware }


module.exports = router