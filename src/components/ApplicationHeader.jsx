import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

class ApplicationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: null
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showBar = () => {
    this.setState({ show: "bar", open: false });
  };

  showFoo = () => {
    this.setState({ show: "foo", open: false });
  };
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              School Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title="AppBar" color="default" />
          <MenuItem id="showFooId" onClick={this.showFoo}>
            ## CLOSE MENU ##
          </MenuItem>
          <MenuItem id="showBarId" onClick={this.showBar}>
            Student details
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default ApplicationHeader;
