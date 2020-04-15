import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as UserActions from "../actions/useractions";

function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

const UserDetail = ({ SelectedUser }) => (
  <div>
    <h2>{SelectedUser.id}</h2>
    <p>Username: {SelectedUser.username}</p>
    <h3>{SelectedUser.name}</h3>
    <h3>Address</h3>
    <ul>
      <li>
        Street: {SelectedUser.address.street}, Suite:{" "}
        {SelectedUser.address.suite}
      </li>
      <li>
        City: {SelectedUser.address.city}, Zipcode:{" "}
        {SelectedUser.address.zipcode}
      </li>
    </ul>
  </div>
);

const User = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const { SelectedUserRecord } = useSelector(state => state.UsersReducer);

  console.log(SelectedUserRecord);

  useEffect(() => {
    getUsers().then(data => {
      setDataList(data.data);
    });
  }, []);

  return (
    <div className="App-header">
      {selectedUser ? (
        <div>
          <button onClick={() => setSelectedUser(null)}>
            <h2>Back to List</h2>
          </button>
          <UserDetail SelectedUser={selectedUser} />
        </div>
      ) : (
        <ol>
          {dataList.map(data => {
            console.info(data);
            return (
              <li
                key={data.id}
                onClick={() => {
                  const { selectUser } = UserActions;
                  dispatch(selectUser(data));
                  setSelectedUser(data);
                }}
              >
                <h2>{data.name}</h2>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default User;
