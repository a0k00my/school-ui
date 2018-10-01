import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  },
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Amit Kumar", 6, 101, "May", 5),
  createData("Ram sharma", 6, 101, "June", 4),
  createData("Babu Dokhla", 7, 101, "June", 4),
  createData("Rustam alam", 9, 101, "June", 4),
  createData("Asif khan", 9, 101, "June", 4),
  createData("Umesh yadav", 8, 101, "June", 4),
  createData("Kashmira kumari", 10, 102, "June", 4)
];

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
        <br />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>Class</TableCell>
                <TableCell numeric>Roll No.</TableCell>
                <TableCell numeric>Fees paid till</TableCell>
                <TableCell numeric>Pending month fees</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow className={classes.row} key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Payments);
