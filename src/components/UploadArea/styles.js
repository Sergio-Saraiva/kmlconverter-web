import styled, { css } from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UploadArea = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 30px;
    border-radius: 4px;
    background:#4A49CA;
`;

const dragActive = css`
    border-color: #FECF43;
`

const dragReject = css `
    border-color: #e57878;
`;


export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
    padding: 200px;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};

`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    sucess: '#FECF43'
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    font-size: 22px;
    color: #16156D;
    font-weight: bold;
`;
export const DownloadButton = styled.button.attrs((props => ({
    disabled: props.disabled
})))`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    padding: 20px 100px 20px 100px;
    border: 0;
    border-radius: 4px;
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: bold;
    background: ${props => props.disabled ? darken(0.5, '#FECF43') : '#FECF43' };
    transition: background 0.2s;
    cursor: pointer;

    &[disabled]{
        cursor: not-allowed
    }

    

    ${(props) =>
    !props.disabled &&
    css`
      &:hover{
        background: ${darken(0.3, '#FECF43')};
        }
    `}


`;
