import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

const Styles = (theme) => ({
  CardStyle: {
    overflow: "initial",
    maxWidth: "500px",
    borderRadius: "10px",
    fontFamily: "Roboto",
    "& .imgsection": {
      backgroundColor: "#eefde2",
      borderRadius: "10px 10px 0px 0px",
    },
    "& .firstsection": {
      backgroundColor: "#eefde2",
    },
    "& .imgsectionDis": {
      backgroundColor: "#f7f7fb",
      borderRadius: "10px 10px 0px 0px",
    },
    "& .firstsectionDis": {
      backgroundColor: "#f7f7fb",
    },
    "& .cashbackDis": {
      "& span": {
        fontWeight: "700",
        borderRadius: "5px",
        backgroundColor: "#b2b2b2",
        padding: "0px 5px 0px 5px",
        margin: "0px 5px 0px 5px",
        color: "#fff",
      },
    },
    "& .cashbackEn": {
      "& span": {
        fontWeight: "700",
        borderRadius: "5px",
        backgroundColor: "#00a86b",
        padding: "0px 5px 0px 5px",
        margin: "0px 5px 0px 5px",
        color: "#fff",
      },
    },

    "& .card1": {
      maxHeight: "150px",
      marginTop: "-50px",
    },
    "& .percent": {
      "& p": {
        fontSize: "3rem",
        fontWeight: 900,
        color: "#4643ee",
      },
    },

    "& .progressbar": {
      minHeight: "10px",
      borderRadius: "5px",
      backgroundColor: "#eee",
      "& div": {
        backgroundImage: "linear-gradient(180deg,#00db8c,#00a86b)",
      },
    },
    "& .cardlist": {
      listStyle: "none",
      margin: "0",
      padding: "0",
      fontWeight: "600",
      fontSize: "1.25rem",
      fontFamily: "LetteraTextLL",
      textAlign: "left",
      alignSelf: "center",
      "& li": {
        padding: "10px 0px 10px 0px",
        display: "flex",
        [theme.breakpoints.down("md")]: {
          fontWeight: "initial",
          fontSize: "1.5rem",
        },
      },
    },
    "& .tick": {
      padding: "0px 10px 0px 0px",
      color: "#ccc",
    },
    "& .tickGreen": {
      padding: "0px 10px 0px 0px",
      color: "#00a86b",
    },
    "& .listtext": {
      fontWeight: "500",
      fontSize: "1rem",
      fontFamily: "LetteraTextLL",
      color: "#767676",
    },
    "& .lastsection": {
      backgroundColor: "#c2f6e3",
      borderRadius: "0px 0px 10px 10px",
      "& div": {
        alignItems: "flex-end",
        display: "flex",
      },
      "& .strikeText": {
        textDecoration: "line-through",
      },
    },
    "& .lastsectionDis": {
      backgroundColor: "#f7f7fb",
      borderRadius: "0px 0px 10px 10px",
      "& div": {
        alignItems: "flex-end",
        display: "flex",
      },
      "& .line3style": {
        color: "#f7f7fb",
      },
      "& .strikeText": {
        textDecoration: "line-through",
      },
    },
    "& .spots-left1": {
      color: "#767676",
      fontWeight: "400",
      fontSize: "0.875rem",
      "& span": {
        color: "#00a86b",
        fontSize: "0.875rem",
        fontWeight: "700",
      },
    },
    "& .spots-left2": {
      color: "#767676",
      fontWeight: "400",
      fontSize: "0.75rem",
    },
    "& .signup": {
      border: "1px solid #4643ee",
      padding: "10px",
      fontSize: "1.25rem",
      textAlign: "center",
      borderOpacity: "1",
      backgroundColor: "#4643ee",
      color: "#fff",
      width: "100%",
      height: "3.75rem",
      borderRadius: "10px",
      textTransform: "none",
      fontWeight: "700",
      fontFamily: "LetteraTextLL",
      "&:hover": {
        backgroundColor: "#0f52ba",
      },
    },
    "& .signUpDis": {
      padding: "10px",
      fontSize: "1.25rem",
      textAlign: "center",
      borderOpacity: "1",
      backgroundColor: "#b2b2b2",
      color: "#fff",
      width: "100%",
      height: "3.75rem",
      borderRadius: "10px",
      textTransform: "none",
      fontWeight: "700",
      fontFamily: "LetteraTextLL",
    },
  },
});

