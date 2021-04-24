import React from "react";
import { useRouter } from "next/router";
import GlobalStyle from "../styles/global";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  ContainerProject,
  Gallery,
  Ourprj,
} from "../components/ExtendedProject/styles";
import { Card } from "../components/ImageProject/constants";
import ImageProject from "../components/ImageProject";

export default function project() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="container">
      <GlobalStyle />
      <header>
        <title>O projeto</title>
        <link rel="icon" href="favicon.ico" />
      </header>

      <nav>
        <NavBar />
      </nav>

      <main>
        <ContainerProject>
          <div className="ContainerProj">
            <div className="Right">
              <h2>Project name</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="Left">
              <img className="imagem" src="predioxt.webp" />
            </div>
          </div>
        </ContainerProject>
      </main>

      <section className="Gallery">
        <Gallery>
          <h2>Galeria</h2>

          <div className="gallery">
            <img src="gallery.webp" alt="foto da galeria" />
            <img src="gallery.webp" alt="foto da galeria" />
            <img src="gallery.webp" alt="foto da galeria" />
          </div>

          <h3>Veja outros projetos</h3>
        </Gallery>
      </section>
      <section className="secGalleryproject">
        <Ourprj>
              {Card.map((item, index) => {
                return (
                  <ImageProject
                    key={index}
                    imagem={item.imagem}
                    titulo={item.titulo}
                    subTitulo={item.subTitulo}
                    arrow="arrow.svg"
                  />
                );
              })}
          </Ourprj>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
