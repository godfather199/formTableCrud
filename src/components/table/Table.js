import axios from "axios";
import { useEffect, useState, useNavigate } from "react";
import "./table.css";
import TableData from '../tableData/TableData'

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="tableContainer">
        <span className="tableTitle">USERS TABLE</span>
      <div className="tableWrapper">
        {users.map((user) => (
          <TableData key={user._id} user = {user}/>
        ))}
      </div>
    </div>
  );
}

export default Table;
