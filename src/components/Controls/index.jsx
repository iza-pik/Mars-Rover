import React from "react";
import Input from "../Input";

const Controls = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      className="inputField"
    />
    <Input type="submit" value="Go!" className="submitButton" />
  </form>
);

export default Controls;
