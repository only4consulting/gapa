import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { resetForm } from '../../actions/appActions';
import Layout from '../Layout';

const Galeria = (props) => {

  const images = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0220.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0220t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0223.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0223t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0225.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0225t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0226.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0226t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0227.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0227t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0235.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0235t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0244.jpg?alt=media',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/gapaong.appspot.com/o/galeria%2F0244t.jpg?alt=media',
      description: 'En esta imagen estoy haciendo pepito'
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