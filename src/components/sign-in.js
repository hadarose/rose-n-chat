import firebase from "firebase/app";

export const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <img
      onClick={signInWithGoogle}
      className="sign-in-with-google"
      src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
    />
  );
};

export default SignIn;
