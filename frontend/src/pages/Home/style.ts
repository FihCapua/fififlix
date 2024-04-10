import styled from "styled-components";

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    display: flex;
    justify-content: center;

    input {
        width: 70%;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 25px;
        height: 50px;
        padding: 10px;
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
`;

export const HeaderMovies = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: bold;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primaryText};
    }

    a {
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.secondary.dark};
        border-radius: 4px;
        padding: 8px 16px;
        transition: all 0.2s ease-in;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary.main};
            color: ${({ theme }) => theme.colors.primaryText};
        }
    }
`;

export const ListMovies = styled.div`
    margin-top: 24px;

    header {
        button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;

            span {
                margin-right: 8px;
                color: ${({ theme }) => theme.colors.primaryText};
                font-weight: bold;
            }

            img {
                width: 15px;
            }
        }
    }

`;

export const Card = styled.div`
    margin-top: 40px;

    .react-multi-carousel-track {
        gap: 200px !important;
    }
`;

export const CarouselCardContainer = styled.div`
    margin: 5px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 10px;
    width: 390px;
    height: 650px;
    margin-bottom: 30px;
`;

export const CarouselCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        text-align: center;
        margin: 10px 0 20px 0;
    }

    img {
        width: 150px;
        height: 200px;
        margin: 0 auto;
    }
`;

export const MoviesDetails = styled.div`
    margin-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 6px;
    align-items: end;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-style: normal;
        font-weight: bold;
    }
`;

export const MoviesResume = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    span {
        font-style: normal;
        font-weight: bold;
    }

    img {
        width: 20px;
        height: 20px;
    }

    .watched-movie {
        margin-left: 60px;
    }
`;

export const StarRating = styled.div`
    width: 100%;
    margin-top: 15px;
    padding: 0 15px;

    img {
        width: 20px;
        height: 20px;
    }
`;

export const MovieComments = styled.div`
    margin: 15px 10px;
    height: 90px;

    span {
        font-family: 11px;
        font-style: italic;
    }
`;

export const HoldMovies = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    button {
        background: transparent;
        border: none;
    }
`;
