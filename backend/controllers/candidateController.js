//---- Model ----
const CandidateData = require('../models/candidateData.model')

//---- Multer ----
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../resumes");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });


const postCandidateData = async (req, res) => {
    console.log(req.body)

    try{
        await CandidateData.create({
            position: req.body.position,
            department: req.body.department,
			fullname: req.body.fullname,
			email: req.body.email,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            university: req.body.university,
            subject: req.body.subject,
            degree: req.body.degree,
            cgpa: req.body.cgpa,
            uni_passing_year: req.body.uniPassingYear,
            hsc_passing_year: req.body.hscPassingYear,
            current_employer: req.body.employerName,
            work_experience: req.body.workExperience,
            current_designation: req.body.currentDesignation,
            current_salary: req.body.currentSalary,
            //resume_link: req.body.fileLink,
            cover_letter: req.body.coverLetter,
            expected_salary: req.body.expectedSalary,
            knowing_media: req.body.knowingMedia,
            apply_date: new Date(),
		})
		res.json({ status: 'ok' })
    }
    catch(error){
        res.json({ status: 'error', error: 'Cant Process' })
    }
}

const viewCandidateData = async (req, res) => {
    try {
        const result = await CandidateData.find().sort({_id:-1}) ;
        res.status(200).json(result);
    } 
    catch (err) {
        res.status(500).json(err);
    }
}

const viewCandidateById = async (req, res) => {
    try {
        const result = await CandidateData.findById(req.params.id);
        res.status(200).json(result);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const countTotalCandidates = async (req, res) => {
    try {
        //const query = { state: "Solved" };
        const totalCandidates = await CandidateData.countDocuments();
        res.status(200).json(totalCandidates);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}


module.exports = {
    postCandidateData,
    viewCandidateData,
    viewCandidateById,
    countTotalCandidates,
}