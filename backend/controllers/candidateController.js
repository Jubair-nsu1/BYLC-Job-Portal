const CandidateData = require('../models/candidateData.model')

const postCandidateData = async (req, res) => {
    console.log(req.body) 

}

const viewCandidateData = async (req, res) => {
    console.log(req.body) 

}

module.exports = {
    postCandidateData,
    viewCandidateData,
}