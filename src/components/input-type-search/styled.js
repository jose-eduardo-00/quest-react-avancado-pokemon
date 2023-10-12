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

    #type-pokemon {
        text-align: center;
        padding: 5px 0;
        border: 1px solid #000;
    }

    .reload {
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

    #search:active {
        transform: scale(0.8);
    }
`   