import React, { useState, useEffect } from "react";
import GlobalStyle from "../styles/global";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleProject from "../components/TitleProject";
import Coments from "../components/Coments";
import { Card } from "../components/ImageProject/constants";
import ImageProject from "../components/ImageProject";
import api from "../services/api";

export interface I_ProjectType {
  id: string;
  title: string;
  short_description: string;
  description: string;
  image: {
    url: string;
    name: string;
  };
}

export default function ourproject({ projects }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<I_ProjectType[]>();

  useEffect(() => {
    async function listProjects() {
      await api
        .get("/projects")
        .then((result) => {
          const responseData = result.data as I_ProjectType[];

          const arrayFormatedData = responseData.map((project) => {
            const object: I_ProjectType = {
              id: project.id,
              title: project.title,
              short_description: project.short_description,
              description: project.description,
              image: {
                name: project.image.name,
                url: project.image.url,
              },
            };

            return object;
          });

          setData(arrayFormatedData);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoaded(false);
        });
    }
    listProjects();
  }, []);

  return (
    <div className="container">
      <GlobalStyle />
      <header>
        <title>Nossos Projetos</title>
        <link rel="icon" href="favicon.ico" />
      </header>

      <header>
        <NavBar />
      </header>
      <section>
        <TitleProject
          subtitle="Alguns de nossos"
          title="projetos"
          imagem="vectorProject.svg"
        />
      </section>

      <main>
        <Coments name="Nosso projetos" />
      </main>

      <section className="gallery">
        {isLoaded && (
          <>
            {data.map((item) => {
              return (
                <ImageProject
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  short_description={item.short_description}
                  description={item.description}
                />
              );
            })}
          </>
        )}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps({}) {
  const res = await api.get("/projects");
  const projects = await res.data;

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects },
  };
}
