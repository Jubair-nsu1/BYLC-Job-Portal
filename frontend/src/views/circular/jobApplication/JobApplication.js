import { useState , useEffect , useRef  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const moment = require('moment');
import CIcon from '@coreui/icons-react'


import {
  cilChartPie,
  cilPeople
} from '@coreui/icons'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CWidgetStatsF,
} from '@coreui/react'


const JobApplication = () => {

  const navigate = useNavigate();
  const[record,setRecord] = useState([])

    //Get All Jobs data 
    const getAllCandidates = async () =>{
      await fetch('http://localhost:4000/api/viewCandidates')
        .then(resposne=> resposne.json())
        .then(res=>setRecord(res))
    }

    useEffect(() => {
      getAllCandidates();
    },[])  


    //Takes to specific candidate details page
    const candidateDetails = async (id) => {
      navigate(`/circular/jobApplication/${id}`);
    } 


  return (
    <div>
      <center><h3>View Applied Candidates</h3></center>

        <div class="container border shadow row mt-3 ">
              <h5 class="mt-3 text-secondary" style={{fontWeight:'bold'}}>
              New Candidates 
              </h5>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilPeople} height={24} />}
                  padding={false}
                  title="Total Candidates"
                  value="10"
                />
              </CCol>

                <div class="mt-4">
                  <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead class="thead-light">
                          <tr>
                            <th style={{fontWeight:'bold'}}>ID</th>
                            <th style={{fontWeight:'bold'}}>Department</th>
                            <th style={{fontWeight:'bold'}}>Position</th>
                            <th style={{fontWeight:'bold'}}>Name</th>
                            <th style={{fontWeight:'bold'}}>University</th>
                            <th style={{fontWeight:'bold'}}>Experience</th>
                            <th style={{fontWeight:'bold'}}>Age</th>
                            <th style={{fontWeight:'bold'}}>Applied On</th>
                            <th style={{fontWeight:'bold'}}>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {record.map((item,index)=>
                            <tr key={index}> 
                              <td>{index + 1}</td>
                              <td>{item.department}</td>
                              <td>{item.position}</td>
                              <td>{item.fullname}</td>
                              <td>{item.university}</td>
                              <td>{item.work_experience}</td>
                              <td>{item.work_experience}</td>
                              <td>{moment(item.apply_date).format('DD MMM YYYY')}</td>
                              <td>
                                <button class="btn btn-info" onClick={(e)=>candidateDetails(item._id)} >Details</button>
                              </td>
                            </tr>
                          )}
                        </tbody>
                        
                    </table>
                  </div>
                </div>
          </div>

    </div>
  )
}

export default JobApplication