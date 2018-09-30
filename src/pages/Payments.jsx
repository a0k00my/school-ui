import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Payments extends Component {
  state = {
    name: "",
    class_sec: "",
    rollno: "",
    month: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1" align="left">
          Searh for payments
        </Typography>
        <br />
        <br />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          id="outlined-name"
          label="Class"
          className={classes.textField}
          value={this.state.class_sec}
          onChange={this.handleChange("class_sec")}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          id="outlined-name"
          label="Roll-no"
          className={classes.textField}
          value={this.state.rollno}
          onChange={this.handleChange("rollno")}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          id="outlined-name"
          label="Month"
          className={classes.textField}
          value={this.state.month}
          onChange={this.handleChange("month")}
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="contained" className={classes.button}>
          {" "}
          Reset{" "}
        </Button>
        <Button variant="contained" className={classes.button}>
          {" "}
          Search{" "}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Payments);
