import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { registerTeacherAction } from "../../../redux/actions/registerTeacherAction";
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction";

const useStyles = () => ({
  inputfield: {
    display: 'block',
    margin: '20px'
  },
  btn: {
    margin: '0px 40px'
  },
  formClass: {
    margin: '20px',
    display: 'inline-block',
    textAlign: 'center',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '20px'
  },
  formTitle: {
    fontSize: '1.7em'
  }
});

class TeacherRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  usernameInputHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  emailInputHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordInputHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  confirmpasswordInputHandler = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      this.props.setAlert({
        isAlert: true,
        type: "error",
        title: "Invalid Input",
        message: "Confirm Password does not match",
      });
      return;
    }
    this.props.registerTeacherAction({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <form className={this.props.classes.formClass} onSubmit={(event) => this.handleSubmit(event)}>
        <div className={this.props.classes.formTitle} color="primary">Teacher Register</div>
        <TextField
          variant='outlined'
          color="primary"
          className={this.props.classes.inputfield}
          label="Username"
          placeholder='Enter username'
          type='text'
          value={this.state.username}
          onChange={this.usernameInputHandler}
          required
        />
        <TextField
          variant='outlined'
          color="primary"
          className={this.props.classes.inputfield}
          label="Email"
          placeholder='Enter email'
          type='email'
          value={this.state.email}
          onChange={this.emailInputHandler}
          required
        />
        <TextField
          variant='outlined'
          color="primary"
          label="Password"
          className={this.props.classes.inputfield}
          placeholder='Enter password'
          type='password'
          value={this.state.password}
          onChange={this.passwordInputHandler}
          required
        />
        <TextField
          variant='outlined'
          color="primary"
          label="Confirm Password"
          className={this.props.classes.inputfield}
          placeholder='Enter password again'
          type='password'
          value={this.state.confirmPassword}
          onChange={this.confirmpasswordInputHandler}
          required
        />
        <Button 
          variant='contained'
          color="primary"
          type='submit'
          className={this.props.classes.btn}
        >
          Register
        </Button>
      </form>
    );
  }
}

const mapStatetoProps = state => ({});

export default withStyles(useStyles)(connect(mapStatetoProps, {
  registerTeacherAction,
  setAlert
})(TeacherRegisterForm));
