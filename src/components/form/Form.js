import axios from "axios";
import { useEffect, useState } from "react";
import "./form.css";

function Form({ user, updateMode, setUpdateMode }) {
  const [username, setUsername] = useState(user ? user.username : "");
  const [phoneNo, setPhoneNo] = useState(user ? user.phoneNo : 0);
  const [email, setEmail] = useState(user ? user.email : "");
  const [hobby, setHobby] = useState(user ? user.hobby : "");
  const [displayForm, setDisplayForm] = useState(true);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newUser = {
      username,
      phoneNo,
      email,
      hobby,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        newUser
      );

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      username,
      phoneNo,
      email,
      hobby,
    };

    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/" + user._id,
        updatedUser
      );

      setUpdateMode(!updateMode);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className= {user ? 'formContainerUser' : 'formContainer'}>
      <div className= {user ? 'formHeaderUser' : 'formHeader'}>
        {!user && (
          <button
          className="formDisplay"
          onClick={() => setDisplayForm(!displayForm)}
          >
            Show Form
          </button>
        )}
        <span className="formTitle">{!user && 'Form'}</span>
      </div>
      <div className= {user ? 'formWrapperUser' : 'formWrapper'}>
        {displayForm && (
          <form onSubmit={handleSubmit} className= {user ? 'formListUser' : 'formList'}>
            <div className="formListItems">
              <label>Name</label>
              <input
                type="text"
                className="formInput"
                onChange={(e) => setUsername(e.target.value)}
                required
                value={username}
              />
            </div>
            <div className="formListItems">
              <label>Phone number</label>
              <input
                type="tel"
                className="formInput"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                max={10}
                value={phoneNo}
              />
            </div>
            <div className="formListItems">
              <label>Email</label>
              <input
                type="email"
                className="formInput"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </div>
            <div className="formListItems">
              <label>Hobbies</label>
              <input
                type="text"
                className="formInput"
                onChange={(e) => setHobby(e.target.value)}
                required
                value={hobby}
              />
            </div>
            <div className="formListItems">
              {updateMode ? (
                <>
                  <button className="formBtn" onClick={handleUpdate}>
                    UPDATE
                  </button>
                  {/* <button className="formBtn">DELETE</button> */}
                  <button
                    className="formBtn"
                    onClick={() => setUpdateMode(!updateMode)}
                  >
                    Back
                  </button>
                </>
              ) : (
                <button className="formBtn" type="submit">
                  SAVE
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
