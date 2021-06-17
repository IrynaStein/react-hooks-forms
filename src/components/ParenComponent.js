import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [newsletter, setNewsLetter] = useState(false)

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleNewsletterChange(e) {
        setNewsLetter(e.target.checked)
        if (!newsletter) {
            console.log("Thanks for subscribing")
        }
    }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                newsletter={newsletter}
                handleNewsletterChange={handleNewsletterChange}
            />
            <DisplayData firstName={firstName} lastname={lastName} />
        </div>

    )
}

export default ParentComponent;