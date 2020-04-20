import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
      error: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      // alert("passwords don't match");
      this.setState({ error: "The passwords don't match" });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: "",
        error: null,
      });
    } catch (error) {
      this.setState({ error: error.message });
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmedPassword,
      error,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <span>{!error ? null : error}</span>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="text"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
