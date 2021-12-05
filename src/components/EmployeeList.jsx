import React, { useState , useEffect} from "react";

import { useHistory } from "react-router";

import {
  Grid,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

import APIServices from "../APIServices";



const EmployeeList = () => {

  const history = useHistory();

  const [data,setData]=useState([]);

  useEffect(()=>{
    getEmployees();
  },[])
 
  const getEmployees = async()=>{
    const res= await APIServices.getEmployees();
    if(res.status===200){
      setData(res.data);
    }
  }
 
  const addEmployee =()=>{
    history.push("/AddEmployee", {params: null})
  }

  const handleUpdateEmployee=(id)=>{
    history.push("/AddEmployee", {params: id});
  }

  const handleViewEmployee =(firstName, lastName,emailId)=>{
    const setDetails= {fname:firstName, lname:lastName, email:emailId}; 
    history.push("/ViewEmployee", {params: setDetails});    
  }

  const handleDeleteEmployee = async(id)=>{
    if(window.confirm("Are you sure that you wanted to delete that use record?")){
        const res= await APIServices.deleteEmployee(id);
        if(res.status===200){
            getEmployees();
        }        
    } 
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{ padding: "0.5rem 8rem 1rem 8rem"}}
      xs={12}
    >
      <Grid 
        container 
        justifyContent="center" 
        xs={12}
      >
        <Box mb={3}>
          <Typography>
            <h2>Employee List</h2>
          </Typography>
        </Box>
      </Grid>
      <Grid 
        container
        alignContent="center"
        xs={12}
        lg={9}
      >
        <Grid 
          container 
          item 
          justifyContent="flex-start" 
          xs={12}
        >
          <Button variant="contained" onClick={addEmployee}>
            <Typography>Add Employee</Typography>
          </Button>
        </Grid>
        <Grid 
          container
          style={{marginTop: "2rem"}} 
          xs={12}
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow style={{backgroundColor: "#E5E7E9" }}>
                  <TableCell width="20%">
                    <Typography>Employee First Name</Typography>
                  </TableCell>
                  <TableCell  width="20%" >
                    <Typography>Employee Last Name</Typography>
                  </TableCell>
                  <TableCell  width="20%" >
                    <Typography>Employee Email ID</Typography>
                  </TableCell>
                  <TableCell  width="40%" >
                    <Typography>Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width="20%" component="th" scope="row">
                     <Typography>{row.firstName}</Typography>
                    </TableCell>
                    <TableCell width="20%"><Typography>{row.lastName}</Typography></TableCell>
                    <TableCell width="20%"><Typography>{row.emailId}</Typography></TableCell>
                    <TableCell width="40%">                     
                      <Button  
                        style={{marginRight:"10px", color: "white", backgroundColor: "#009688"}}
                        onClick={()=>handleUpdateEmployee(row._id)}>
                        <Typography>Update</Typography>
                      </Button>                      
                      <Button 
                        style={{marginRight:"10px", color: "white", backgroundColor: "#ef5350"}}
                        onClick={()=>handleDeleteEmployee(row._id)}
                      >
                        <Typography>Delete</Typography>
                      </Button>                                      
                      <Button 
                        style={{marginRight:"10px", color: "white", backgroundColor: "#0288d1"}}
                        onClick={()=>handleViewEmployee(row.firstName, row.lastName, row.emailId)}
                      >
                        <Typography>View</Typography>
                      </Button>                                          
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EmployeeList;
