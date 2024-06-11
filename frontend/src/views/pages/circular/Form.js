import {useEffect,useState} from 'react';
import logo from './images/bylclogo.png'
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
        username: '',
        password: '',
        confirmPassword: ''
      });
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
      }
      
    const[record,setRecord] = useState([])
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

    async function FormSubmit(e) {
        e.preventDefault();

    } 



  return (
    <div>
        <CNavbar expand="sm" style={{ backgroundImage: `linear-gradient(to right, rgba(29,43,29,1) 0%, rgba(24,121,9,1) 37%, rgba(0,255,81,1) 100% ` }}>
            <CContainer fluid>
                <CNavbarBrand>
                    <CImage src={logo} width={160} height={50} />
                </CNavbarBrand>
            </CContainer>
        </CNavbar>

        <div style={{ backgroundImage: `url(${ybackground})` , backgroundRepeat: 'no-repeat', backgroundAttachment:'fixed', backgroundSize: '40% 70%' , backgroundPosition: 'top right'}}>
        <div class="container-sm mt-3" >
        
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
                        <CFormInput type="text" id="fname" label="Full Name *" />
                    </CCol>
                    <CCol md={6}>
                        <CFormInput type="email" id="email" label="Email *" />
                    </CCol>

                    <CCol md={4}>
                        <CFormInput type="phone" id="phone" label="Phone *" />
                    </CCol>
                    <CCol md={4}>
                        <CFormInput type="date" id="dob" label="Date of birth *" />
                    </CCol>
                    <CCol md={4}>
                        <CFormSelect id="gender" label="Gender">
                        <option>Male</option>
                        <option>Female</option>
                        </CFormSelect>
                    </CCol>

                    <CCol xs={12}>
                        <CFormInput id="address" label="Present Address *" placeholder="Mirpur, Dhaka"/>
                    </CCol>

                    <div class='mt-4'> <ColoredLine color="black" /></div>
                    
                    <h3 class='mt-4'>Education</h3>
                    <CCol md={12}>
                        <CFormInput type="text" id="inputEmail4" label="University name*" placeholder='Dhaka University'/>
                    </CCol>
                    <CCol md={4}>
                        <CFormInput type="text" id="inputEmail4" label="Subject/Major" placeholder='Computer Science'/>
                    </CCol>
                    <CCol md={4}>
                        <CFormSelect id="gender" label="Degree*">
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
                        <CFormInput type="text" id="inputEmail4" label="CGPA *" placeholder='3.50'/>
                    </CCol>

                    <CCol md={6}>
                        <CFormInput type="text" id="inputEmail4" label="Passing Year*" placeholder='2020'/>
                    </CCol>
                    <CCol md={6}>
                        <CFormInput type="text" id="inputEmail4" label="HSC/Equivalent passing year *" placeholder='2014'/>
                    </CCol>
                    
                    <div class='mt-4'> <ColoredLine color="black" /></div>

                    <h3 class='mt-4'>Work Experience</h3>

                    <CCol md={12}>
                        <CFormInput type='number' id="inputCity" label="Current/Last employer name*" placeholder='Google'/>
                    </CCol>
                    <CCol md={6}>
                        <CFormInput type='number' id="inputCity" label="Relevant work experience (Years)*" placeholder='10'/>
                    </CCol>
                    <CCol md={6}>
                        <CFormInput type='text' id="inputZip" label="Current/Last designation*" placeholder='Manager'/>
                    </CCol>

                    <CCol md={6}>
                        <CFormInput type='number' id="inputZip" label="Current Salary" />
                    </CCol>

                    <div class='mt-4'> <ColoredLine color="black" /></div>

                    <h3 class='mt-4'>CV/Resume</h3>
                    <CCol xs={12}>
                        <CFormLabel htmlFor="formFile">Upload CV/Resume (PDF file only) *</CFormLabel>
                        <CFormInput type="file" id="formFile"/>
                    </CCol>
                    <CCol xs={12}>
                        <CFormTextarea
                        id="cover_letter"
                        label="Why Should we hire you?*"
                        rows={3}
                        text="Maximum 100 words"
                        ></CFormTextarea>
                    </CCol>

                    <CCol md={6}>
                        <CFormInput type='number' id="inputZip" label="Expected Salary" />
                    </CCol>
                    <CCol md={6}>
                    <CFormSelect id="knowing_media" label="How do know about us*">
                        <option>LinkedIn</option>
                        <option>BDJobs</option>
                        <option>Facebook</option>
                        <option>BYLC Website</option>
                        <option>Internal Reference</option>
                        </CFormSelect>
                    </CCol>

                    <CCol xs={12}>
                        <CFormCheck type="checkbox" id="gridCheck" label="Check to confirm"/>
                    </CCol>

                    <CCol xs={12} class="mb-4 mt-4">
                        <center><CButton type="submit" color="success" style={{color:'white',fontWeight:'bold'}}> Confirm and Apply</CButton></center>
                    </CCol>
                </CForm>
            </div>
        </div>
        </div>

        <CFooter style={{color:'black'}} class="d-flex justify-content-between mt-5">
            <div>
                <span>&copy;Job Portal @ 2023 Copyright</span>
            </div>
            <div>
                <span>Powered by BYLC IT</span>
            </div>
        </CFooter>

    </div>
  )
}

export default Form