import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import * as UserPostsActions from "../actions/userPostsActions";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";

function getUserPosts(userId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}

const UserPosts = () => {
    const [dataList, setDataList] = useState([]);

    const history=useHistory();

    const [selectedUser, setSelectedUser] = useState(null);

    const dispatch = useDispatch();
    const { SelectedUserPostsRecord } = useSelector(state => state.UserPostReducer);
    console.log(SelectedUserPostsRecord)


    const {SelectedUserRecord} = useSelector(state => state.UsersReducer)


    useEffect(() => {
        if (SelectedUserRecord){
        console.log(SelectedUserRecord)
        getUserPosts(SelectedUserRecord.id).then(data => {
            setDataList(data.data);
        });} else{
            history.push('/user')
        }

    }, [SelectedUserRecord]);
    return (
        <div>
            <Link to={"/addpost"}>
            <Button variant="secondary">Add a Post</Button>
            </Link>
        <div className="App-header">

                <ListGroup as="ul">
                    {dataList.map(data => {
                        console.info(data);
                        return (
                            <ListGroupItem variant="dark"
                                key={data.id}
                                onClick={() => {
                                    const { selectUserPosts } = UserPostsActions;
                                    dispatch(selectUserPosts(data));
                                }}
                            >
                                <h2> Post: {data.id}</h2>
                                <p> Title: {data.title}</p>
                                <p> Body: {data.body}</p>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>

        </div>
        </div>
    );
};

export default UserPosts;