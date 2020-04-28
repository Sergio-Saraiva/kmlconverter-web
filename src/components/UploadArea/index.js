import React, {Component} from 'react';
import DropZone from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';

import api from '../../services/api';
import {DropContainer, UploadArea, Container,UploadMessage, DownloadButton} from './styles';

export default class Main extends Component{

    state = {
        url: '',
        disabled: true
    }

    handleFileUpload = async (file) => {
        var bodyFormData = new FormData();
        console.log(file[0])
        bodyFormData.append('file', file[0])
        console.log(bodyFormData.getAll('file'))
        const response = await api.post(`${process.env.REACT_APP_API_URL}/kml-to-xls`, bodyFormData, {headers: {'Content-Type': 'multipart/form-data'}})

        this.setState({url: response.data.url, disabled: false})
    }

    handleDownload = async () => {
        const a = document.getElementsByTagName('a')
        console.log(a)
        a[0].click();
    }

    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive){
            return <UploadMessage>Place your kml file here</UploadMessage>
        }

        if(isDragReject){
            return <UploadMessage type="error">Invalid file format</UploadMessage>
        }

        return <UploadMessage type="sucess">Drop your file</UploadMessage>
    }

    render(){

        const {disabled, url} = this.state

        return(
            <Container>
                <UploadArea>
                    <DropZone accept="application/*" onDropAccepted={this.handleFileUpload}>
                        {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            <DropContainer 
                                {...getRootProps()}
                                isDragActive={isDragActive}
                                isDragReject={isDragReject}
                            >
                                <input {...getInputProps()}/>
                                <MdCloudUpload className="UploadIcon" color="#16156D" size={100}/>
                                {this.renderDragMessage(isDragActive, isDragReject)}
                            </DropContainer>
                        )}
                    </DropZone>
                </UploadArea>

                <DownloadButton disabled={disabled} onClick={this.handleDownload}>Download<a href={url} display="none"></a></DownloadButton>
            </Container>
        )
    }
}