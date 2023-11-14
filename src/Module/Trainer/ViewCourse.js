
import { Table,TextInput } from '@mantine/core';
import { useState,useEffect } from "react";
import axios from 'axios';
import React from 'react';
import NavTrainer from '../../Components/NavTrainer';
import ViewCourse from '../Admin/Course/View Course';

export default function ViewCourseTrainer(){
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
        localStorage.setItem("TotalCourse",course.length);
}).catch(err=>{alert(err.data);});
    }
    useEffect(()=>{ getCourse();},[]);

    if(course.length===0){
      return(
        <NavTrainer>
        <p>No Courses were added still!!</p>
      </NavTrainer>
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
        
        <td>{element.courseName}</td>
        <td>{element.courseCategory}</td>
        <td>{element.price}</td>
        <td>{element.durationInHours}</td>
        <td>{element.time}</td>
        <td>{element.weekday}</td>
        <td>{new Date(element.startdate).getFullYear()+"-"+new Date(element.startdate).getMonth()+"-"+new Date(element.startdate).getDate()}</td>
        <td>{new Date(element.enddate).getFullYear()+"-"+new Date(element.enddate).getMonth()+"-"+new Date(element.enddate).getDate()}</td>

      </tr>

    ));
        return(
        <NavTrainer> 
        <hr/>
        <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Course" value={name} onChange={setNameFunc}/>           
        <Table horizontalSpacing="xs" striped >
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Time</th>
            <th>Week Day</th>
            <th>Start date</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        </Table>
        <br/><br/>
        <hr/>
        </NavTrainer>
      );
    }
}