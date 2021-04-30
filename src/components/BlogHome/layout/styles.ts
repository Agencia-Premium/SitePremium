import styled from 'styled-components';

export const LayoutStyle = styled.div`
  width: 100%;
  padding: 24px;

  .title-container{
    display: flex;
    align-items: center;

    h2 {
      color: #dfdfdf;
      font-family: 'Inter', sans-serif;
      font-size: 4.2rem;
      font-weight: bold;
      margin-right: 1.8rem;
    }

    figure {
      width: 2px;
      height: 24px;
      background: #dfdfdf;
      margin-right: 1.8rem;
      margin-top: 0.8rem;
    }
    
    h3 {
      color: #dfdfdf;
      font-family: 'Inter', sans-serif;
      font-size: 2.4rem;
      font-weight: normal;
      margin-right: 1.8rem;
      line-height: 3rem;
      margin-top: 0.8rem;
    }
  }

  .posts-list{
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
  }

`;