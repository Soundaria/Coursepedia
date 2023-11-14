import { useState,useEffect } from "react";
import axios from 'axios';
import { Grid,Modal,Card,Button,Badge,ActionIcon,Group,TextInput} from "@mantine/core";
import CourseCard from "../../Components/CourseCard";
import { useDisclosure } from "@mantine/hooks";
import ButtonField from "../../Components/Button";
import { Filter ,SortAscendingLetters} from 'tabler-icons-react';
import styles from './Coursecard.module.css';

export default function Courses(props){
    const [opened, { open, close }] = useDisclosure(false);
    const[course,setCourse]=useState([]);
    //const colours = ['burlywood','cadteblue','darkcyan','darkgoldenrod','darkolivegreen','darkslategrey','lightblue','lavendar','lightgreen','tan','thistle'];
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
        }).catch(err=>{alert(err.data);});
    }

    useEffect(()=>{ getCourse();},[]);

    // const getAscCourse=()=>{
    //     axios.get('https://localhost:44307/api/Course/GetCoursebyAscName').then((response)=>{
    //       //setCourse(response.data);
    //       }).catch(err=>{alert(err.data);console.log(err)});
    //   }
  
    //   useEffect(()=>{ getAscCourse();},[]);

    const enroll=(e)=>{
        //console.log(e);
        axios.post(`https://localhost:44307/api/CandidateCourse/AddCoursetoCandidate/${JSON.parse(localStorage.getItem("CandidateId"))}`,{
            "courseId":e
        }).then((response)=>{
            //console.log(response.data);
        }).catch(err=>{
            //console.log(err.response.data);
            alert(err.response.data);
        });
    }


     if(course.length===0){
        return(
            <h3>No courses to display!!</h3>
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
    return(
<>
        <Modal opened={opened} onClose={close}  >
          <Card withBorder shadow='lg'>
          <center>
          <p>Course Enrolled Successfully!!</p>
          <p>Do the payment for the activation of course..</p>
          <h4>Happy Learning!!</h4>
          </center>
          </Card>  
        </Modal>
        <TextInput  variant="filled"  size='md'  radius="md" placeholder="Search Course" value={name} onChange={setNameFunc}/>           
            <Grid  gutter="xl"  style={{paddingLeft:'10px',paddingTop:'25px',width:'100%'}}>
                {
                    course.map((data,index)=>{
                        //let ind=Math.floor(Math.random() * colours.length);
                         
                        const date = new Map([
                            [0, "Jan"],[1, "Feb"],[2, "Mar"],[3, "Apr"],[4, "Mar"],[5, "Jun"],
                            [6, "Jul"],[7, "Aug"],[8, "Sep"],[9, "Oct"],[10, "Nov"],[11, "Dec"]        
                          ]);
                        const start=data.startdate;
                        const end=data.enddate;
                        // console.log(start);
                        // console.log(new Date(start).getMonth());
                        const registration=date.get(new Date(start).getMonth())+" "+new Date(start).getDate()+","+new Date(start).getFullYear()+" - "+date.get(new Date(end).getMonth())+" "+new Date(end).getDate()+","+new Date(end).getFullYear();
                        return(
                            <Grid.Col span={3}  className={styles.Card}>
                                <CourseCard badge="Active" price={data.price} duration={ data.durationInHours} day={data.weekday} startdate={registration}  time={data.time} title= {data.courseName}  >
                                    <Button variant="light" color="teal" fullWidth mt="md" radius="md" onClick={ e=> {open(); enroll(data.courseId);}} style={{fontSize:"15px"}}>
                                        Enroll
                                    </Button>
                                </CourseCard>
                            </Grid.Col>
                        );
                    })
                }
            </Grid>
        </>
    );
}
}