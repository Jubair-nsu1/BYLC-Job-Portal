const JobData = require('../models/jobData.model')

const jobPost = async (req, res) => {
    console.log(req.body)

    try{
        await JobData.create({
			designation: req.body.designation,
			department: req.body.department,
            employment_type: req.body.employmentType,
            job_nature: req.body.jobNature,
            job_location: req.body.jobLocation,
            experience_year: req.body.requiredExperience,
            age_limit: req.body.ageLimit,
            application_deadline: req.body.applDeadline,
            job_description: req.body.jobDescription,
            major_responsibilities: req.body.majorResponsibilities,
            education_requirement: req.body.educationalReq,
            experience_details: req.body.experienceDetails,
            technical_skills: req.body.techSkill,
            soft_skills: req.body.softSkill,
            benefit: req.body.benefit,
            postDate: new Date(),
		})
		res.json({ status: 'ok' })
    }
    catch(error){
        res.json({ status: 'error', error: 'Cant Process' })
    }
    
}

const viewJobs = async (req, res) => {
    try {
        const result = await JobData.find().sort({_id:-1}) ;
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
    
}

const viewJobsById = async (req, res) => {
    try {
        const result = await JobData.findById(req.params.id);
        res.status(200).json(result);
      } 
      catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
    
}

const updateJob = async (req, res) => {
    try {
        const result = await JobData.findOneAndDelete(req.params.id)
        res.status(200).json(result);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }   
}

const deleteJob = async (req, res) => {
    try {
        await JobData.findOneAndDelete( req.params.id );
        res.status(200)
        //res.status(200).json({ message: "Student deleted successfully" });
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }   
}


module.exports = {
    jobPost,
    viewJobs,
    viewJobsById,
    updateJob,
    deleteJob,
}