import Nav from "../../../Components/Nav";
import { Table,Grid,TextInput } from '@mantine/core';
import { useState,useEffect } from "react";
import axios from 'axios';
import React from 'react';
import CourseModal from "../../../Components/Modal/Add Course Modal";
import DeleteModal from "../../../Components/Modal/Delete Modal";
import UpdateCourse from "../../../Components/Modal/UpdateCourse";

export default function ViewCourse(){
    const[course,setCourse]=useState([]);
    const[name,setName]=useState([]);

    const setNameFunc=(e)=>{
      setName(e.target.value);
     // console.log(e.target.value);
      getCourseBySearch(e.target.value);
    }
  
    const getCourseBySearch=(Name)=>{
      if(Name==""){
         Name="...";
      }
      axios.get(`https://localhost:44307/api/course/GetCourseByCategory/${Name}`,{
        headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('Authtoken'))}`
         }
      }).then((response)=>{
        setCourse(response.data);
          console.log(response.data);
       }).catch(err=>{alert(err.data);});
    }


    const getCourse=()=>{
      axios.get('https://localhost:44307/api/Course/GetCourse').then((response)=>{
        setCourse(response.data);
        console.log(response.data);
}).catch(err=>{alert(err.data);});
    }
    useEffect(()=>{ getCourse();},[]);


    if(course.length===0){
      return(
        <Nav>
        <p>No Courses were added still!!</p>
        <Grid>
        <Grid.Col span={2} style={{marginLeft:'48%',marginTop:'-4.5%'}}><CourseModal/></Grid.Col> 
        </Grid>
      </Nav>
      );   
    }
    else if(course.includes("No course with")){
      return(
          <>
          <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Course" value={name} onChange={setNameFunc}/>    
          <h3> {course}</h3> 
          </>
             
      ); 
  }
    else{
    const rows=course.map((element)=>(
        <tr key={element.courseId}>
        <td>{element.courseId}</td>
        <td>{element.courseName}</td>
        <td>{element.courseCategory}</td>
        <td>{element.price}</td>
        <td>{element.durationInHours}</td>
        <td>{element.admin.name}</td>
        {/* <td>{element.courses.totalparticipant}</td> */}
        <td>{element.time}</td>
        <td>{element.weekday}</td>
        <td>{new Date(element.startdate).getFullYear()+"-"+new Date(element.startdate).getMonth()+"-"+new Date(element.startdate).getDate()}</td>
        <td>{new Date(element.enddate).getFullYear()+"-"+new Date(element.enddate).getMonth()+"-"+new Date(element.enddate).getDate()}</td>
        <td>{new Date(element.createdAt).getFullYear()+"-"+new Date(element.createdAt).getMonth()+"-"+new Date(element.createdAt).getDate()}</td>
        <td>{element.description}</td>
        <td>{element.imageLink}</td>
        {/* <td>{element.courses.updatedAt}</td> */}
        <td><UpdateCourse id= {element.courseId} /></td>
      </tr>

    ));
        return(
            <Nav>
              <Grid>
              <Grid.Col span={2} style={{marginLeft:'65%'}}><CourseModal/></Grid.Col>
              <Grid.Col span={2}  >
               <DeleteModal label='Course Id' placeholder='Enter the Course Id' title="Delete Course">
              </DeleteModal>
          </Grid.Col>
              </Grid>
        
        <hr/>
        <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Course" value={name} onChange={setNameFunc}/>           
        <Table horizontalSpacing="xs" striped >
        <thead>
          <tr>
            <th>Course Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Admin </th>
            {/* <th>Total Participants</th> */}
            <th>Time</th>
            <th>Week Day</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Created At</th>
            <th>Description</th>
            <th>ImageLink</th>
            {/* <th>Updated At</th> */}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        </Table>
        <br/><br/>
        <hr/>
        </Nav>
      );
    }
}