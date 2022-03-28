import React from "react";
import img1 from '../assets/img/project_img5.jpg'

function ImgDemo() {
    let employeesList = [
        {
            "eid": 101,
            "employee_name": "Ramu",
            "email": "ramu@gmail.com",
            "salary": 25000,
            "gender": "Male",
            "img_path": "../assets/img/male.jpg"
        },
        
        {
            "eid": 102,
            "employee_name": "Lakshmi",
            "email": "lakshmi@gmail.com",
            "salary": 26000,
            "gender": "Female",
            "img_path": "../assets/img/female.jpg"
        },
        {
            "eid": 103,
            "employee_name": "Vijay",
            "email": "vijay@gmail.com",
            "salary": 24000,
            "gender": "Male",
            "img_path": "../assets/img/male.jpg"
        },
        {
            "eid": 104,
            "employee_name": "Lalita",
            "email": "lalita@gmail.com",
            "salary": 22000,
            "gender": "Female",
            "img_path": "/assets/img/female.jpg"
        },
        {
            "eid": 105,
            "employee_name": "Mahesh",
            "email": "mahesh@gmail.com",
            "salary": 40000,
            "gender": "Male",
            "img_path": "/assets/img/male.jpg"
        },
        {
            "eid": 106,
            "employee_name": "Bharath",
            "email": "bharath@gmail.com",
            "salary": 32000,
            "gender": "Male",
            "img_path": "/assets/img/male.jpg"
        }
    ];
    let img_path = "../assets/img/male.jpg";
    let getEmployees= employeesList.map((emp, ind) => {
                        return (
                            <div className="card col-md-8" key={emp.eid}>
                                <img src={`${emp.img_path}`} alt="some image" width="300px"></img>
                                <h3>Employee Name: {emp.employee_name}</h3>
                            </div>
                        )
                    })
                
    return (
        <div>
            <h3>Image ussage Demo</h3>
            <h3>Imported Image Demo</h3>
            <img src={img1} alt="some image" width="600px"></img>
            <br />
            <br />
            <hr />
            <h3>Using require directly at src attribute</h3>
            <img src={require('../assets/img/project_img7.jpeg')} alt="some image" width="600px"></img>
            <br />
            <br />
            <hr/>
            <img src={require('../assets/img/'+'project_img7.jpeg')} alt="some image" width="600px"></img>
            <br />
            <br />
            <hr />
            <h3>Partially path is hard coded and files name goes as part of object property</h3>
            <img src={require(`../assets/img/${'project_img7.jpeg'}`)} alt="some image" width="600px"></img>
            <br />
            <br />
            <hr />
            <h3>online image</h3>
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_1d9kUp3SoTAkFJeBxNucG847bgMKAfzzA&usqp=CAU'}`} alt="some image" width="600px"></img>
            {
                getEmployees
            }
        </div>
    )
}

export default ImgDemo;
