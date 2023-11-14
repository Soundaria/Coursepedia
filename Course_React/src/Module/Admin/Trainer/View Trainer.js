import Nav from "../../../Components/Nav";
import { Table,Grid,Textarea, TextInput } from '@mantine/core';
import { useState,useEffect } from "react";
import axios from 'axios';
import React from 'react';
import TrainerModal from "../../../Components/Modal/Add Trainer Modal";
import DeleteModal from "../../../Components/Modal/Delete Modal";


export default function ViewTrainer(){

  const[trainer,setTrainer]=useState([]);
  //const[searchTrainer,setSearchTrainer]=useState([]);
  const[name,setName]=useState([]);

  const setNameFunc=(e)=>{
    setName(e.target.value);
   // console.log(e.target.value);
    getTrainerBySearch(e.target.value);
  }

    const getTrainer=()=>{
    axios.get('https://localhost:44307/api/Trainer/GetTrainer',{
      headers:{
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem('Authtoken'))}`,
       }
    }).then((response)=>{
      setTrainer(response.data);
      console.log(response.data);
     }).catch(err=>{alert(err.data);});
   }
    useEffect(()=>{ getTrainer();},[]);

   
    const getTrainerBySearch=(Name)=>{
      if(Name==""){
         Name="...";
      }
      axios.get(`https://localhost:44307/api/Trainer/search/${Name}`,{
        headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('Authtoken'))}`
         }
      }).then((response)=>{
        setTrainer(response.data);
          console.log(response.data);
       }).catch(err=>{alert(err.data);});
    }
    //useEffect(()=>{ getTrainerBySearch();},[]);

    if(trainer.length===0){
      return(
          <Nav>
             <Grid>
             <p>No Trainer were added still!!</p>
             <Grid.Col span={4}><TrainerModal/></Grid.Col>
            </Grid>
            
          </Nav>
      );
    }
    else if(trainer.includes("No trainer with")){
      return(
          <>
          <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Trainer" value={name} onChange={setNameFunc}/>    
          <h3> {trainer}</h3> 
          </>
             
      ); 
  }
    else{
    const rows = trainer.map((element) => (

        <tr key={element.trainerId}>
          <td>{element.trainerId}</td>
          <td>{element.name}</td>
          <td>{element.contact}</td>
          <td>{element.email}</td>
          <td>{element.address}</td>
          <td>{element.qualification}</td>
          <td>{element.yearOfExperience}</td>
          <td>{element.admin.name}</td>
          <td>{new Date(element.createdAt).getFullYear()+"-"+new Date(element.createdAt).getMonth()+"-"+new Date(element.createdAt).getDate()}</td>
          {/* <td>{element.trainee.updatedAt}</td> */}
        </tr>
      ));

        return(
            <Nav>
            <Grid>
            <Grid.Col span={1} style={{marginLeft:'70%'}}><TrainerModal/></Grid.Col>
            <Grid.Col span={2}>
              <DeleteModal label='Trainer Id' placeholder='Enter the Trainer Id' title="Delete Trainer">
              </DeleteModal>
            </Grid.Col>
            </Grid>
            <hr/>
            <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Trainer" value={name} onChange={setNameFunc}/>           
            <Table horizontalSpacing="xs" striped >
            <thead>
              <tr>
                <th>Trainer Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
                <th>Qualification</th>
                <th>Years of Experience</th>
                <th>Admin Name</th>
                <th>Created At</th>
                {/* <th>Updated At</th> */}
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