import axios from "axios";
import { useState } from "react";
import Form from "../form/Form";
import "./tableData.css";

function TableData({ user }) {
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:5000/api/user/' + user._id)

      window.location.reload()
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="tdContainer">
      <div className="tdWrapper">
        {updateMode ? (
          <Form user = {user} updateMode = {updateMode} setUpdateMode = {setUpdateMode} />
        ) : (
          <div className="tdList">
            <div className="tdListItem">
              <span className="tdId">Id : {user._id}</span>
            </div>
            <div className="tdListItem">
              <span className="tdName">Name : {user.username}</span>
            </div>
            <div className="tdListItem">
              <span className="tdPhone">Phone : {user.phoneNo}</span>
            </div>
            <div className="tdListItem">
              <span className="tdMail">Email : {user.email}</span>
            </div>
            <div className="tdListItem">
              <span className="tdHobby">Hobby : {user.hobby}</span>
            </div>
            <div className="tdListBtn">
              <button
                className="tdBtn"
                onClick={() => setUpdateMode(!updateMode)}
              >
                UPDATE
              </button>
              <button className="tdBtn" onClick = {handleDelete}>DELETE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableData;
