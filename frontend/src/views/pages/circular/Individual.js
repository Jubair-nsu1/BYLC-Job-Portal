import React from 'react'
import logo from './images/bylclogo.png'
import slide1 from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'

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
    CCarousel,
    CCarouselItem,
    CFooter,
    CLink,
  } from '@coreui/react'

const individual = () => {
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
        
        <div class="d-flex justify-content-center mt-5">
          <div><h1 style={{color:'darkgreen', fontWeight:'bold'}}>JOB DESCRIPTION</h1></div>  
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Position: </h4><h5 style={{color:'darkblue', fontWeight:'bold'}}>Master Trainer</h5></div>
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>About BYLC</h4></div>
            <div style={{color:'black'}}>Bangladesh Youth Leadership Center (BYLC), the country’s first leadership institute, exists to build leadership skills in youth from diverse backgrounds, instill values of empathy, tolerance, and inclusiveness in them to jobs and entrepreneurial opportunities. Our goal is to enable our alumni to have a high impact in the public, private and civil sectors. All of BYLC’s efforts aim to strengthen prosperity, justice, and inclusiveness in societies worldwide.</div>         
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Purpose:</h4></div>
            <div style={{color:'black'}}>The Master Trainer will work under the USAID Bijoyee Activity project of BYLC, which is the strategic partner of CARE Bangladesh, including some other partner organizations. The project focused on a comprehensive Initiative focused on empowering and engaging young people in Bangladesh. It aims to address various aspects of youth development, including , building soft skills, creating environment for employment, entrepreneurship, civic engagement, and social inclusion as stated in project documents. The Master Trainer will be responsible for overseeing the implementation and coordination of the capacity building, learning, facilitating and training activity with collaboration of all engaged stakeholders. S/He will ensure its successful execution and timely completion of work under the guidance of Youth Skills specialist, Skills and Employment manager. This position will be based in Dhaka North and South, Chattogram, Khulna, Rangpur and Mymensingh, North Hub with frequent travel to two Spokes (sub hub office) in Gazipur and Manikgonj district under Dhaka North Hub of USAID Bijoyee Activity Project, BYLC.</div>   
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Education:</h4></div>
            <ul style={{color:'black'}}>
                <li>Master's degree in Social Science/MED background with good academic result</li>
            </ul> 
        </div>

        <div class=" mt-5">
            <div><h4 style={{color:'black', fontWeight:'bold'}}>Experience</h4></div>
            <ul style={{color:'black'}}>
                <li>At least 03 year(s) similar experiences</li>
                <li>Experience of project field management and training in NGO/ development organization</li>
                <li>Experience on training, learning and development management for USAID Funded project is mandatory</li>
                <li>Experiences of youth development sector including liaison with GOB and NGOs</li>
            </ul> 
        </div>


        <div class="d-flex justify-content-center mt-5">
          <div><h2 style={{color:'darkgreen', fontWeight:'bold'}}>Application Form</h2></div>  
        </div>

        <div class="container-sm mt-3 border shadow">

        <CForm className="row g-3 mt-3" >
          <CCol md={6}>
            <CFormInput type="email" id="inputEmail4" label="Full Name *" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="email" id="inputEmail4" label="Email *" />
          </CCol>

          <CCol md={4}>
            <CFormInput type="phone" id="inputEmail4" label="Phone *" />
          </CCol>
          <CCol md={4}>
            <CFormInput type="email" id="inputEmail4" label="University *" />
          </CCol>
          <CCol md={4}>
            <CFormInput type="number" id="inputEmail4" label="Work Experience (in years)" />
          </CCol>

          <CCol xs={12}>
            <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St"/>
          </CCol>
          <CCol md={6}>
            <CFormInput id="inputCity" label="City"/>
          </CCol>
          <CCol md={4}>
            <CFormSelect id="inputState" label="State">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={2}>
            <CFormInput id="inputZip" label="Zip" />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="formFile">Resume *</CFormLabel>
            <CFormInput type="file" id="formFile"/>
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" id="gridCheck" label="Check to confirm"/>
          </CCol>
          <CCol xs={12} class="mb-3">
            <center><CButton type="submit"> Confirm and Apply</CButton></center>
          </CCol>
        </CForm>

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

export default individual