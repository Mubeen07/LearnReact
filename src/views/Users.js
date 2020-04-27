import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as UserActions from "../actions/useractions";
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import Loading from "../common/Loading";

function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
const UserDetail = ({ SelectedUser }) => (
  <div style={{textAlign:'left'}}>
   <Card bg="dark" >
    <Card.Title style={{textAlign:'center'}}>UserID :{SelectedUser.id}</Card.Title>
       <span>User Name: {SelectedUser.username}</span>
       <span>Name: {SelectedUser.name}</span>
    <h4>Address</h4>
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
   </Card>
  </div>
);

const User = ({loading}) => {
  const [dataList, setDataList] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const { SelectedUserRecord } = useSelector(state => state.UsersReducer);

  console.log(SelectedUserRecord);

  useEffect(() => {
        loading= true;
    getUsers().then(data => {
      setDataList(data.data);
    });
  }, []);


    return (
        <div className="App">
            <h2 >User's List</h2>
    <div className="App-header">

      {selectedUser ? (
        <div>
          <Button  variant="secondary" onClick={() => setSelectedUser(null)}>
            Back to List
          </Button>
            <Link to={`/userposts`}>
            <Button variant="info" >My Posts</Button></Link>
                  <UserDetail SelectedUser={selectedUser} />
        </div>
      ) : (
          <ListGroup as="ul"  >
          {dataList.map(data => {
            console.info(data);
            return (
              <ListGroupItem variant="dark"
                key={data.id}
                onClick={() => {
                  const { selectUser } = UserActions;
                  dispatch(selectUser(data));
                  setSelectedUser(data);
                }}
              >
                <h3>{data.name}</h3>
              </ListGroupItem>
            );
          })}
          </ListGroup>
      )}
    </div>
        </div>
  );
};

export default User;
