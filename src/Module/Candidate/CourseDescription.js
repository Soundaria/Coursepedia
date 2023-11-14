
import { Header,Text } from "@mantine/core";


export default function CourseDescription(link){
    let desclink="\""+link+"\"";
    console.log(link);
return(
    <>
    <Header height={50} p="xs" style={{backgroundColor:'teal',display:'flex',alignItems:'center'}}>
    <Text component="a" href="/" style={{color:'whitesmoke',fontFamily:'inherit',fontWeight:'bolder',fontSize:'xx-large',textAlign:'left',textIndent:'50px',fontStyle:'italic'}}>CoursePedia</Text>
    </Header>
     <iframe src={desclink} style={{height:"32.3rem",width:"99.7%"}} ></iframe>
    </>
);
}