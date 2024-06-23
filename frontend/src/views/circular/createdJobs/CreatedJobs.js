import { useState , useEffect , useRef  } from "react";
const moment = require('moment');


const CreatedJobs = () => {

  const[record,setRecord] = useState([])

    //Get All Jobs data 
    const getAllJobsData = async () =>{
      await fetch('http://localhost:4000/api/viewJobs')
        .then(resposne=> resposne.json())
        .then(res=>setRecord(res))
    }

    useEffect(() => {
        getAllJobsData();
    },[])  



    //Delete a Job
    const handleClickDelete = async (id) => { 
      const userConfirmed = window.confirm(
        "Are you sure you want to delete this record?"
      );
      if (userConfirmed) {
        await fetch(`http://localhost:4000/api/deleteJob/${id}`)
          .then(resposne=> resposne.json())
          .then( setRecord(record.filter(item => item._id !== id)) ) //Filter after delete
          //Toast Message
      }
      else{
        console.log("Delete operation canceled by the user.");
        //Toast Message
      }

    } 

    //Update a Job
    const handleClickUpdate = async (id) => { 
        //Write Update Logics.....
    } 




  return (
    <div>
      <center><h3>View New Applications</h3></center>

      <div class="container border shadow row mt-3 ">
          <h5 class="mt-3 text-secondary" style={{fontWeight:'bold'}}>
            Created Job Circulars 
          </h5>
                <div class="mt-5">
                  <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead class="thead-light">
                          <tr>
                            <th style={{fontWeight:'bold'}}>ID</th>
                            <th style={{fontWeight:'bold'}}>Position</th>
                            <th style={{fontWeight:'bold'}}>Department</th>
                            <th style={{fontWeight:'bold'}}>Job Location</th>
                            <th style={{fontWeight:'bold'}}>Application Deadline</th>
                            <th style={{fontWeight:'bold'}}>Date Posted</th>
                            <th style={{fontWeight:'bold'}}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                       
                          {record.map((item,index)=>
                            <tr key={index}> 
                              <td>{index + 1}</td>
                              <td>{item.designation}</td>
                              <td>{item.department}</td>
                              <td>{item.job_location}</td>
                              <td>{moment(item.application_deadline).format('DD MMM YY')}</td>
                              <td>{moment(item.postDate).format('DD MMM YY')}</td>
                              <td>
                                <button class="btn btn-danger" onClick={(e)=>handleClickDelete(item._id)} >Delete</button>
                                <button class="btn btn-info" onClick={(e)=>handleClickUpdate(item._id)} >Update</button>
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

export default CreatedJobs
