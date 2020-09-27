import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import logo from "../images/logo.png";


import { withStyles } from "@material-ui/styles";

const Styles = (theme) => ({
    logo:{
        maxHeight:"30px",
        marginTop:"10px"
    },
  buttonText: {
    fontWeight: "500",
    fontFamily: "16px LetteraTextLL",
    cursor: "pointer",
    color: "#767676",
    "&:hover": {
      color: "#000",
    },
  },
  listStyle: {
    "& .loginbtn": {
      border: "1px solid #4643ee",
      fontSize: "1rem",
      borderOpacity: "1",
      backgroundColor: "#fff",
      color: "#4643ee",
      width: "100%",
      height: "2.5rem",
      borderRadius: "10px",
      textTransform: "none",
      fontWeight: "700",
    },
    "& .home":{
        color:"#FF66FF",
    },
    "& .signupbtn": {
      border: "1px solid #4643ee",
      fontSize: "1rem",
      borderOpacity: "1",
      backgroundColor: "#4643ee",
      color: "#fff",
      width: "100%",
      height: "2.5rem",
      borderRadius: "10px",
      textTransform: "none",
      fontWeight: "700",
      "&:hover": {
        backgroundColor: "#0f52ba",
      },
    },
    "& .sublist": {
      color: "#767676",
      paddingLeft: "20px",
      fontSize: "1rem",
    },
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
    };
  }

  handleClick = (index) => {
    if (this.state.index === index) {
      this.setState({
        index: null,
      });
    } else {
      this.setState({
        index,
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <img src={logo} className={classes.logo} alt="logo" />
          </ListSubheader>
        }
        className={classes.listStyle}
      >
        <ListItem className="home">
          <ListItemText primary="Home" />
        </ListItem>
        {this.props.drawerMenuItemData.map((item, index) => {
          return (
            <List>
              <ListItem
                key={index}
                button
                onClick={() => {
                  this.handleClick(index);
                }}
              >
                {/* <ListItemIcon>
                  <item.icon />
                </ListItemIcon> */}
                <ListItemText primary={item.title} />
                {index === this.state.index ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={index === this.state.index}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" className="sublist">
                  {item.submenu.map((sub, index) => {
                    return (
                      <ListItem button>
                        <ListItemText primary={sub} />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          );
        })}
        '
        <ListItem>
          <Button className="loginbtn">Login</Button>
        </ListItem>
        <ListItem>
          <Button className="signupbtn">Signup</Button>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(Styles)(NavBar);
