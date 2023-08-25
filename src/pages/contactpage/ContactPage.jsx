// ContactForm.js
import React, { useEffect, useState } from "react";
import "./ContactPage.css";
const getLocalData = () => {
  let item = localStorage.getItem("Item");
  if (item) {
    return JSON.parse(localStorage.getItem("Item"));
  } else {
    return [];
  }
};
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fullname, setFullname] = useState(getLocalData());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      let newArray = { name: name, email: email, message: message };
      setFullname([...fullname, newArray]);
      alert(
        "All contacts submited successfull...(You can get all the data in LocalStorage...)"
      );
    } else {
      alert("Please fill the all fields...");
    }
  };
  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(fullname));
  }, [fullname]);
  return (
    <div>
      <div className="contactStyle">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="emailStyle"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            className="textareaStyle"
            placeholder="Please Add your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit" className="submitStyle">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
