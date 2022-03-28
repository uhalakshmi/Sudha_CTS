import React from "react";


class FileUpload extends React.Component{
    constructor() {
        super();
        this.state = {
            profileImg: '',
            profileImgUrl: '',
            errMsg: ''
        }
    }
    profileImgChangeHandler = (event) => {
        // console.log(event.target.files);
        if (event.target.files.length === 0) {
            return;
        }
        let profileImg = event.target.files[0];
        let fileTypes = ['image/jpeg', 'image/png', 'image/web']
        if (!fileTypes.includes(profileImg.type)) {
            console.log("invalid image");
            this.setState({errMsg:"Invalid image"})
            return;
        } else {
            this.setState({errMsg:""})
        }
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                profileImg,
                profileImgUrl: reader.result
            })
        }
        reader.readAsDataURL(profileImg);
        
    }
    showState = () => {
        console.log(this.state);
    }
    render() {
        let { profileImg } = this.state;
        return (
            <div>
                <h3>Demo of File Upload</h3>
                <input type="file" name="profileImg" 
                    onChange={this.profileImgChangeHandler}></input>
                <p className="text-danger">{ this.state.errMsg}</p>
                <div>
                    <img src={ this.state.profileImgUrl}/>
                </div>
                <div className="my-4">
                    <button onClick={this.showState}>Show State</button>
                </div>
                <div className="my-4 p-3">
                    {this.state.profileImg &&
                        <div>
                            <h3>File Name: {profileImg.name}</h3>
                            <h3>File Type: {profileImg.type}</h3>
                            {/* <h3>File Size: {Math.round(profileImg.size/1024)+"KB"}</h3> */}
                             <h3>File Size: {(profileImg.size/1024).toFixed(2)+"KB"}</h3>
                            <h3>Last Modified Date: {profileImg.lastModifiedDate.toDateString()}</h3>
                        </div>
                        
                    }
                </div>
            </div>
        )
    }
}

export default FileUpload;