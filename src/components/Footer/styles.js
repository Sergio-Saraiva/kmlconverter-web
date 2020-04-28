import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0; 
    background: #4A49CA;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    span{
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
        color: #DDD;
        opacity: 75%;
    }
`;