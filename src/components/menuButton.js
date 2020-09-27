import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/styles";

const Styles = (theme) => ({
  root:{
    fontFamily: "Roboto",
  },
    buttonText:{
        fontWeight: "500",
        fontFamily: "16px LetteraTextLL",
        cursor:"pointer",
        color:"#767676",
        "&:hover":{
            color:"#000"
        }
    }
})

class MenuButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const listItems = this.props.items.map((link) => (
      <MenuItem onClick={this.handleClose}>{link}</MenuItem>
    ));

    return (
      <div className={classes.root}>
        <span
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          className={classes.buttonText}
        >
            {this.props.text}
        </span>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          onClose={this.handleClose}
        >
          {listItems}
        </Menu>
      </div>
    );
  }
}

export default withStyles(Styles)(MenuButton);