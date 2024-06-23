import {useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ybackground from './images/y-background.png'
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CForm,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CFormLabel,
    CNavbar,
    CContainer,
    CNavbarBrand,
    CImage,
    CFormTextarea,
    CCarouselItem,
    CFooter,
    CLink,
  } from '@coreui/react'

const Form = () => {

    const [input, setInput] = useState({
        fullname: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        university: '',
        subject: '',
        degree: '',
        cgpa: '',
        uniPassingYear: '',
        hscPassingYear: '',
        employerName: '',
        workExperience: '',
        currentDesignation: '',
        currentSalary: '',
        //fileLink,
        coverLetter: '',
        expectedSalary: '',
        knowingMedia: ''
    });
     
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
    }

    const [message, setMessage] = useState(""); 
    const[record,setRecord] = useState([]) //Record stores data fetched from server
    const navigate = useNavigate();
    const params = useParams(); // Get ID from URL

    //Get Specific Job Details
    const JobDetailById = async () =>
    {
        await fetch(`http://localhost:4000/api/viewJob/${params.id}`)
            .then(resposne=> resposne.json())
            .then(res=>setRecord(res))
    }
    useEffect(()=> {
        JobDetailById(params.id);
    }, [params.id])

    //Takes to Apply Form Page when the clicking the button
    const GoBack = async (id) =>{
        navigate(`/jobDetails/${id}`);
    }

    //Line break
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
      );

    //Email Validator
    // const validateEmail = () => {
    //     const emailRegex = /^[A-Z0-9._%+-]+@bylc.org$/i;
    //     if (!emailRegex.test(email)) {
    //         setError('Please enter your valid BYLC email');
    //     } else {
    //         setError('');
    //     }
    // };
    // useEffect(() => {
    //     validateEmail();
    // }, [email]);


    async function FormSubmit(e) {
        e.preventDefault();
        let position = record.designation; //fetched data
        let department = record.department; //fetched data
        let fullname = input.fullname;
        let email = input.email;
        let phone = input.phone;
        let dob = input.dob;
        let gender = input.gender;
        let address = input.address;
        let university = input.university;
        let subject = input.subject;
        let degree = input.degree;
        let cgpa = input.cgpa;
        let uniPassingYear = input.uniPassingYear;
        let hscPassingYear = input.hscPassingYear;
        let employerName = input.employerName;
        let workExperience = input.workExperience;
        let currentDesignation = input.currentDesignation;
        let currentSalary = input.currentSalary;
        //fileLink,
        let coverLetter = input.coverLetter;
        let expectedSalary = input.expectedSalary;
        let knowingMedia = input.knowingMedia;

        const userData = {position,department,fullname,email,phone,dob,gender,address,university,subject,degree,cgpa,uniPassingYear,hscPassingYear,
                        employerName,workExperience,currentDesignation,currentSalary,coverLetter,expectedSalary,knowingMedia}
         
        try {
            const response  = await fetch('http://localhost:4000/api/jobApplication', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            })

            const data = await response.json() 
            if (data) {
                if (data.error) {
                    setMessage(data.error);
                } 
                else {
                    setMessage("Applied Successfully");
                    setInput("");
                }
            }
        } 
        catch (error) {
            console.log(error)
        }             

    } 



  return (
    <div>
        <Navbar/>

        <div style={{ backgroundImage: `url(${ybackground})` , backgroundRepeat: 'no-repeat', backgroundAttachment:'fixed', backgroundSize: '40% 70%' , backgroundPosition: 'top right'}}>
            <div class="container-sm mt-3 mb-5" >    
                <CButton color='secondary' style={{color:'black', fontWeight:'bold'}} variant="outline" shape="rounded-pill" onClick={(e)=>GoBack(record._id)}>Go Back</CButton>

                <div class="d-flex justify-content-center mt-5 mb-2">
                    <h2 style={{color:'green', fontWeight:'bold'}}>Apply here</h2>
                </div>
                <div class='d-flex justify-content-center mb-5'>
                    <h3 style={{color:'darkgreen', fontWeight:'bold'}}>{record.designation}, {record.department}</h3>
                </div>

                <div class="container-sm mt-3 border shadow" >
                    <h3 class='mt-3'>Basic Info</h3>
                    
                    <CForm className="row g-3 mt-2" onSubmit={FormSubmit}>
                        <CCol md={6}>
                            <CFormInput type="text" label="Full Name *" name="fullname" value={input.fullname} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={6}>
                            <CFormInput type="email" id="email" label="Email *" name="email" value={input.email} onChange={onInputChange}/>
                        </CCol>

                        <CCol md={4}>
                            <CFormInput type="phone" id="phone" label="Phone *" name="phone" value={input.phone} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={4}>
                            <CFormInput type="date" id="dob" label="Date of birth *" name="dob" value={input.dob} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={4}>
                            <CFormSelect id="gender" label="Gender *" name="gender" value={input.gender} onChange={onInputChange}>
                                <option>Male</option>
                                <option>Female</option>
                            </CFormSelect>
                        </CCol>

                        <CCol xs={12}>
                            <CFormInput id="address" label="Present Address *" placeholder="Mirpur, Dhaka" name="address" value={input.address} onChange={onInputChange}/>
                        </CCol>

                        <div class='mt-4'> <ColoredLine color="black" /></div>
                        
                        <h3 class='mt-4'>Education</h3>
                        <CCol md={12}>
                            <CFormInput type="text" label="University name *" placeholder='Dhaka University' name="university" value={input.university} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={4}>
                            <CFormInput type="text" label="Subject/Major *" placeholder='Computer Science' name="subject" value={input.subject} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={4}>
                            <CFormSelect label="Degree *" name="degree" value={input.degree} onChange={onInputChange}>
                            <option>BA</option>
                            <option>BBA</option>
                            <option>BSc</option>
                            <option>BBA</option>
                            <option>MA</option>
                            <option>MBA</option>
                            <option>MSc</option>
                            <option>Other Bachalors</option>
                            <option>Other Masters</option>
                            <option>HSC</option>
                            <option>SSC</option>
                            <option>N/A</option>
                            </CFormSelect>
                        </CCol>
                        <CCol md={4}>
                            <CFormInput type="text" label="CGPA *" placeholder='3.50' name="cgpa" value={input.cgpa} onChange={onInputChange}/>
                        </CCol>

                        <CCol md={6}>
                            <CFormInput type="text" label="Passing Year *" placeholder='2020' name="uniPassingYear" value={input.uniPassingYear} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={6}>
                            <CFormInput type="text" label="HSC/Equivalent passing year *" placeholder='2014' name="hscPassingYear" value={input.hscPassingYear} onChange={onInputChange}/>
                        </CCol>
                        
                        <div class='mt-4'> <ColoredLine color="black" /></div>

                        <h3 class='mt-4'>Work Experience</h3>

                        <CCol md={12}>
                            <CFormInput type='text' label="Current/Last employer name *" placeholder='Google' name="employerName" value={input.employerName} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={6}>
                            <CFormInput type='number' label="Relevant work experience (Years) *" placeholder='10' name="workExperience" value={input.workExperience} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={6}>
                            <CFormInput type='text' label="Current/Last designation *" placeholder='Manager' name="currentDesignation" value={input.currentDesignation} onChange={onInputChange}/>
                        </CCol>

                        <CCol md={6}>
                            <CFormInput type='number' label="Current Salary *" name="currentSalary" value={input.currentSalary} onChange={onInputChange}/>
                        </CCol>

                        <div class='mt-4'> <ColoredLine color="black" /></div>

                        <h3 class='mt-4'>CV/Resume</h3>
                        <CCol xs={12}>
                            <CFormLabel htmlFor="formFile">Upload CV/Resume (PDF file only) *</CFormLabel>
                            <CFormInput type="file" id="formFile"/>
                        </CCol>
                        <CCol xs={12}>
                            <CFormTextarea
                            label="Why Should we hire you? *"
                            rows={3}
                            text="Maximum 100 words"
                            name="coverLetter" value={input.coverLetter} onChange={onInputChange}
                            ></CFormTextarea>
                        </CCol>

                        <CCol md={6}>
                            <CFormInput type='number' label="Expected Salary *" name="expectedSalary" value={input.expectedSalary} onChange={onInputChange}/>
                        </CCol>
                        <CCol md={6}>
                        <CFormSelect id="knowing_media" label="How do know about us *" name="knowingMedia" value={input.knowingMedia} onChange={onInputChange}>
                            <option>LinkedIn</option>
                            <option>BDJobs</option>
                            <option>Facebook</option>
                            <option>BYLC Website</option>
                            <option>Internal Reference</option>
                            </CFormSelect>
                        </CCol>

                        <CCol xs={12}>
                            <CFormCheck type="checkbox" id="gridCheck" label="Check to confirm" required/>
                        </CCol>

                        <CCol xs={12} class="mb-4 mt-4">
                            <center><CButton type="submit" color="success" style={{color:'white',fontWeight:'bold'}}> Confirm and Apply</CButton></center>
                        </CCol>
                    </CForm>
                    {message && <span style={{color:'blue',fontWeight:'bold'}}>{message}</span>}
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Form