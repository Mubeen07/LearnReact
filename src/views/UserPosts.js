import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import * as UserPostsActions from "../actions/userPostsActions";
import {ListGroup, ListGroupItem} from "react-bootstrap";

function getUserPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts?userId=${id}");
}

const UserPosts = () => {
    const [dataList, setDataList] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);

    const dispatch = useDispatch();
    const { SelectedUserPostsRecord } = useSelector(state => state.UserPostReducer);
    console.log(SelectedUserPostsRecord)

    const {SelectedUserRecord} = useSelector(state => state.UsersReducer)


    useEffect(() => {

        getUserPosts(SelectedUserRecord.id).then(data => {
            setDataList(data.data);
        });

    }, []);
    return (
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
    );
};

export default UserPosts;