import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GlobalStyle from "../../styles/global";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  ContainerProject,
  Gallery,
  Ourprj,
} from "../../components/ExtendedProject/styles";
import { Card } from "../../components/ImageProject/constants";
import ImageProject from "../../components/ImageProject";
import api from "../../services/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { I_ProjectType } from "../ourproject";

import { Container } from "../../components/Container";

type Projects = {
  mainProject: I_ProjectType;
  othersProjects: I_ProjectType[];
};

export default function project({ mainProject, othersProjects }: Projects) {
  const router = useRouter();
  const { pid } = router.query;
  // console.log(data)

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
          <Container>
            <div className="ContainerProj">
              <div className="Right">
                <h2>{mainProject.title}</h2>
                <p>{mainProject.description}</p>
              </div>
              <div className="Left">
                <img
                  className="imagem"
                  src={`http://localhost:1337${mainProject.image.url}`}
                />
              </div>
            </div>
          </Container>
        </ContainerProject>
      </main>
      <section className="Gallery">
        <Gallery>
          <h2>Galeria</h2>
          <Container>
            <div className="gallery">
              {mainProject.gallery.map((item, index) => (
                <figure>
                  <img
                    key={index}
                    src={`http://localhost:1337${item.url}`}
                    alt={item.name}
                  />
                </figure>
              ))}
            </div>
          </Container>

          <h3>Veja outros projetos</h3>
        </Gallery>
      </section>
      <section className="secGalleryproject">
        <Container>
          <Ourprj>
            {othersProjects.map((item, index) => {
              return (
                <ImageProject
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  short_description={item.short_description}
                  description={item.description}
                  href={item.id}
                />
              );
            })}
          </Ourprj>
        </Container>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { pid } = ctx.params;

  const { data: mainProject } = await api.get(`/projects/${pid}`);
  const { data: othersProjects } = await api.get(
    `/projects?_limit=3&_sort=id:DESC`
  );

  return {
    props: { mainProject, othersProjects },
  };
};
