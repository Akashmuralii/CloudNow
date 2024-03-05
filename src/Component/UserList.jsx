import { useEffect, useState } from "react";
import AddUser from "./AddUser";

import userList from "../Assets/Css/userList.css";

import { receive } from "../Redux/reducer";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);
  const [pop, setPop] = useState(false);
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.userData.data);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
      dispatch(receive(response.data));
    });
  }, []);

  const CreateUser = () => {
    let status = pop;
    setPop(!status);
    console.log(pop);
  };

  return (
    <>
      <div className="Cont">
        <h1>
          USER DETAILS{" "}
          <button
            onClick={CreateUser}
            className={pop ? "changeBtn" : "addUser"}
          >
            {" "}
            Add User
          </button>
        </h1>
        <div className="popStatus">{pop && <AddUser handlepop={setPop} />}</div>

        <table className={pop ? "tableChange" : "table"}>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.id}</td> */}
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
