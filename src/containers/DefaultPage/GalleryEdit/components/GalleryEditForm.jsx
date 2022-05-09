import React from 'react'
import axios from 'axios';
 
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }
 
    async submit(){
        var prodID = "";
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        prodID = urlParams.get("prodID");

        var restID = ""
        const queryStringRest = window.location.search;
        const urlParamsRest = new URLSearchParams(queryStringRest);
        restID = urlParamsRest.get("restID");

        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        var resp;
        if(prodID){
            resp = await axios.post('https://eatatunited.com.na/api-calls/gallery.php?prodID='+prodID, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        }
        else if(restID){
            resp = await axios.post('https://eatatunited.com.na/api-calls/gallery.php?restID='+restID, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        }
        else{
            resp = await axios.post('https://eatatunited.com.na/api-calls/gallery.php', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        }
        console.log(resp.data);
        alert(JSON.stringify(resp.data));
 
    }
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
 
                            <h3 className="text-white">File Upload</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>
 
                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;