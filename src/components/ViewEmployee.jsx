import React from "react";
import { Card, CardContent, Typography, Grid, Button} from "@mui/material";
import { useLocation, useHistory } from "react-router";


const ViewEmployee = () =>{

  const location = useLocation();
  const history = useHistory();

  const {fname,lname,email} = location.state.params;

    const handleBack =()=>{
       history.push("/")
    }

  return(
    <Grid container alignContent="center" xs={12}>
      <Grid lg={4}></Grid>
        <Grid
          container
          style={{ marginTop:"2rem"}}
          xs={12}
          lg={4}
        > 
          <Card 
            sx={{ minWidth: 500 }}
            style={{backgroundColor:"#f5f5f5", marginTop: "2rem"}}
          >
            <CardContent >
              <Grid container justifyContent="center">
                <Typography style={{fontWeight:"600",fontSize: "1.5rem", marginBottom: "1.5rem"}}>
                  View Employee Details
                </Typography>
              </Grid>
              <Grid container spacing={3} xs={12} style={{margin:"0rem"}}>
                <Grid container item alignContent="flex-start"  xs={12}>
                  <Typography style={{fontWeight:"500",marginRight:"1rem"}}>
                  Employee First Name : 
                  </Typography>
                  <Typography> {fname} </Typography>
                </Grid>
                <Grid container item alignContent="flex-start"  xs={12}>
                  <Typography style={{fontWeight:"500", marginRight:"1rem"}}>
                  Employee Last Name :
                  </Typography>
                  <Typography>{lname} </Typography>
                </Grid>
                <Grid container item alignContent="flex-start"  xs={12}>
                  <Typography style={{fontWeight:"500", marginRight:"1rem"}}>
                  Employee Email ID :
                  </Typography>
                  <Typography> {email} </Typography>
                </Grid>
                <Grid container sx={12} justifyContent="center" style={{ marginTop: "2rem"}}>
                  <Button  
                    style={{marginRight:"10px", color: "white", backgroundColor: "#0288d1"}}
                    onClick={handleBack}
                  >
                    <Typography>Back</Typography>
                  </Button>
                </Grid>

              </Grid>            
            </CardContent>    
          </Card>
        </Grid>
      <Grid lg={4}></Grid>
    </Grid>
  );
}
export default ViewEmployee;
