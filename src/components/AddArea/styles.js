import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;

    button{
        margin-right: 10px;
        border: 0;
        padding: 5px;
        background: transparent;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
`;