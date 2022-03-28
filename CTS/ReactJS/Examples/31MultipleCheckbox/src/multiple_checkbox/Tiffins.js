import React from "react";

class Tiffins extends React.Component{
    constructor() {
        super()
        this.state = {
            tiffins: ['Idly', 'SambarIdly', 'Vada', 'SambarVada', 'Dosa',
                'MasalaDosa', 'Chapati', 'Pury', 'Pongal', 'MysoreBonda'
            ],
            selectedTiffins: [],
        }
    }
    tiffinChangeHandler = (e) => {
        // console.log("Name: ", e.target.name);
        // console.log("Value: ", e.target.value);
        // console.log("Checked: ", e.target.checked);

        let { selectedTiffins } = this.state;
        if (e.target.checked) {
            selectedTiffins.push(e.target.value);
        } else if (!e.target.checked) {
            let ind = selectedTiffins.indexOf(e.target.value);
            selectedTiffins.splice(ind, 1);
        }
        
        console.log(selectedTiffins);
        this.setState({selectedTiffins})
    }
    render() {
        return (
            <div>
                <h3>Demo on Multiple checkboxes using Tiffins</h3>
                <div className="row">
                    {
                        this.state.tiffins.map((tiffin, ind) => {
                            return <div className="col-md-4" key={ind}>
                                <input type="checkbox" name="tiffins"
                                            value={tiffin }
                                            //  checked

                                            className="form-check-input"
                                            onChange={this.tiffinChangeHandler}
                                        ></input>
                                        <label className="form-check-label mx-2">{tiffin}</label>
                                    </div>
                        
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tiffins;