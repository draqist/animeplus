import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "./firebase";
// import { forgotPassword, logInType, regUser } from "./validations";
import { forgotPassword, logInType, regUser } from "./types";

const registerUser = async (req: regUser, width: number) => {
  const { email, password, firstName, lastName, phoneNumber, authType } = req;

  if (width >= 413 && authType === "google") {
    try {
      await signInWithPopup(auth, provider).then((sessionResult) => {
        const credential = GoogleAuthProvider.credentialFromResult(sessionResult);
        const user = sessionResult.user;
        const { displayName } = user;
        // @ts-ignore
        const [firstName, lastName] = displayName?.split(" ");
        return { user, credential };
      });
    } catch (error) {
      console.log(error);
    }
  } else if (width < 413 && authType === "google") {
    try {
      await signInWithRedirect(auth, provider).then(() => {
        getRedirectResult(auth).then((response) => {
          const user = response?.user;
          console.log(user);
          return user;
        });
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user;
      });
    } catch (error) {
      console.log(error);
      return;
    }
  }
};

const logInUser = async (req: logInType) => {
  const { email, password } = req;
  try {
    await signInWithEmailAndPassword(auth, email, password).then((loggedResponse) => {
      const user = loggedResponse.user;
      if (!user.emailVerified) {
        sendEmailVerification(user).then((response) => {
          console.log(response);
        });
      }
      return user;
    });
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (req: forgotPassword) => {
  const { email } = req;
  try {
    await sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      console.log("Password reset");
    });
  } catch (error) {
    // @ts-ignore
    const errorCode = error?.code;
    // @ts-ignore
    const errorMessage = error?.message;
    return errorMessage;
  }
};

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      console.log(token);
      // IdP data available using getAdditionalUserInfo(result)
      return { user, token };
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export { logInUser, registerUser, signInWithGoogle, forgotPassword };
