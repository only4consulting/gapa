import React from 'react';
import { Container, Segment, Header, Grid, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Segment color="green" vertical inverted>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={2} verticalAlign="middle">
            <Link to="/ComisionDirectiva"><Header inverted as='h4' content='COMISIÓN DIRECTIVA' /></Link>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Link to="/Galeria"><Header inverted as='h4' content='GALERÍA' /></Link>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Link to="/QuieroColaborar"><Header inverted as='h4' content='QUIERO COLABORAR' /></Link>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='Seguí a GAPA en las redes sociales' />
            <p>
              <Icon name="facebook" size="big" />
              <Icon name="twitter" size="big" />
              <Icon name="youtube" size="big" />
            </p>
          </Grid.Column>
          <Grid.Column width={5}>
            <List>
              <List.Item>
                <List.Icon name='users' />
                <List.Content>GAPA Asociación Civil (Matrícula nº 45038)</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='marker' />
                <List.Content><a style={{ color: "white" }} href="https://www.google.com/maps/place/Maipu+540,+San+Nicol%C3%A1s+de+Los+Arroyos,+Buenos+Aires/@-33.3381632,-60.2054656,15z/data=!4m13!1m7!3m6!1s0x95b75d7f7143b9fb:0x17f492e77fd7d7b4!2sMaipu+540,+San+Nicol%C3%A1s+de+Los+Arroyos,+Buenos+Aires!3b1!8m2!3d-33.3429999!4d-60.2077426!3m4!1s0x95b75d7f7143b9fb:0x17f492e77fd7d7b4!8m2!3d-33.3429999!4d-60.2077426" target="_blank">Don Bosco 456, San Nicolás de los Arroyos</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                  <a style={{ color: "white" }} href='mailto:mailgapa@mail.com'>mailgapa@mail.com</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
