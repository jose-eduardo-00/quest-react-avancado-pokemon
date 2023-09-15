import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: #ee1515;

    button {
        width: 80px;
        height: 30px;
        padding: 0 10px;
        border-radius: 30px;
        transition: 0.6s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        box-shadow: 0px -1px 5px 2px rgba(0,0,0,0.75);
    }

    button .active {
        transition: 0.6s;
        content="";
        position: absolute;
        top: 3px;
        left: 2px;
        z-index: 2;
        background-color: #eeeeee;
        height: 25px;
        width: 35%;
        box-shadow: 0px -1px 5px 2px rgba(0,0,0,0.75);
        border-radius: 50%;
    }
`