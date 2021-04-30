import styled from 'styled-components';

export const PostCardStyles = styled.div`
  width: 100%;
  max-width: 328px;
  height: 100%;
  /* margin: 0 auto; */

  img {
    width: 100%;
    border-radius: 8px;
  }

  .middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    span {
      font-size: 1.8rem;
      font-weight: bold;
      color: #F8AF30;
      font-family: 'Ubuntu', sans-serif;
    }

    span.tag{
      background: #F8AF30;
      border-radius: 4px;
      color: #222222;
      padding: 4px;
      font-size: 1.4rem;
      font-family: 'Ubuntu', sans-serif;
    }
  }

  main {
    p {
      font-size: 2.7rem;
      line-height: 3.2rem;
      color: #f7f7f7;
      font-family: 'Ubuntu', sans-serif;
      font-weight: normal;
    }

    span {
      margin-top: 12px;
      color: #ABABAB;
      font-size: 1.6rem;
      line-height: 2.0rem;
      font-family: 'Ubuntu', sans-serif;
    }
  }
`;