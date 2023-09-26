import styled from 'styled-components'


export const Section = styled.section`
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px 0;
        gap: 25px;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding: 30px;
            border: 5px solid #ffff33;
            border-radius: 10px;
            box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.75);
            font-family: 'Poppins', sans-serif;
        }

        div img {
            background-color: rgba(233, 233, 233, 0.1);
            border-radius: 10px;
        }
        
        div p {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            border-bottom: 1px solid #fff;
        }
    `
