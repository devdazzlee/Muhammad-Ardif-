import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    text-align: center;
    height: 100vh;
    margin: 0 auto;
    max-width: 532px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 20px;
    width: 100%;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #2e2e2e;
`;

export const NavItem = styled.button`
    color: #fff;
    font-weight: 600;
    background-color: #00b840;
    border: none;
    padding: 12px 50px;
    cursor: pointer;
    &:hover {
        background-color: #00a640;
    }
`;
