import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { resetForm } from '../../actions/appActions';
import Layout from '../Layout';

const Galeria = (props) => {

  const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/',
      description: 'Acá hay un auto de carreras muy grande'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/',
      description: 'Esta es la descripción larga de la imagen. Quiero que no entre y que ocupe al menos 2 líneas en la imagen'
    }
  ]

  return (
    <Layout>
      <div style={{ marginTop: '2rem' }}></div>
      <Container>
        <ImageGallery items={images} />
      </Container>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    sent: state.appReducer.sent,
    errorCaptcha: state.appReducer.errorCaptcha,
    isVerified: state.appReducer.isVerified,
    form: state.appReducer.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSendEmail: () => {
      dispatch(sendEmail());
    },
    onSetFormVal: (field, name) => {
      dispatch(setFormVal(field, name));
    },
    onSetVerified: () => {
      dispatch(setVerified());
    },
    onSetErrCaptcha: () => {
      dispatch(setErrCaptcha());
    },
    onResetForm: () => {
      dispatch(resetForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Galeria);