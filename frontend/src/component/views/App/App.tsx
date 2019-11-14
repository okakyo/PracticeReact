import React from 'react';
import './App.css';
import ImageIcon from '../../../logo.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid,Typography,CardContent, Button,Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';


import Slide from '@material-ui/core/Slide';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class  App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <CssBaseline>
          <Box m={4} >
          <Container maxWidth="md">
            <Slide direction="right">
              <Card >
                <Grid  container direction="column" alignItems="center" justify="center">
                <img  src={ImageIcon}/>
                <CardContent>
                <ExpansionPanel elevation={0}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography  color="textSecondary" gutterBottom>
                    岡　恭平 
                  </Typography>

                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                  
                </CardContent>
                
                </Grid>
              </Card>
              </Slide>
              <Box m= {2}>
              <Grid item xs={12} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button>Full</Button>
                  <Button>width</Button>
                  <Button>Group</Button>
                </ButtonGroup>
              </Grid>
              </Box>
          </Container>
          
          </Box>
      </CssBaseline>
    </React.Fragment>
    );
  };
}


