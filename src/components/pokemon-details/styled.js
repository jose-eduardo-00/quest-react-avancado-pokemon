import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px;
    
    * {
        color: #000;
    }

    section {
        width: 80%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
    }

    #image-pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
    }

    #image-pokemon img {
        background-color: rgba(233, 233, 233, 0.1);
        border-radius: 10px;
        margin: 10px;
    }

    #image-pokemon p {
        text-transform: uppercase;
        color: #fff;
        font-size: 22px;
        font-weight: 500;
        border-bottom: 1px solid #fff;
    }

    #infos-pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px 0;
    }

    h1 {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #000;
        text-transform: uppercase;
        font-size: 20px;
    }

    #types-pokemon {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        gap: 10px;
        background-color: rgba(233, 233, 233, 0.5);
        border-radius: 10px;
    }

    #types-pokemon div {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    #types-pokemon div p {
        text-transform: uppercase;
    }

    #moves-pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        background-color: rgba(233, 233, 233, 0.5);
        padding: 10px;
        border-radius: 10px;
        width: 100%;
    }

    #moves-pokemon div {
        width: 100%;
        display: grid;
        grid-column: 4;
        grid-template-columns: repeat(auto-fit, minmax(100px, auto));
        text-align: center;
        grid-gap: 40px 60px;
        max-height: 110px;
        padding: 10px;
        overflow-y: scroll;
    }
    
    #moves-pokemon div p {
        border-bottom: 1px solid #000;
    }

    #abilities-pokemon {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(233, 233, 233, 0.5);
        padding: 10px;
        border-radius: 10px;
    }

    #abilities-pokemon div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #abilities-pokemon div div {
        display: flex;
        width: 50%;
        flex-direction: column;
        padding: 0 10px;
    }

    #abilities-pokemon div div h2 {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        padding: 10px 0 5px 0;
    } 

    #btn-voltar-home {
        padding: 10px 20px;
        border-radius: 10px;
        transition: 0.6s;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #000;
    }

    #btn-voltar-home:hover {
        filter: invert(1);
    }
`
