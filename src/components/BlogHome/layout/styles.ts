import styled from 'styled-components';

export const LayoutStyle = styled.div`
  width: 100%;
  padding: 24px;

  .title-container{
    display: flex;
    align-items: center;

    h2 {
      display: block;
      color: #dfdfdf;
      font-family: 'Inter', sans-serif;
      font-size: 4.2rem;
      font-weight: bold;
      margin-right: 1.8rem;
    }

    figure {
      display: block;
      width: 2px;
      height: 24px;
      background: #dfdfdf;
      margin-right: 1.8rem;
      margin-top: 0.8rem;
    }
    
    h3 {
      display: block;
      color: #dfdfdf;
      font-family: 'Inter', sans-serif;
      font-size: 2.4rem;
      font-weight: normal;
      /* margin-right: 1.8rem; */
      line-height: 3rem;
      margin-top: 0.8rem;
    }

    @media(max-width: 780px) {
      flex-direction: column;

      h2 {
        margin-right: 0;
      }
      
      figure {
        width: 90px;
        height: 2px;
        margin-right: 0;
      }
    }
  }

  .posts-list{
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    column-gap: 24px;

    @media(max-width: 1090px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 42px;

      .post-card {
        margin: 0 auto;
      }
    }

    @media(max-width: 780px) {
      display: flex;
      flex-direction: column;
      row-gap: 42px;
      align-items: center;
    }
  }

`;