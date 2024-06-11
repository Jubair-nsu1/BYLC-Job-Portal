import React from 'react'
import { useState , useEffect , useRef  } from "react";

import {
  CButton,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CFormLabel,
  CFormTextarea,
  CDatePicker,
} from '@coreui/react'

// import {SERVER_URL} from '../Services/helper'


const JobPost = () => {
  
    //Values & Set Values
    const [designation,setDesignation] = useState('');
    const [department,setDepartment] = useState('');
    const [employmentType,setEmploymentType] = useState('');
    const [jobNature,setJobNature] = useState('');
    const [jobLocation,setJobLocation] = useState('');
    const [ageLimit,setAgeLimit] = useState('');
    const [requiredExperience,setRequiredExperience] = useState('');
    const [applDeadline,setApplDeadline] = useState('');
    const [jobDescription,setJobDescription] = useState('');
    const [majorResponsibilities,setMajorResponsibilities] = useState('');
    const [educationalReq,setEducationalReq] = useState('');
    const [experienceDetails,setExperienceDetails] = useState('');
    const [techSkill,setTechSkill] = useState('');
    const [softSkill,setSoftSkill] = useState('');
    const [benefit,setBenefit] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid]     = useState(false);
    const [error, setError]     = useState(null);
    const [message, setMessage] = useState("");


  async function postJob(e) {
    e.preventDefault();

      if (designation && department && employmentType && jobNature && jobLocation && requiredExperience && ageLimit && applDeadline && jobDescription && majorResponsibilities && educationalReq && experienceDetails && techSkill  && softSkill && benefit) {  
        // setValid(true);
  
        const response  = await fetch("http://localhost:4000/api/jobPost", {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            designation,
            department,
            employmentType,
            jobNature,
            jobLocation,
            requiredExperience,
            ageLimit,
            applDeadline,
            jobDescription,
            majorResponsibilities,
            educationalReq,
            experienceDetails,
            techSkill,
            softSkill,
            benefit,
          }),
        })
        const data = await response.json()

        if (data) {
          if (data.error) {
            setMessage(data.error);
          } 
          else {
            setMessage("Job Posted!");
          }
        }

      }
  

  };


  return (
    <div>
      <center><h3>Create New Circular</h3></center>

      <div class="container-sm mt-4 mb-5 border shadow">
        

        <div class="mt-3"><h5>Basic Requirements</h5></div>
        
        <CForm className="row g-3 mt-3" onSubmit={postJob}>
          <CCol md={6}>
            <CFormInput type="text" id="inputEmail4" label="Define Designation" name="designation" value={designation} onChange={e => setDesignation(e.target.value)} required/>
          </CCol>

          <CCol md={6}>
            <CFormSelect id="dept" label="Department" name="department" value={department} onChange={e => setDepartment(e.target.value)} required>
              <option selected>Select Department</option>
              <option value="Finance and Accounts" >Finance and Accounts</option>
              <option value="Administration" >Administration</option>		 
              <option value="Procurement" >Procurement</option>
              <option value="Marketing & Communication" >Marketing & Communication</option>
              <option value="BYLC Ventures" >Ventures</option>
              <option value="Grants" >Grants</option>
              <option value="BYLCx" >BYLCx</option>
              <option value="Office of Professional Development" >OPD</option>
              <option value="Leadership Development and Training" >LDT</option>
              <option value="PDT" >PDT</option>
              <option value="Research Monitoring and Evaluation" >RME</option>
			        <option value="USAID BIJOYEE PROJECT" >USAID BIJOYEE PROJECT</option>
            </CFormSelect>
          </CCol>

          <CCol md={4}>
            <CFormSelect id="emp_type" label="Employment type" name="emp_type" value={employmentType} onChange={e => setEmploymentType(e.target.value)}>
              <option selected>Choose...</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Intern">Intern</option>
            </CFormSelect>
          </CCol>
          <CCol md={4}>
            <CFormSelect id="job_nature" label="Job Nature" name="job_nature" value={jobNature} onChange={e => setJobNature(e.target.value)}>
              <option>Choose...</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </CFormSelect>
          </CCol>
          
          <CCol md={4}>
            <CFormSelect id="job_location" label="Job Location" name="job_location" value={jobLocation} onChange={e => setJobLocation(e.target.value)}>
              <option value="Dhaka">Dhaka (HQ)</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Manikganj">Manikganj</option>
            </CFormSelect>
          </CCol>

          <CCol md={4}>
            <CFormInput type="number" id="exp_year" label="Experience Year" name="exp_year" value={requiredExperience} onChange={e => setRequiredExperience(e.target.value)} required/>
          </CCol>
          <CCol md={4}>
            <CFormInput type="text
            " id="ageLimit" label="Age Limit" name="ageLimit" value={ageLimit} onChange={e => setAgeLimit(e.target.value)}/>
          </CCol>
          <CCol md={4}> 
            <CFormInput type="date" id="appl_deadline" label="Application Deadline" name="appl_deadline" value={applDeadline} onChange={e => setApplDeadline(e.target.value)}/>
          </CCol>

          {/* Required fields */}
          <CCol xs={12}>
            <CFormTextarea  id="job_description" label="Purpose/Job Description" placeholder="Write here.." name="job_description" value={jobDescription} onChange={e => setJobDescription(e.target.value)}/>
          </CCol>
          <CCol xs={12}>
            <CFormTextarea  id="major_responsibilities" label="Core/Major Responsibilities" placeholder="Write here.." name="major_responsibilities" value={majorResponsibilities} onChange={e => setMajorResponsibilities(e.target.value)}/>
          </CCol>
          <CCol xs={12}>
            <CFormTextarea  id="educational_req" label="Education Requirements" placeholder="Write here.." name="educational_req" value={educationalReq} onChange={e => setEducationalReq(e.target.value)}/>
          </CCol>
          <CCol xs={12}>
            <CFormTextarea  id="exp_details" label="Experience Details" placeholder="Write here.." name="exp_details" value={experienceDetails} onChange={e => setExperienceDetails(e.target.value)}/>
          </CCol>

          {/* Optional fields */}
          <div class="mt-5"><h5>Additional Requirements</h5></div>

          <CCol xs={12}>
            <CFormTextarea  id="tech_skill" label="Required technical skills" placeholder="Write here.." name="tech_skill" value={techSkill} onChange={e => setTechSkill(e.target.value)}/>
          </CCol>
          <CCol xs={12}>
            <CFormTextarea  id="soft_skill" label="Required soft skills" placeholder="Write here.." name="soft_skill" value={softSkill} onChange={e => setSoftSkill(e.target.value)}/>
          </CCol>

          {/* Optional fields */}
          <div class="mt-5"><h5>Benefits</h5></div>
          <CCol xs={12}>
            <CFormTextarea  id="benefits" label="Salary/Benefits" placeholder="Write here.." name="benefits" value={benefit} onChange={e => setBenefit(e.target.value)}/>
          </CCol>


          <CCol xs={12}>
            <CFormCheck type="checkbox" id="gridCheck" label="Check to confirm"/>
          </CCol>
          <CCol xs={12} class="mb-3">
            <center><CButton type="submit">Submit</CButton></center>
          </CCol>
          <center>{message && <span style={{color:'red',fontWeight:'bold'}}>{message}</span>}</center>

        </CForm>

      </div>
    </div>
    
  )
}

export default JobPost