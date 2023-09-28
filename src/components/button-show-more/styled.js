import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    padding: 15px;
    aling-items: center;
    justify-content: center;
    width: 100%;

    button {
        position: relative;
        transition: all 0.2s ease;
    }

    .btn {
        padding: 10px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }

    .btn:hover {
        filter: invert(1);
    }
    
    .loading {
        height: 40px;
        width: 40px;
        background-color: transparent;
        border: 3px solid #bbbbbb;
        border-radius: 50%;
        font-size: 0;
        border-left-color: #ee1515;
        animation: rotating 0.5s 0.2s linear infinite;
    }
    
    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`