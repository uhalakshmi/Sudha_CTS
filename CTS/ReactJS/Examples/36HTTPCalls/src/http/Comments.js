import React from 'react';
import axios from 'axios';

class Comments extends React.Component{
    constructor() {
        super();
        this.state = {
            commentsList: []
        }
    }
    componentDidMount() {
        console.log("start");
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                console.log(res.data);
                this.setState({commentsList: res.data})
            })
            .catch(err => {
                console.log("error: ", err);
            })
            console.log("end");
    }
    render() {
        let { commentsList } = this.state;
        return (
            <div>
                <h3>Demo on HTTP calss - Comments</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>Id</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>body</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            commentsList.map((user, ind) => {
                                return <tr key={ind}>
                                            <td>{ user.postId}</td>
                                            <td>{ user.id}</td>
                                            <td>{ user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{ user.body}</td>
                                        </tr>
                            
                        })
                    }
                    </tbody>
                 </table>
            </div>
        )
    }
}

export default Comments;