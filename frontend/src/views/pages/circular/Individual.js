import {useEffect,useState} from 'react';
import logo from './images/bylclogo.png'
import { Link, useNavigate, useParams } from "react-router-dom";

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

const individual = () => {
    const navigate = useNavigate();
    const[record,setRecord] = useState([])

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
    const ApplyForm = async (id) =>{
        navigate(`/jobDetails/form/${id}`);
    }

    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 3
          }}
      />
    );



  return (
    <div>
      <CNavbar expand="sm" style={{ backgroundImage: `linear-gradient(to right, rgba(29,43,29,1) 0%, rgba(24,121,9,1) 37%, rgba(0,255,81,1) 100% ` }}>
          <CContainer fluid>
            <CNavbarBrand>
              <CImage src={logo} width={160} height={50} />
            </CNavbarBrand>
          </CContainer>
      </CNavbar>

      <div class="container-sm mt-3">
        
        <Link to='/career'><CButton color='secondary' style={{color:'black', fontWeight:'bold'}} variant="outline" shape="rounded-pill">Go Back</CButton></Link>

        <div class="d-flex justify-content-center mt-2">
          <div><h1 style={{color:'darkgreen', fontWeight:'bold'}}>JOB DESCRIPTION</h1></div>      
        </div>
        

        <div class=" mt-5 d-flex justify-content-between">
            <div>
              <h4 style={{color:'black', fontWeight:'bold'}}>Position </h4>
              <h5 style={{color:'red', fontWeight:'bold'}}>{record.designation}, {record.department}</h5>
            </div>
            <div>
              <CButton color='info' style={{color:'black', fontWeight:'bold'}} variant="outline" shape="rounded-pill" onClick={(e)=>ApplyForm(record._id)}>Go to Application</CButton><br/>
            </div>
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>About BYLC</h4></div>
            <div style={{color:'black'}}>Bangladesh Youth Leadership Center (BYLC), the country’s first leadership institute, exists to build leadership skills in youth from diverse backgrounds, instill values of empathy, tolerance, and inclusiveness in them to jobs and entrepreneurial opportunities. Our goal is to enable our alumni to have a high impact in the public, private and civil sectors. All of BYLC’s efforts aim to strengthen prosperity, justice, and inclusiveness in societies worldwide.</div>         
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Purpose</h4></div>
            <div style={{color:'black'}}>{record.job_description}</div>   
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Major responsibilities (detailed job description will be available for short listed candidates)</h4></div>
            <a style={{whiteSpaces: 'pre-wrap'}}><div dangerouslySetInnerHTML={{ __html: record.major_responsibilities }}></div></a>
            
            {/* <div style={{color:'black'}}>{record.major_responsibilities}</div>  */}
            {/* <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul>  */}
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Education</h4></div>
            <div style={{color:'black'}}>{record.education_requirement}</div> 
            {/* <ul style={{color:'black'}}>
                <li>Master's degree in Social Science/MED background with good academic result</li>
            </ul>  */}
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Experience</h4></div>
            <div style={{color:'black'}}>{record.experience_details}</div>
            {/* <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul>  */}
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Required Technical Skills</h4></div>
            <div style={{color:'black'}}>{record.technical_skills}</div>
            {/* <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul>  */}
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Required Soft Skills</h4></div>
            <div style={{color:'black'}}>{record.soft_skills}</div>
            {/* <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul>  */}
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Benefits</h4></div>
            <div style={{color:'black'}}>{record.benefit}</div>
            {/* <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul>  */}
        </div>

        <div class=" mt-5 d-flex justify-content-between">
            <div>
              <a><h4 style={{color:'black', fontWeight:'bold'}}>Employment type </h4></a> 
              <center><a style={{color:'black', fontWeight:'bold'}}>{record.employment_type}</a></center>
            </div>
            <div>
              <h4 style={{color:'black', fontWeight:'bold'}}>Application deadline </h4>
              <center><a style={{color:'black', fontWeight:'bold'}}>{record.application_deadline}</a></center> 
            </div>
        </div>
      
        <CCol xs={12} class="mb-4 mt-4">
            <center><CButton color='info' style={{color:'black', fontWeight:'bold'}} variant="outline" shape="rounded-pill" onClick={(e)=>ApplyForm(record._id)}>Go to Application</CButton></center>
        </CCol>

        <div class='mt-5 mb-5'> <ColoredLine color="darkgreen" /></div>
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

export default individual