import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Student from "../model/Student";
import Button from "@material-ui/core/Button";

class AddressForm extends Component {
  state = {
    student: new Student(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ),
    file: null
  };

  constructor(props) {
    super(props);
    this.initialState = { ...this.state };
  }

  change = event => {
    const value = event.target.value;
    const stud = { ...this.state.student };
    stud[event.target.name] = value;
    this.setState({ student: stud });
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });

    const value = event.target.value;
    const stud = { ...this.state.student };
    stud[event.target.name] = value;
    this.setState({ student: stud });
  };

  save = event => {
    this.props.saved.call(this, this.state.student);
    this.setState(this.initialState);
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="fname"
              name="fname"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lname"
              name="lname"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="fathername"
              name="fathername"
              label="Father's name"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mothername"
              name="mothername"
              label="Mother's name"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="pin"
              name="pin"
              label="Zip / Postal code"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone number"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="altphonenumber"
              name="altphonenumber"
              label="Alternate phone number"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="classs"
              name="classs"
              label="Class"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="age"
              name="age"
              label="Age"
              fullWidth
              onChange={this.change}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              type="file"
              required
              id="photo"
              name="photo"
              onChange={this.fileSelectedHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={this.state.file} width={250} height={270} mode="fit" />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="All the details are correct ?"
            />
          </Grid>
          <Grid item xs={12} />
          <Button variant="contained" color="primary" onClick={this.save}>
            SAVE
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;
