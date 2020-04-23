import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addPost} from "../actions/addPostActions";
class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    };


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                addPost(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

render() {
        const {title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <label>Title</label>
                        <textarea
                            name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea
                            name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addPost: ()=>dispatch(addPost())
    }
}

export default connect(null,
    mapDispatchToProps()
)(AddPost)