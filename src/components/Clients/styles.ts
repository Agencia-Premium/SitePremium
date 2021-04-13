import styled from "styled-components";

export const ClientsSection = styled.section`
  /* background: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%); */

  .container-clients {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;

    .logo-list {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
    }
  }
`;
