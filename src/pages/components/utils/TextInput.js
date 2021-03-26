import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  componentDidMount() {
    this.setState({
      value: this.props.value,
    });
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      label,
      value,
      type,
      onChange,
      name,
      autoComplete,
      size,
    } = this.props;
    return (
      <TextField
        variant="outlined"
        margin="normal"
        required
        value={value}
        fullWidth
        size={size}
        name={name}
        label={label}
        type={type}
        id="password"
        autoComplete={autoComplete}
        onChange={onChange}
        autoComplete="current-password"
      />
    );
  }
}
