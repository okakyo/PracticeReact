import React from 'react';
import './App.css';
import logo from '../../../logo.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid,Typography,CardContent, Fab,Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia  from '@material-ui/core/CardMedia';
export default class  App extends React.Component{

  render(){
    return (
      <React.Fragment>
        <CssBaseline>
          <Box m={4} >
          <Container maxWidth="md">
            
              <Card >
                <Grid  container direction="column" alignItems="center" justify="center">
                <CardContent>
                  <CardMedia image= {logo}/>
                  <Typography  color="textSecondary" gutterBottom>
                    岡　恭平 1997/ 6/22 生まれ　
                  </Typography>
                </CardContent>
                
                </Grid>
              </Card>
              <Box m= {2}>
                <Grid container spacing = {1}>
                  <Grid item><Fab color="secondary">こんにちは</Fab></Grid>
                  <Grid item><Fab  color="secondary">こんにちは</Fab></Grid>
                  <Grid item><Fab color="secondary">こんにちは</Fab></Grid>
                  
                </Grid>
              </Box>
          </Container>
          </Box>
      </CssBaseline>
    </React.Fragment>
    );
  };
}


