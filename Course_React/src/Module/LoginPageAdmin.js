import ButtonField from "../Components/Button";
import TextBox from "../Components/TextBox";
import { Center,Grid,Card, PasswordInput ,Header,Text} from "@mantine/core";
import {  useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

function LoginAdmin(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [candidate,setCandidate]=useState([]);

    const emailfunc=(e)=>{
        setEmail(e.target.value);
    }
    const passfunc=(e)=>{
        setPassword(e.target.value);
    }
    const responseGoogle = (response) => {
        console.log(response);
        // You can handle the response data here, e.g., send it to your server.
      };
    //Googloe login function
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    const Validation=(e)=>{
        e.preventDefault();
        
        axios.post('https://localhost:44307/api/Admin/ValidatingAdmin',{
            email,
            password
        }).then((response)=>{
            console.log(response.data);
            localStorage.setItem("Authtoken",JSON.stringify(response.data.jwt));
            localStorage.setItem("Name",JSON.stringify(response.data.id.name));
            // localStorage.setItem("Admin",JSON.stringify(response.data));
            // localStorage.setItem("AdminId",JSON.stringify(response.data.id.adminId));
            navigate('/admin');
        }).catch(err=>{
            alert(err.response);
        });  
    }   
    // const GoogleLogin=(email)=>{
       
    //     axios.get(`https://localhost:44307/api/Admin/ValidatingAdminGoogle/${email}`
    //         ).then((response)=>{
    //         console.log(response.data);
    //         localStorage.setItem("Authtoken",JSON.stringify(response.data.jwt));
    //         localStorage.setItem("Name",JSON.stringify(response.data.id.name));
    //         // localStorage.setItem("Admin",JSON.stringify(response.data));
    //         // localStorage.setItem("AdminId",JSON.stringify(response.data.id.adminId));
    //         navigate('/admin');
    //     }).catch(err=>{
    //         alert(err.response.data);
    //     });  
    // } 
    return(
        <>
        <Header height={50} p="xs" style={{backgroundColor:'teal',display:'flex',alignItems:'center'}}>
        <Text component="a" href="/" style={{color:'whitesmoke',fontFamily:'inherit',fontWeight:'bolder',fontSize:'xx-large',textAlign:'left',textIndent:'50px',fontStyle:'italic'}}>CoursePedia</Text>
        </Header>
        <h2 style={{textAlign:'center',paddingTop:'5%'}}>Welcome Admin!!</h2>
        <Center>
            <Card withBorder radius="md"  style={{width:'28%',marginTop:'3%',boxShadow:'0 0 11px rgba(33,33,33,.2)'}}>
            <form  onSubmit={Validation}> 
                <Grid justify="center" align="center">
                <Grid.Col span={10}>
                    <TextBox type="text" label="Email" placeholder="Enter your Email Address" value={email} onChange={emailfunc}  required={true}/>
                </Grid.Col>
                <br/>
                <Grid.Col span={10}>
                    <PasswordInput  label="Password" placeholder="Enter your password" value={password} onChange={passfunc}   required={true}/>
                </Grid.Col>
                <br/>
                </Grid>
                <br/>
                <Center>
                    <ButtonField type="submit" color='teal'>Login</ButtonField>
                </Center>
            </form>
            <hr></hr>
            <Center>
            <GoogleLogin
             onSuccess={credentialResponse => {
              console.log(credentialResponse);
              const user = jwt_decode(credentialResponse.credential);
              console.log(user);
              axios.get(`https://localhost:44307/api/Admin/ValidatingAdminGoogle/${user.email}`
                      ).then((response)=>{
                      console.log(response.data);
                      localStorage.setItem("Authtoken",JSON.stringify(response.data.jwt));
                      localStorage.setItem("Name",JSON.stringify(response.data.id.name));
                      // localStorage.setItem("Admin",JSON.stringify(response.data));
                      // localStorage.setItem("AdminId",JSON.stringify(response.data.id.adminId));
                      navigate('/admin');
                  }).catch(err=>{
                      alert(err.response.data);
                  }); 

            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
            </Center>
           
        </Card>
        </Center>
        </>
        
        
    );
}

export default LoginAdmin;