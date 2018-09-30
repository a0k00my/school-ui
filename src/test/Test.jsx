import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Test extends Component {
  render() {
    return (
      <Grid>
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Welcome to Avanti bai school
          </Typography>
          <br />
        </Paper>
        <br />
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Our Future
          </Typography>
          <br />
        </Paper>
        <br />
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Our Mission
          </Typography>
          <br />
        </Paper>
        <br />
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Sucess Story
          </Typography>
          <br />
        </Paper>
        <br />
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Gallery
          </Typography>
          <br />
        </Paper>
        <br />
        <Paper>
          <br />
          <Typography variant="display1" align="center">
            Our Contact
          </Typography>
          <br />
        </Paper>
      </Grid>
    );
  }
}

export default Test;
