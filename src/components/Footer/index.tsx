import React from "react";

import * as S from "./styles";

import ContactUs from "./ContactUs";

const Footer: React.FC = () => {
  return (
    <>
      <ContactUs />
      <S.Wrapper>
        {/* <div className="container-footer">
          <div className="logo">
            <img src="logo.svg" />
          </div>
        </div> */}
      </S.Wrapper>
    </>
  );
};

export default Footer;
