import React from "react";
import logo from "./images/logo.png";
import banner from "./images/banner.png";
import bankLogo from "./images/FDIC-logo.png";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import img1 from "./images/sequoia.png";
import img2 from "./images/polychain_capital.png";
import img3 from "./images/consensys.png";
import bonus from "./images/juno-apy-215.svg";
import flag from "./images/flag.png";
import Card from "./components/Card";
import MenuButton from "./components/menuButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Email from "@material-ui/icons/Email";
import NavBar from "./components/navBarList";

const Styles = (theme) => ({
  root: {
    padding: "10px",
    fontFamily: "Roboto",
  },
  drawerDiv: {
    minWidth: "300px",
  },
  containerAlign: {
    margin: "auto",
    maxWidth: "1300px",
  },
  appbarmob: {
    backgroundColor: "#fff",
    color: "#767676",
    
    "& img": {
      maxWidth: "100px",
    },
    "& div": {
      justifyContent: "space-between",
    },
   
  },
  appBar: {
    backgroundColor: "#fff",
    minHeight:"80px",
    "& .toolBar":{
     display:"contents"
    },
    "& .leftGrid": {
      color: "#767676",
      "& .logo": {
        maxHeight: "40px",
      },
      "& .alignment": {
        margin: "0px",
        padding: "0px",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "100%",
        fontWeight: "900",
        "& .home": {
          color: "#FF66FF",
        },
      },
    },
    "& .rightGrid": {
      justifyContent: "flex-end",
      "& .alignment": {
        margin: "0",
        padding: "0",
        listStyle: "none",
        display: "flex",
        "& li": {
          margin: "0px 10px 0px 10px",
          "& .loginbtn": {
            border: "1px solid #4643ee",
            fontSize: "1rem",
            borderOpacity: "1",
            backgroundColor: "#fff",
            color: "#4643ee",
            width: "7.5rem",
            height: "2.5rem",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "700",
          },
          "& .signupbtn": {
            border: "1px solid #4643ee",
            fontSize: "1rem",
            borderOpacity: "1",
            backgroundColor: "#4643ee",
            color: "#fff",
            width: "7.5rem",
            height: "2.5rem",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "700",
            "&:hover": {
              backgroundColor: "#0f52ba",
            },
          },
        },
      },
    },
  },

  section1: {
    marginTop: "80px",
    "& .banner": {
      maxWidth: "30rem",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      float: "right",
    },
    "& .leftGrid": {
      alignSelf: "center",
    },
    "& .flagBox": {
      "& img": {
        maxHeight: "20px",
      },
      [theme.breakpoints.down("md")]: {
        alignSelf: "center",
      },
    },
    "& .box1": {
      fontFamily: "Roboto",
      fontWeight: "700",
      textOpacity: "1",
      fontSize: "4rem",
      lineHeight: "1.11",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "2rem",
      },
    },
    "& .box2": {
      color: "#767676",
      fontFamily: "Roboto",
      fontSize: "1.5rem",
      fontWeight: "100",
      lineHeight: "1.5",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
    "& .flag": {
      color: "#767676",
      fontWeight: "500",
      lineHeight: "1.5",
      fontSize: "1rem",
    },
    "& .mailholder": {
      padding: "15px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      color: "#ccc",
      maxWidth: "600px",
      alignSelf: "flex-start",
      "& .joinbtn": {
        border: "1px solid #4643ee",
        fontSize: "1rem",
        borderOpacity: "1",
        backgroundColor: "#4643ee",
        color: "#fff",
        width: "7.5rem",
        height: "2.5rem",
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: "#0f52ba",
        },
      },
      [theme.breakpoints.down("md")]: {
        maxWidth:"fit-content"
      },
    },
  },
  section2: {
    marginTop: "50px",
    marginBottom: "100px",
    display: "flex",
    justifyContent: "center",
    "& img": {
      maxHeight: "50px",
    },
    "& .sec2": {
      color: "#373737",
      fontWeight: "500",
      fontSize: "1.125rem",
      lineHeight: "1.44",
      letterSpacing: "0.45rem",
      textAlign: "center",
      marginBottom: "20px",
    },
    "& .company-logo": {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
    },
  },
  section3: {
    marginTop: "50px",
    "& .rightGrid": {
      "& img": {
        maxWidth: "100%",
      },
    },
    "& .sec3box1": {
      color: "#4643ee",
      fontSize: "1.5rem",
      fontWeight: "700",
      textOpacity: "1",
      letterSpacing: "0",
    },
    "& .sec3box2": {
      fontSize: "3rem",
      fontWeight: "700",
      letterSpacing: "0",
      textOpacity: "1",
      [theme.breakpoints.down("md")]: {
        textAlign: "initial",
        fontSize: "1.5rem",
      },
    },
    "& .sec3box3": {
      fontSize: "1.125rem",
      lineHeight: "1.77",
      fontWeight: "400",
      letterSpacing: "0",
      textOpacity: "1",
      color: "#767676",
    },
  },
  section4: {
    marginBottom: "100px",
    "& .sec4box1": {
      fontSize: "3rem",
      lineHeight: "1.17",
      fontWeight: "700",
      [theme.breakpoints.down("md")]: {
        textAlign: "initial",
        fontSize: "1.5rem",
      },
    },
    "& .sec4box2": {
      fontSize: "1.5rem",
      lineHeight: "1.5",
      fontWeight: "400",
      color: "#767676",
      textAlign: "center",
      maxWidth: "50%",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
      },
    },
  },
  CardStyle: {
    overflow: "initial",
    borderRadius: "10px",
    "& .imgsection": {
      backgroundColor: "#c2f6e3",
      borderRadius: "10px 10px 0px 0px",
    },
    "& .firstsection": {
      backgroundColor: "#c2f6e3",
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
    "& .cashBack": {
      "& span": {
        fontWeight: "700",
        borderRadius: "5px",
        backgroundColor: "#00a86b",
        padding: "0px 5px 0px 5px",
        margin: "0px 5px 0px 5px",
        color: "#fff",
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
      fontSize: "1rem",
      textAlign: "left",
      alignSelf: "center",
      "& li": {
        padding: "10px 0px 10px 0px",
      },
    },
    "& .listtext": {
      fontWeight: "500",
      fontSize: "0.875rem",
      color: "#767676",
    },
    "& .lastsection": {
      backgroundColor: "#c2f6e3",
      borderRadius: "0px 0px 10px 10px",
    },
    "& .spots-left1": {
      color: "#767676",
      fontWeight: "400",
      fontSize: "0.875rem",
      "& span": {
        color: "#00a86b",
        fontSize: "1.25rem",
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
    },
  },
  tabStyle: {
    marginBottom: "50px",
    letterSpacing: "0.25rem",
    justifyContent: "center",
    "& .tabpanel": {
      display: "flex",
      justifyContent: "center",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

class homePage extends React.Component {
  constructor(props) {
    super(props);
    this.card1text = [
      "Charcoal Black Metal Card",
      "2.15%1 Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support",
    ];
    this.card2text = [
      "Free Debit Card",
      "1.65%2 Bonus Rate Checking Account",
      "4% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support",
    ];
    this.card3text = [
      "Free Debit Card",
      "1.15%3 Bonus Rate Checking Account",
      "3% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support",
    ];
    this.drawerData = [
      {
        title: "Company",
        submenu: ["About", "Newsroom", "Careers", "Partners"],
      },
      {
        title: "Learn",
        submenu: ["Blog", "Guides", "Help Center"],
      },
      {
        title: "Legal",
        submenu: ["Privacy Policy", "Terms of Use", "Trademarks"],
      },
    ];

    this.state = {
      value: 0,
      sideBarOpen: false,
    };
  }

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      sideBarOpen: open,
    });
  };

  openSideBar = () => {
    this.setState({
      sideBarOpen: true,
    });
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      value: index,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <AppBar position="fixed" className={classes.appbarmob}>
            <Toolbar >
              <img src={logo} />
              <MenuIcon onClick={this.openSideBar} />
            </Toolbar>
          </AppBar>
        </Hidden>

        <Hidden mdDown>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className="toolBar">
              <Container className={classes.containerAlign}>
                <Grid container>
                  <Grid item container md={6} className="leftGrid">
                    <Grid item md={4}>
                      <img src={logo} className="logo" />
                    </Grid>
                    <Grid item md={8}>
                      <ul className="alignment">
                        <li className="home">Home</li>

                        <li>
                          <MenuButton
                            text="Company"
                            items={["About", "Newsroom", "Careers", "Partners"]}
                          />
                        </li>

                        <li>
                          <MenuButton
                            text="Learn"
                            items={["Blog", "Guides", "Help Center"]}
                          />
                        </li>

                        <li>
                          <MenuButton
                            text="Legal"
                            items={[
                              "Privacy Policy",
                              "Terms of use",
                              "Trademarks",
                            ]}
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                  <Grid item container md={6} className="rightGrid">
                    <ul className="alignment">
                      <li>
                        <Button className="loginbtn">Login</Button>
                      </li>

                      <li>
                        <Button className="signupbtn">Signup</Button>
                      </li>
                    </ul>

                    <div></div>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </AppBar>
        </Hidden>

        <Container className={classes.containerAlign}>
          <Grid container className={classes.section1}>
            <Grid item md={6} className="leftGrid">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box mb={5}>
                  <Typography className="box1">
                    The Most Powerful Checking Account
                  </Typography>
                </Box>
                <Box mb={5}>
                  <Typography className="box2">
                    Our checking account gives you higher returns than a savings
                    account with no hidden fees.
                  </Typography>
                </Box>
                <Box mb={5} width={1} display="flex" className="mailholder">
                  <Box mr={2} alignSelf="center">
                    <Email />
                  </Box>
                  <Box flexGrow={1} alignSelf="center">
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="Enter Email Address"
                      InputProps={{
                        classes: { input: classes.textInput },
                        disableUnderline: true,
                      }}
                    />
                  </Box>
                  <Box>
                    <Button className="joinbtn">Join Now</Button>
                  </Box>
                </Box>
                <Box mb={5} display="flex" alignSelf="end" className="flagBox">
                  <Box mr={2}>
                    <img src={flag} />
                  </Box>
                  <Box>
                    <Typography className="flag">
                      281 spots left for Priority Access
                    </Typography>
                  </Box>
                </Box>
                <Box mb={5} display="flex" alignSelf="end" className="flagBox">
                  <Box mr={2}>
                    <img src={bankLogo} />
                  </Box>
                  <Box>
                    <Typography className="flag">
                      Banking services provided by <br />
                      Evolve Bank &#38; Trust; Member FDIC
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <img src={banner} className="banner" />
            </Grid>
          </Grid>
          <Grid container className={classes.section2}>
            <Grid item md={12}>
              <Typography className="sec2">BACKED BY THE BEST</Typography>
            </Grid>
            <Grid item md={3} xs={12} className="company-logo">
              <img src={img1} />
            </Grid>
            <Grid item md={3} xs={12} className="company-logo">
              <img src={img2} />
            </Grid>
            <Grid item md={3} xs={12} className="company-logo">
              <img src={img3} />
            </Grid>
          </Grid>
          <Grid container className={classes.section3}>
            <Grid item md={7}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box alignSelf="end" mb={2}>
                  <Typography className="sec3box1">
                    Start saving for a rainy day fund
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography className="sec3box2">
                    Use Our Checking Account to Achieve Your Financial Goals
                  </Typography>
                </Box>
                <Box mb={10}>
                  <Typography className="sec3box3">
                    With the latest Federal rate cut, the largest banks are
                    offering close to 0% APY on their checking and savings
                    accounts. OnJuno checking will earn you more than 20x the
                    national average*. Deposits up to $250,000 are FDIC insured
                    through our partner bank. Grow your idle money faster with
                    our checking account and start saving towards a rainy day
                    fund, big expense, or vacation.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5} className="rightGrid">
              <img src={bonus} />
            </Grid>
          </Grid>
          <Grid container className={classes.section4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={1}
            >
              <Box mb={2}>
                <Typography className="sec4box1">
                  Sign up early to save more
                </Typography>
              </Box>
              <Box>
                <Typography className="sec4box2">
                  Depending on the level of your checking account, you’ll earn
                  between 1.15%3 to 2.15%1 bonus rate.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Hidden mdUp>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="full width tabs example"
              className={classes.tabStyle}
              centered
            >
              <Tab label="METAL" />
              <Tab label="PREMIUM" />
              <Tab label="BASIC" />
            </Tabs>

           
            <TabPanel
              value={this.state.value}
              index={0}
              className="tabpanel"
            >
              <Card
                cardNo="1"
                cardName="METAL"
                percent="2.15%"
                cashback="5%"
                btntext="Sign Up Now"
                cardText={this.card1text}
                minDep="1000"
                addFee="3"
                buttonText="SignUp Now"
                buttonDisabled={false}
                line1="$11.99/m"
                line2="Free for 6 months"
                line3="-$72 Savings"
                strike
              />
            </TabPanel>
            <TabPanel
              value={this.state.value}
              index={1}
            >
              <Card
                cardNo="2"
                cardName="PREMIUM"
                cashback="4%"
                percent="1.67%"
                cardText={this.card2text}
                minDep="500"
                addFee="2"
                buttonText="Up Next"
                buttonDisabled={true}
                line1="$6.99/m"
                line2="Coming Soon"
                spots="2000"
                strike
              />
            </TabPanel>
            <TabPanel
              value={this.state.value}
              index={2}
            >
              <Card
                cardNo="3"
                cardName="BASIC"
                cashback="3%"
                percent="1.15%"
                cardText={this.card3text}
                minDep="0"
                addFee="No"
                buttonText="Coming Soon"
                buttonDisabled={true}
                line1="No"
                line2="Free forever!"
                spots="10000"
              />
            </TabPanel>
          </Hidden>
          <Hidden mdDown>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Card
                  cardNo="1"
                  cardName="METAL"
                  percent="2.15%"
                  cashback="5%"
                  btntext="Sign Up Now"
                  cardText={this.card1text}
                  minDep="1000"
                  addFee="3"
                  buttonText="SignUp Now"
                  buttonDisabled={false}
                  line1="$11.99/m"
                  line2="Free for 6 months"
                  line3="-$72 Savings"
                  strike
                />
              </Grid>

              <Grid item md={4}>
                <Card
                  cardNo="2"
                  cardName="PREMIUM"
                  cashback="4%"
                  percent="1.67%"
                  cardText={this.card2text}
                  minDep="500"
                  addFee="2"
                  buttonText="Up Next"
                  buttonDisabled={true}
                  line1="$6.99/m"
                  line2="Coming Soon"
                  line3="-$72 Savings"
                  spots="2000"
                  strike
                />
              </Grid>

              <Grid item md={4}>
                <Card
                  cardNo="3"
                  cardName="BASIC"
                  cashback="3%"
                  percent="1.15%"
                  cardText={this.card3text}
                  minDep="0"
                  addFee="No"
                  buttonText="Coming Soon"
                  buttonDisabled={true}
                  line1="No"
                  line2="Free forever!"
                  line3="-$72 Savings"
                  spots="10000"
                />
              </Grid>
            </Grid>
          </Hidden>
        </Container>

        <Drawer
          open={this.state.sideBarOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div className={classes.drawerDiv}>
            <NavBar drawerMenuItemData={this.drawerData} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(Styles)(homePage);

