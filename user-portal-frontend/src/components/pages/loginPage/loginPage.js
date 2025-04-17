import { Button, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AlertBox from '../../atoms/Alertbox/AlertBox';
import LoginForm from '../../templates/loginForm/loginForm';
import Auth from '../../../helper/Auth';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  addHeight: theme.mixins.toolbar,
  title: {
    flexGrow: 1
  },
  main: {
    textAlign: 'center',
    paddingTop: '5%',
    margin: 'auto'
  }
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotoStudentRegister: false,
      gotoTeacherRegister: false  // Added for teacher registration
    };
  }

  onStudentRegisterClick() {
    this.setState({ gotoStudentRegister: true });
  }

  onTeacherRegisterClick() {  // Added function for teacher registration
    this.setState({ gotoTeacherRegister: true });
  }

  render() {
    if (this.state.gotoStudentRegister) {
      return <Navigate to='/studentRegisterPage' />;
    }
    if (this.state.gotoTeacherRegister) {  // Handle teacher navigation
      return <Navigate to='/teacherRegisterPage' />;
    }
    if (this.props.user.isLoggedIn) {
      return this.props.user.userDetails.type === 'TEACHER'
        ? <Navigate to='/homeTeacher' />
        : <Navigate to='/homeStudent' />;
    } else if (Auth.retriveToken() && Auth.retriveToken() !== 'undefined') {
      return <Navigate to='/homeStudent' />;
    } else {
      return (
        <div>
          <AppBar elevation={0} className={this.props.classes.appbar}>
            <Toolbar>
              <Typography variant='h5' className={this.props.classes.title}>
                Login
              </Typography>
              <Button variant="contained" className={this.props.classes.endtestbtn} onClick={() => this.onStudentRegisterClick()}>
                Student Register
              </Button>
              <Button variant="contained" className={this.props.classes.endtestbtn} onClick={() => this.onTeacherRegisterClick()} style={{ marginLeft: '10px' }}>
                Teacher Register
              </Button>
            </Toolbar>
          </AppBar>
          <div className={this.props.classes.addHeight}></div>
          <div className={this.props.classes.main}>
            <AlertBox />
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

const mapStatetoProps = state => ({
  user: state.user
});

export default withStyles(useStyles)(connect(mapStatetoProps, {})(LoginPage));