class CustomCard extends React.Component {
  componentDidMount() {
    console.log(this.props.cardText);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.CardStyle}>
        <Box
          
          className={this.props.buttonDisabled ? "imgsectionDis" : "imgsection"}
        >
          <Box display="flex" justifyContent="center">
            <img
              src={
                this.props.cardNo === "1"
                  ? Card1
                  : this.props.cardNo === "2"
                  ? Card2
                  : Card3
              }
              className="card1"
              alt="card"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          className={
            this.props.buttonDisabled ? "firstsectionDis" : "firstsection"
          }
          pb={3}
        >
          <Box>
            <Typography>{this.props.cardName} </Typography>
          </Box>
          <Box className="percent">
            <Typography>{this.props.percent}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            className={this.props.buttonDisabled ? "cashbackDis" : "cashbackEn"}
          >
            <span>{this.props.cashback}</span>
            <Typography>cash back </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="center" p={4}>
          {this.props.buttonDisabled ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box className="spots-left1">
                {this.props.spots}
                {" spots"}
              </Box>
              <Box className="spots-left2">{this.props.spots} spots left</Box>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box className="spots-left1">
                <span>2220</span> / 2500 spots
              </Box>
              <Box className="spots-left2">280 spots left</Box>
            </Box>
          )}

          <Box mt={3}>
            <LinearProgress
              className="progressbar"
              variant="determinate"
              value={this.props.buttonDisabled ? "0" : "85"}
            />
          </Box>
          <Box mt={3}>
            <Button
              className={this.props.buttonDisabled ? "signUpDis" : "signup"}
            >
              {this.props.buttonText}
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box p={4}>
          <Box
            color="#b2b2b2"
            fontWeight="500"
            fontFamily="LetteraTextLL"
            fontSize="1.125rem"
            letterSpacing="0.25rem"
          >
            INCLUDES
          </Box>
          <Box>
            <ul className="cardlist">
              {this.props.cardText.map((e) => {
                return (
                  <li>
                    <CheckIcon
                      className={
                        this.props.buttonDisabled ? "tick" : "tickGreen"
                      }
                    />
                    {e}
                  </li>
                );
              })}
            </ul>
          </Box>
          <Box>
            <Typography className="listtext">
              Fund your account with a minimum opening deposit of{" "}
              <b>${this.props.minDep}</b>. <b>{this.props.addFee} </b>{" "}
              additional free ATM withdrawals per month from out of network
              ATMs.
            </Typography>
          </Box>
        </Box>
        {this.props.buttonDisabled ? (
          <Box p={4} className="lastsectionDis">
            <Box
              fontSize="1rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
              color="#b2b2b2"
            >
              <MonetizationOnOutlinedIcon className={"tick"} />
              <div className={this.props.strike ? "strikeText" : ""}>
                {this.props.line1} Membership Fee
              </div>
            </Box>
            <Box
              color="#b2b2b2"
              fontSize="1.5rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
            >
              {this.props.line2}
            </Box>
            <Box
              color="#b2b2b2"
              fontSize="1rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
              className="line3style"
            >
              {this.props.line3}
            </Box>
          </Box>
        ) : (
          <Box p={4} className="lastsection">
            <Box
              fontSize="1rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
              color="#000"
              textDecoration="line-through"
            >
              <MonetizationOnOutlinedIcon className={"tickGreen"} />
              <div className={this.props.strike ? "strikeText" : ""}>
                {this.props.line1} Membership Fee
              </div>
            </Box>
            <Box
              color="#068758"
              fontSize="1.5rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
            >
              {this.props.line2}
            </Box>
            <Box
              color="#068758"
              fontSize="1rem"
              fontWeight="600"
              fontFamily="LetteraTextLL"
            >
              {this.props.line3}
            </Box>
          </Box>
        )}
      </Card>
    );
  }
}

export default withStyles(Styles)(CustomCard);
