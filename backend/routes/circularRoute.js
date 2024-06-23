const express = require('express')
const router = express.Router()
const {jobPost,viewJobs,viewJobsById,updateJob,deleteJob,countTotalJobs} = require('../controllers/jobController')
const {postCandidateData,viewCandidateData,viewCandidateById,countTotalCandidates} = require('../controllers/candidateController')


//{ Inside Middleware-------------------

router.post('/jobPost',jobPost)  // Data submitted by hr during new job post
router.get('/viewJobs',viewJobs)  // View the Jobs posted by HR
router.get('/viewJob/:id',viewJobsById)  // View a Job by ID posted by HR
router.get('/updateJob/:id',updateJob)  // Update a Job posted by HR
router.get('/deleteJob/:id',deleteJob)  // Delete a Job posted by HR
router.get('/totalJobs',countTotalJobs) // Count Total Jobs

router.get('/viewCandidates',viewCandidateData) // View All Candidate data
router.get('/viewCandidate/:id',viewCandidateById) // View a candidate by ID
router.get('/totalCandidates',countTotalCandidates) // Count Total Candidates

// -------------------Inside Middleware }



//{ Outside Middleware-------------------

router.post('/jobApplication',postCandidateData) //Data submitted by candidate when they apply

// -------------------Outside Middleware }


module.exports = router