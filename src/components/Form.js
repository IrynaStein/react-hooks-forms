import React, { useState } from "react";

function Form(props) {
  return (
    <form>
      <input type="text" onChange={props.handleFirstNameClick} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameClick} value={props.lastName} />
      <input type="checkbox" onChange={props.handleNewsletterChange} checked={props.newsletter}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
