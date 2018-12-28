import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { testAction } from '../../actions/appActions';
import Layout from '../Layout';
import styles from './Home.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  useTransform: false,
};

class Home extends Component {

  render() {
    const { counterTestAction } = this.props;

    console.log("Si redux esta funcionando debería ser 12: ->", counterTestAction);

    return (
      <Layout>
        <Container>
          <Grid stackable celled='internally'>
            <Grid.Row>
              <Grid.Column>
                <div className={styles.container}>
                  <p className={styles.content}>ACA VAN TODAS LAS IMAGENES</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  return {
    counterTestAction: state.appReducer.counterTestAction
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTestAction: () => {
      dispatch(testAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);