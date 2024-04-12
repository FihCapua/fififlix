import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;

    & + & {
        margin: 10px 0;
    }

    .checkbox-form {
        width: 35%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        align-items: center;

        input {
            width: 25px;
        }

        span {
            margin: 10px 15px;
            font-size: 12px;
        }
    }

    .input-comments {
        margin-bottom: 35px;
    }
`;
