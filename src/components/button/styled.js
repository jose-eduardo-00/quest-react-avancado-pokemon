import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    padding: 15px;
    aling-items: center;
    justify-content: center;
    width: 100%;

    .btn {
        padding: 10px 20px;
        border-radius: 10px;
        transition: 0.6s;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }

    .btn:hover {
        filter: invert(1);
    }
`