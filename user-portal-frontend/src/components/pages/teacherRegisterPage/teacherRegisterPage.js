import React from 'react';
import AlertBox from '../../atoms/Alertbox/AlertBox';
import TeacherRegisterForm from '../../templates/teacherRegisterForm/teacherRegisterForm';
import { Button } from '@material-ui/core';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Navigate } from 'react-router-dom';

const useStyles = (theme) => ({
  addHeight: theme.mixins.toolbar,
  title: {
    flexGrow: 1
  },
  main: {
    textAlign: 'center',
    paddingTop: '5%'
  }
});

class TeacherRegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotoHome: false
    };
  }

  onHomeClick() {
    this.setState({ gotoHome: true });
  }

  render() {
    if (this.state.gotoHome) {
      return <Navigate to='/' />;
    }
    return (
      <div>
        <AppBar elevation={0} className={this.props.classes.appbar}>
          <Toolbar>
            <Typography variant='h5' className={this.props.classes.title}>
              Teacher Register
            </Typography>
            <Typography variant='h6'>
              <Button variant="contained" className={this.props.classes.endtestbtn} onClick={() => this.onHomeClick()}>
                Home
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.addHeight}></div>
        <div className={this.props.classes.main}>
          <AlertBox />
          <TeacherRegisterForm />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(TeacherRegisterPage);
