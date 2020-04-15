import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'
import * as PostActions from '../actions/postsactions'
import * as UserActions from "../actions/useractions";
import PostsReducer from "../reducer/PostsReducer";

function getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

// function deletePost() {
//     return axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
//         method: 'DELETE'
//     })
//
// }

const PostDetail = ({ SelectedPost }) => (
    <div>
        <h2> UserId: {SelectedPost.userId}</h2>
        {/*<h2>{SelectedPost.id}</h2>*/}
        <h5>Title: {SelectedPost.title}</h5>
        <p>Post: {SelectedPost.body}</p>
    </div>
);

const Posts = () => {
    const [dataList, setDataList] = useState([])
    const [selectedPost, setSelectedPost] = useState(null);

    const dispatch = useDispatch();
    const { SelectedPostRecord } = useSelector(state => state.PostsReducer);

    console.log(SelectedPostRecord)


    useEffect(()=>{
        getPosts().then(data=>{
            setDataList(data.data)
        })
        console.log(setDataList)
    }, [])

    // useEffect(()=>{
    //     deletePost().then(data=>{
    //         setDataList(data.data)
    //     })
    // })
    return (
        <div className="App-header">
            {selectedPost ? (
                <div>
                    <button onClick={() => setSelectedPost(null)}>
                        <h2>Back to List</h2>
                    </button>
                    <PostDetail SelectedPost={selectedPost} />
                </div>
            ) : (
                <ol>
                    {dataList.map(data => {
                        console.info(data);
                        return (
                            <ol
                                key={data.id}
                                onClick={() => {
                                    const { selectPost } = PostActions;
                                    dispatch(selectPost(data));
                                    setSelectedPost(data);
                                }}
                            >
                                <h2> Post: {data.id}</h2>
                            </ol>
                        );
                    })}
                </ol>
            )}
        </div>    );
};

export default Posts;