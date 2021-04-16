import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("Vector 2.svg");
    background-position: -119px -90px;
    background-size: cover;
    margin-bottom: 100px;

`
export const BkgContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("Vector 1.svg");
    background-position: -327px -4px;
    background-size: cover;
    display: flex;
    justify-Content: center;
    align-items: center;
    position: relative;
`

export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 8%;
    top: 26px;
`
export const Right = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    right: 17%;
    bottom: 40px;
    top: -52px;

    h1 {
        font-size: 4.3rem;
        color: #ffffff;
        font-family: "Inter";
        text-align: right;
        font-weight: 500;
        line-height: 70px;
    }
    span {
        font-weight: 700;
        font-size: 9rem;
    }
`