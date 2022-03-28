import React from 'react';
import axios from 'axios';

class Users extends React.Component{
    constructor() {
        super();
        this.state = {
            usersList: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                this.setState({usersList: res.data})
            })
            .catch(err => {
                console.log("error: ", err);
        })
    }
    render() {
        let { usersList } = this.state;
        return (
            <div>
                <h3>Demo on HTTP calss</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserId</th>
                            <th>Email</th>
                            <th>PhoneNO</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            usersList.map((user, ind) => {
                                return <tr key={ind}>
                                            <td>{ user.id}</td>
                                            <td>{ user.name}</td>
                                            <td>{ user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{ user.phone}</td>
                                        </tr>
                            
                        })
                    }
                    </tbody>
                 </table>
            </div>
        )
    }
}

export default Users;