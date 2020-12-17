import to from "await-to-js";
import Axios from "axios";
import clone from "lodash.clone";
import { Component, h, Fragment } from "preact";
import { route } from "preact-router";

import FormBox from "../../components/formBox/formBox";

export interface IRegisterProps {}

interface IRegisterState {
  formFields?: {
    username?: string;
    name?: string;
    email?: string;
    password?: string;
  };
}

export default class Register extends Component<
  IRegisterProps,
  IRegisterState
> {
  state: IRegisterState = {
    formFields: {},
  };

  render(props: IRegisterProps, state: IRegisterState) {
    return (
      <Fragment>
        <h1>Diplomacy</h1>
        <br />
        <FormBox>
          <form
            action="/user/register"
            method="post"
            onSubmit={this.handleSubmit}
          >
            Username:
            <br />
            <input
              type="text"
              name="username"
              value={state.formFields.username}
              onChange={this.handleChange("username")}
            />
            <br />
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={state.formFields.name}
              onChange={this.handleChange("name")}
            />
            <br />
            Email:
            <br />
            <input
              type="text"
              name="email"
              value={state.formFields.email}
              onChange={this.handleChange("email")}
            />
            <br />
            Password:
            <br />
            <input
              type="password"
              name="password"
              value={state.formFields.password}
              onChange={this.handleChange("password")}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </FormBox>
      </Fragment>
    );
  }

  private handleSubmit = async (evt: Event) => {
    evt.preventDefault();
    const [err, res] = await to(
      Axios.post("/api/user/register", this.state.formFields)
    );
    if (err) console.log(err);
    if (res) route("/", true);
  };

  private handleChange = (
    field: "username" | "name" | "email" | "password"
  ) => {
    return (evt: Event) => {
      const formFields = clone(this.state.formFields);
      formFields[field] = (evt.target as HTMLInputElement).value;
      this.setState({ formFields });
    };
  };
}
