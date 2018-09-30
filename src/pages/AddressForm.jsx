import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="fathersName"
              name="fathersName"
              label="Father's name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mothersName"
              name="mothersName"
              label="Mother's name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="city" name="city" label="City" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Phone number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Alternate phone number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="zip" name="zip" label="Class" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Age"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input type="file" required onChange={this.fileSelectedHandler} />
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
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;
