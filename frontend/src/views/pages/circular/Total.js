import {useEffect,useState} from 'react';
import logo from './images/bylclogo.png'
import slide1 from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import { Link, Navigate, useNavigate } from "react-router-dom";
const moment = require('moment');

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

    CNavbar,
    CContainer,
    CNavbarBrand,
    CImage,
    CCarousel,
    CCarouselItem,
    CFooter,
    CLink,
  } from '@coreui/react'

const Total = () => {
    const navigate = useNavigate();
    const[record,setRecord] = useState([])

    //Takes to Job Details Page when the clicking the Job Title
    const JobDetails = async (id) =>{
        navigate(`/jobDetails/${id}`);
    }

    //Get All Jobs data 
    const getAllJobsData = async () =>{
      await fetch('http://localhost:4000/api/viewJobs')
        .then(resposne=> resposne.json())
        .then(res=>setRecord(res))
    }

    useEffect(() => {
        getAllJobsData();
      },[])
  
    return (
        <div>
        <CNavbar expand="sm" style={{ backgroundImage: `linear-gradient(to right, rgba(29,43,29,1) 0%, rgba(24,121,9,1) 37%, rgba(0,255,81,1) 100% ` }}>
            <CContainer fluid>
                <CNavbarBrand>
                    <CImage src={logo} width={160} height={50} />
                </CNavbarBrand>
            </CContainer>
        </CNavbar>

        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={slide1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={slide2} alt="slide 2" />
            </CCarouselItem>
        </CCarousel>

        <div class="d-flex justify-content-center mt-5">
            <div><h1 style={{color:'darkgreen', fontWeight:'bold'}}>JOIN OUR TEAM</h1></div>
        </div>
        <div class="d-flex justify-content-center mt-3 mb-5">
            <div><h3 style={{color:'green', fontWeight:'bold'}}>VACANCIES</h3></div>
        </div>
        
        <div class="container-sm mt-5 shadow">
        <CAccordion flush>
        
        {record.length>0
            ? 
            record.map((item,index)=>
                        <CAccordionItem itemKey={index}>
                            <CAccordionHeader ><strong style={{color:'darkgreen'}} >{item.designation}, {item.department}</strong></CAccordionHeader>
                            <CAccordionBody style={{ cursor: 'pointer' }} onClick={(e)=>JobDetails(item._id)}>
                                <div class="d-flex justify-content-between">
                                    <div><a style={{fontWeight:'bold'}}>Job Nature: </a><a>{item.job_nature}</a></div>
                                    <div><a style={{fontWeight:'bold'}}>Job Location: </a><a>{item.job_location}</a></div>
                                    <div><a style={{fontWeight:'bold'}}>Application Deadline: </a><a>{moment(item.application_deadline).format('DD MMM YYYY')}</a></div>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <div><a style={{fontWeight:'bold'}}>Employment Type: </a><a>{item.employment_type}</a></div>
                                    <div><a style={{fontWeight:'bold'}}>Experience Needed: </a><a>{item.experience_year} years</a></div>
                                </div>
                            </CAccordionBody>
                        </CAccordionItem>
            )
            : 
            <div class="container-sm border d-flex justify-content-center mt-5 mb-5 ">
                <h2 style={{color:'red', fontWeight:'bold'}}>No Jobs Available</h2>
            </div>
            
        }
        
        
        </CAccordion>
        </div>

        <div class="d-flex justify-content-center mt-5">
            <div><h3 style={{color:'green', fontWeight:'bold'}}>ADDITIONAL INFORMATION</h3></div>
        </div>
        <div class="container-sm mt-3">
            <ul style={{color:'black'}}>
                <li>Bangladesh Youth Leadership Center (BYLC) tries to ensure a diverse workforce by providing equal  opportunities to everyone, irrespective of race, age, gender, sexual orientation, HIV status, class, ethnicity, disability, location, and religion</li>
                <li>BYLC follows a strict zero-tolerance on any type of abuse towards children and vulnerable adults</li>
                <li>All applications will be treated with the strictest confidentiality</li>
                <li>BYLC does not charge any fee at any stage of the recruitment process (application, interview meeting, or processing)</li>
            </ul>
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

export default Total