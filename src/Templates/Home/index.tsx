import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";
import Title from "../../components/Title";
import Cardes from "../../components/Cardes";
import Clients from "../../components/Clients";
import CardsComponent from "../../components/CardsComent";
import Footer from "../../components/Footer";
import ColaborattorSlider from "../../components/CollaboratorSlider";
import { Comments } from "../../components/CardsComent/constants";
import Parceiros from "../../components/Parceiros";
import { Container } from "../../components/Container";

import * as S from "./styles";

export default function HomeTemplate() {
  return (
    <S.Wrapper>
      <header>
        <GlobalStyle />
        <title>Agência Premium</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <header>
        <NavBar />
      </header>

      <main>
        <Header />
      </main>

      <Container>
        <section id="services">
          <Title
            name="Nossos Serviços"
            image="line_botton.svg"
            description="Desempenhamos diversas atividades e funções que tem como objetivo trazer seu negócio para o online, ou fazer com que ele ganha mais força e atraia potênciais clientes."
          />
          <Cardes />
        </section>
      </Container>

      <Container>
        <section>
          <Title
            name="Nossos Clientes"
            description="Estes são alguns de nossos clientes."
            image="line_botton.svg"
          />
          <Clients />
        </section>
      </Container>

      <Container>
        <section className="comment-user">
          {Comments.map((item, index) => {
            return (
              <CardsComponent
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                align={item.align}
              />
            );
          })}
        </section>
      </Container>

      <Container>
        <section>
          <Title name="Nossos Parceiros" image="line_botton.svg" />
          <Parceiros />
        </section>
      </Container>

      <Container>
        <section className="collaborators" id="vagas">
          <Title name="Nossas Vagas" image="line_botton.svg" />
          <ColaborattorSlider />
        </section>
      </Container>
      <footer>
        <Footer />
      </footer>
    </S.Wrapper>
  );
}
