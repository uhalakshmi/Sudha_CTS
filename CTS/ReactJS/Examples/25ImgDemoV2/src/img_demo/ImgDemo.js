import React from "react";
import img1 from '../assets/img/project_img5.jpg'
import employeesList from './data'

function ImgDemo() {
    
    let img_path = "../assets/img/male.jpg";
    let getEmployees= employeesList.map((emp, ind) => {
                        return (
                            <div className="card col-md-4" key={emp.eid}>
                                <img src={require(`../assets/img/${emp.img_path2}`)} alt="some image" width="300px"></img>
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
