import React from 'react';
import { Container, Header, Grid, List, Image, Icon } from 'semantic-ui-react';
import Layout from '../Layout';
import lindsay from '../../images/lindsay.png';
import matthew from '../../images/matthew.png';
import rachel from '../../images/rachel.png';

const ComisionDirectiva = () => {
  return (
    <Layout>
      <div style={{ marginTop: '2rem' }}></div>
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <p style={{ fontSize: '2rem' }}>
                Estos son los miembres que conforman la comisión directiva de <span style={{ color: "green" }}>GAPA </span>
                en San Nicolás.
              </p>
            </Grid.Column>
            <Grid.Column width={10}>
              <Container text>
                <Header as='h2'><span style={{ color: "green" }}>MIEMBROS</span></Header>
                <List relaxed>
                  <List.Item>
                    <Image avatar src={lindsay} />
                    <List.Content>
                      <List.Header as='a'>Tina Corallo</List.Header>
                      <List.Content>Presidenta de la ONG</List.Content>
                      <List.Description>
                        Es veterinaria desde hace 25 años. Especialista en castraciones.
                     </List.Description>
                      <List.Content><Icon name="phone" />0336-154555555</List.Content>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={matthew} />
                    <List.Content>
                      <List.Header as='a'>Cristian de la Sota</List.Header>
                      <List.Content>Tesorero</List.Content>
                      <List.Description>
                        Hace magia con la plata.
                     </List.Description>
                      <List.Content><Icon name="phone" />0336-154346098</List.Content>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={rachel} />
                    <List.Content>
                      <List.Header as='a'>Ayelén Mándola</List.Header>
                      <List.Content>Encargada de castraciones</List.Content>
                      <List.Description>
                        Es especialista en castraciones.
                     </List.Description>
                      <List.Content><Icon name="phone" />0336-154628963</List.Content>
                      <List.Content><Icon name="mail" />aye@gmail.com</List.Content>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={lindsay} />
                    <List.Content>
                      <List.Header as='a'>Tina Corallo</List.Header>
                      <List.Content>Presidenta de la ONG</List.Content>
                      <List.Description>
                        Es veterinaria desde hace 25 años. Especialista en castraciones.
                     </List.Description>
                      <List.Content><Icon name="phone" />0336-154346098</List.Content>
                    </List.Content>
                  </List.Item>
                </List>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ComisionDirectiva;
