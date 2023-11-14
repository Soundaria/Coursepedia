
import Nav from "../../../Components/Nav";
import { Table,TextInput } from '@mantine/core';
import { useState ,useEffect} from "react";
import axios from 'axios';
import React from 'react';


export default function ViewCandidate(){
    const [candidate,setCandidate]=useState([]);
    const[name,setName]=useState([]);

    const setNameFunc=(e)=>{
      setName(e.target.value);
     // console.log(e.target.value);
      getCandidateBySearch(e.target.value);
    }

    const getCandidateBySearch=(Name)=>{
      if(Name==""){
         Name="...";
      }
      axios.get(`https://localhost:44307/api/Candidate/search/${Name}`,{
        headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('Authtoken'))}`
         }
      }).then((response)=>{
        setCandidate(response.data);
          console.log(response.data);
       }).catch(err=>{alert(err.data);});
    }


    const getCandidate=()=>{
      axios.get('https://localhost:44307/api/Candidate/GetCandidate',{
        headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('Authtoken'))}`
        }
      }).then((response) => {
        setCandidate(response.data);
    }).catch(err=>{alert(err.data)});
  }
      useEffect(() => {getCandidate();}, []);

      if(candidate.length===0){
        return(
            <Nav>
              <p>No Candidates are added!!</p>
            </Nav>
        );
      }
      else{
      const rows = candidate.map((element) => (
        <tr key={element.candidateId}>
          <td>{element.candidateId}</td>
          <td>{element.name}</td>
          <td>{element.contact}</td>
          <td>{element.email}</td>
          <td>{element.address}</td>
          <td>{new Date(element.createdAt).getFullYear()+"-"+new Date(element.createdAt).getMonth()+"-"+new Date(element.createdAt).getDate()}</td>
          {/* <td>{ <td>{new Date(element.updatedAt).getFullYear()+"-"+new Date(element.updatedAt).getMonth()+"-"+new Date(element.updatedAt).getDate()}</td>}</td> */}
        </tr>
      ));

      return(
        <>
          <Nav>
          <hr/>
          <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Candidate" value={name} onChange={setNameFunc}/>           
          <Table horizontalSpacing="xs" striped >
          <thead>
            <tr>
              <th>Candidate Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Created At</th>
              {/* <th>Updated At</th> */}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          </Table>
        </Nav>
        </>
     );
   }
}