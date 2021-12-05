import React, { useState, useEffect} from "react";
import{Grid, Box, Typography, Button} from "@mui/material";
import {useLocation, useHistory } from "react-router";
import APIService from "../APIServices"; 

const AddEmployee = () =>{

  const history = useHistory();
  const location = useLocation();

  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [emailId,setEmailId]=useState();
  const [title,setTitle]= useState("Add Employee");

  const id = location.state.params;

  useEffect(()=>{
    if(id){
        APIService.getEmployeeById(id).then( (res) =>{
          let employee = res.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmailId(employee.emailId);          
        });
        setTitle("Update Employee");
    }
  },[])   

  const addEmployee = async(data)=>{
        
    const res=await APIService.createEmployee(data);
   
    console.log(res.data);
    if(res.data==='Employee added Successfully!'){       
      console.log(data); 
      setTimeout(()=> history.push("/"),500);
    }
    else {       
        console.log(res.data);
    }
  }  
  
  const handleFormSubmit =(e)=>{
    e.preventDefault(); 
    if(firstName && emailId && lastName){

      //Add Employee
      if(title==="Add Employee"){
        addEmployee({firstName, lastName, emailId})
      }
      
      //Update Employee
      else if(title==="Update Employee"){
        let employee = {firstName:firstName, lastName:lastName, emailId: emailId};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(id));

        APIService.updateEmployee(employee, id).then( res => {
            if(res.data==='Employee updated Successfully!'){  
                history.push('/');
            }      
        });
      }     
    }  
    setEmailId(null);
    setFirstName(null);
    setLastName(null);
  }

  const handleFirstName =(e)=>{
    setFirstName(e.target.value)
  }
  const handleLastName =(e)=>{
    setLastName(e.target.value)
  }
  const handleEmailId =(e)=>{
    setEmailId(e.target.value)
  }

  const handleCancel =()=>{
    history.push("/")
  }

  return(
    <Grid container xs={12} >
      <Grid lg={4}></Grid>
      <Grid
        container
        style={{backgroundColor:"#eeeeee", marginTop:"2rem", border:"3px solid #bdbdbd", borderRadius:"5px"}}
        justifyContent="center"
        xs={12}
        md={6}
        lg={4}
      > 
        <Grid
          container
          item
          style={{margin: "20px"}}
          justifyContent="center"
          xs={12}
        >
          <Typography style={{fontWeight:"600",fontSize: "1.5rem"}}>
            {title}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          
          xs={12}
        >          
          <form onSubmit={handleFormSubmit}  >
            <Grid container item xs={12}>
              <Box m={1}>
                <label style={{fontWeight:"470",fontSize: "1.2rem", width:"5rem"}}>
                  First Name
                </label>
              </Box>
            </Grid>
            <Grid>
              <input style={{border:"2px solid #778ca3", borderRadius:"3px",height:"2rem"}} type="text" placeholder="First Name" value={firstName} onChange={handleFirstName} required></input>
            </Grid>
            <Grid container item xs={12}>
              <Box m={1}>
                <label style={{fontWeight:"470",fontSize: "1.2rem"}}>
                  Last Name
                </label>
              </Box>
            </Grid>
            <Grid xs={12}>
              <input style={{border:"2px solid #778ca3", borderRadius:"3px", height:"2rem"}} type="text" placeholder="Last Name" value={lastName} onChange={handleLastName} required></input>
            </Grid>
            <Grid container item xs={12}>
              <Box m={1}>
                <label style={{fontWeight:"470",fontSize: "1.2rem"}}>
                  Email ID
                </label>
              </Box>
            </Grid>
            <Grid>
              <input style={{border:"2px solid #778ca3", borderRadius:"3px", height:"2rem"}} type="email" placeholder="Email Address" value={emailId} onChange={handleEmailId} required></input>
            </Grid>
            <Grid
              container
              justifyContent="center"
              style={{margin: "1.5rem 0.5rem"}}
              xs={12}
            >
              <Button  
                type="submit"
                style={{marginRight:"10px", color: "white", backgroundColor: "#009688"}}
              >
                <Typography> Save </Typography>
              </Button>
              <Button  
                style={{marginRight:"10px", color: "white", backgroundColor: "#ef5350"}}
                onClick={handleCancel}
              >
                <Typography>Cancel</Typography>
              </Button>
            </Grid>              
          </form>          
        </Grid>          
      </Grid>
      <Grid lg={4}></Grid>
    </Grid>
  );
}
export default AddEmployee;
