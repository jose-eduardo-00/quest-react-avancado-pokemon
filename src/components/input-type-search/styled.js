import { styled } from "styled-components";

export const InputSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 0px 5px;
    position: relative;
    cursor: pointer;

    input {
        text-align: center;
        padding: 5px;
        border: 1px solid #000;
    }

    #all {
        transition: all 0.2s ease;
    }

    .loading {
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

    #span {
        border: 1px solid #000;
        border-radius: 10px;
        background-color: #eeeeee;
        font-weight: 500;
        z-index: 2;
        padding: 3px 25px;
        position: absolute;
        transition: all 0.6s ease;
        overflowY: hidden;
        visibility: hidden;
        top: 20px;
    }
`   