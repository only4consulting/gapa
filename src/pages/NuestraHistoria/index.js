import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import Layout from '../Layout';

const NuestraHistoria = () => {
  return (
    <Layout>
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <p style={{ fontSize: '2rem' }}>
                  Asociación Civil GAPA es una ONG con mas de <span style={{ color: "green" }}>6 años de historia </span>
                  en San Nicolás. Hemos ayudado y brindado atención médica a mas de
                <span style={{ color: "green" }}> 1000 animales</span> y hemos realizado mas de
                <span style={{ color: "green" }}> 30 jornadas</span> de castración masiva y solidaria.
              </p>
              </Grid.Column>
              <Grid.Column width={10}>
                <Container text>
                  <Header as='h2'><span style={{ color: "green" }}>NUESTRA HISTORIA</span></Header>
                  <p>
                    Asociación Civil GAPA es una ONG sin fines de lucro creada en el año 2012 por un grupo
                    de personas amantes de los animales, que se unieron  para formar una institución que velara
                    por el respeto a la vida animal. Con su trabajo GAPA ha hecho posible que cientos de perros
                    y gatos, muchos de ellos en situaciones de abandono y maltrato reciban tratamiento adecuado y
                    la oportunidad de tener una vida digna, gracias a la labor conjunta de personas comprometidas,
                    quienes realizan a diario un gran esfuerzo con el único fin de promover la cultura de respeto
                    y amor hacia los animales.
            </p>
                  <p>
                    Hoy, 6 años después de nuestra primera reunión y mirando hacia atrás para ver el camino recorrido,
                    nos enorgullece ver todo lo que hemos logrado, más de mil animales castrados, cientos de tratamientos
                    de vacunación y atención veterinaria específica,  más de 30 jornadas de castración masiva y solidaria
                    hacen que estemos orgullosos de nuestra historia y tengamos la firme convicción de ir por más. En esta
                    nueva etapa en la vida de GAPA como asociación civil, con personería jurídica (matricula nº45038),
                    pretendemos crecer en actividades que hasta ahora tuvimos algo relegadas, no por falta de ganas ni
                    disposición, sino por creer que para actuar seriamente en el desarrollo de proyectos que involucren
                    a la sociedad, se debe contar con una planificación, organización y puesta en marcha la altura de la
                    circunstancia. Con todo esto en mente, afrontamos este nuevo horizonte en la vida de GAPA, seguros
                    de que, con la ayuda incondicional de nuestros integrantes, un importante grupo de proteccionistas
                    trabajando junto a nosotros  y muchos ciudadanos que nos ayudan a diario física y económicamente,
                    podamos lograrlo.
            </p>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default NuestraHistoria;
