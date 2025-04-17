import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logoutUser, getAdminDetails } from "../../../redux/actions/loginAction";
import { getDashboardCount } from "../../../redux/actions/dashboardDetails";
import Auth from "../../../services/Auth";
import { HomepageHeader } from "../../basic/header/header";
import logoImg from '../../basic/Homepage/main.jpg';
import { MainCard } from "../Card/card";
import TeacherImg from '../teacher.png';
import StudentImg from '../student.jfif';
import SubjectImg from '../subject.jfif';
import TeacherTable from "../teacherTable/teacherTable";
import SubjectTable from "../subjectTable/subjectTable";
import StudentTable from "../studentTable/studentTable";
import { Grid, Button, Box } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    position: 'relative'
  },
  logout_btn: {
    position: 'absolute',
    top: 70,
    right: 30,
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
    '&:hover': {
      backgroundColor: '#c0392b',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(231, 76, 60, 0.4)'
    }
  },
  headerMargin: {
    marginTop: 80,
    padding: '20px 0'
  },
  linkbtn: {
    color: 'white',
    textDecoration: 'none',
    width: '100%',
    display: 'block'
  },
  actionBtns: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 15px',
    gap: '10px',
    '& button': {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#2980b9',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
      }
    }
  },
  cardGrid: {
    padding: '150px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
  },
  tableContainer: {
    margin: '20px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      margin: '10px'
    }
  },
  cardWrapper: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  }
});

class DashboardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "none"
    };
  }

  logout = () => {
    this.props.logoutUser();
  }

  handleTableExpand = (type) => {
    this.setState(prevState => ({
      expand: prevState.expand === type ? "none" : type
    }));
  }

  componentDidMount() {
    if (this.props.user.isLoggedIn && !this.props.dashboardDetails.retrived) {
      this.props.getDashboardCount();
    }
  }

  render() {
    if (!Auth.retriveToken() || Auth.retriveToken() === 'undefined') {
      return <Navigate to='/' />;
    }
    
    if (!this.props.user.isLoggedIn) {
      this.props.getAdminDetails();
      return <div></div>;
    }

    const { classes } = this.props;
    const { expand } = this.state;

    let TableComponent = null;
    if (expand === "Teacher") TableComponent = TeacherTable;
    else if (expand === "Student") TableComponent = StudentTable;
    else if (expand === "Subject") TableComponent = SubjectTable;

    return (
      <div className={classes.root}>
        <HomepageHeader title='Exam Portal' img={logoImg} />
        <Button 
          className={classes.logout_btn} 
          onClick={this.logout}
        >
          Logout
        </Button>

        <div className={classes.headerMargin}>
          <Grid container spacing={4} justifyContent="center" className={classes.cardGrid}>
            {[
              {
                title: 'Teacher',
                value: this.props.dashboardDetails.teacherActive,
                total: this.props.dashboardDetails.teacherActive + this.props.dashboardDetails.teacherBlocked,
                image: TeacherImg,
                addLink: '/addTeacher',
                canAdd: true
              },
              {
                title: 'Student',
                value: this.props.dashboardDetails.studentActive,
                total: this.props.dashboardDetails.studentActive + this.props.dashboardDetails.studentBlocked,
                image: StudentImg,
                canAdd: false
              },
              {
                title: 'Subject',
                value: this.props.dashboardDetails.subjectActive,
                total: this.props.dashboardDetails.subjectActive + this.props.dashboardDetails.subjectBlocked,
                image: SubjectImg,
                addLink: '/addSubject',
                canAdd: true
              }
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className={classes.cardWrapper}>
                <MainCard
                  title={card.title}
                  value={card.value}
                  total={card.total}
                  image={card.image}
                />
                <div className={classes.actionBtns}>
                  {card.canAdd && (
                    <Button variant="contained">
                      <Link to={card.addLink} className={classes.linkbtn}>
                        Add {card.title}
                      </Link>
                    </Button>
                  )}
                  <Button 
                    variant="contained"
                    onClick={() => this.handleTableExpand(card.title)}
                  >
                    {expand === card.title ? 'Hide' : 'Show'}
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>

          {TableComponent && (
            <Box className={classes.tableContainer}>
              <TableComponent />
            </Box>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  dashboardDetails: state.dashboardDetails
});

export default withStyles(useStyles)(connect(mapStateToProps, {
  logoutUser,
  getAdminDetails,
  getDashboardCount,
})(DashboardMain));