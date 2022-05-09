import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth as authAction } from '../../../redux/actions/authActions';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import firebaseAuthSetting from '../../../config/firebase';
import ModalLoginForm from '../ModalLoginForm';
import { useHistory } from 'react-router-dom';
//import WrappedRoutes from '../../../containers/App/Router/WrappedRoutes';

initializeApp(firebaseAuthSetting);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const name = user.displayName ? user.displayName : user.email;
    const avatar = user.photoURL ? user.photoURL : '';
    console.log("The user is logged in");
    const uid = user.uid;
    // ...kln
  } else {
    // User is signed out
    console.log("The user is not logged in");
    // ...
  }
});
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com').setCustomParameters({
  prompt: 'consent',
  tenant: firebaseAuthSetting.microsoftTenantId,
});
const signIn = async (provider = null, userProps = { name: '', password: '' }) => {
  if (provider) {
    return signInWithPopup(auth, provider);
  }
  return signInWithEmailAndPassword(auth, userProps.username, userProps.password);
};

const withAuthFirebase = (WrappedComponent) => {
  const HocAuth = (props) => {
    const { login } = props;
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const closeModal = () => {
      setError('');
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
      setError('');
    };

    const onLogin = (provider = null) => async (userProps) => {
      setError('');
      try {
        const { user } = await signIn(provider, userProps);
        const name = user.displayName ? user.displayName : user.email;
        const avatar = user.photoURL ? user.photoURL : '';
        login({ name, avatar });
        history.push('/e_commerce_dashboard');
      } catch (e) {
        setError(e.message);
      }
    };

    return (
      <div className="account">
        <ModalLoginForm
          title="Please Sign in"
          isOpen={isOpen}
          error={error}
          form="log_in_modal"
          closeModal={closeModal}
          onLogin={onLogin()}
          onFacebookLogin={onLogin(facebookProvider)}
          onGoogleLogin={onLogin(googleProvider)}
          onMicrosoftLogin={onLogin(microsoftProvider)}
        />
        <WrappedComponent {...props} changeIsOpenModalFireBase={openModal} />
      </div>
    );
  };

  HocAuth.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    login: PropTypes.func.isRequired,
  };

  return connect(null, { login: authAction })(withRouter(HocAuth));
};

export default withAuthFirebase;
