import { getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "./firebase";
import { regUser } from "./types";

const registerUser = async (req: regUser, width: number) => {
  const { authType } = req;

  // if (width >= 413 && authType === "google") {
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
  // } else if (width < 413 && authType === "google") {
  //   try {
  //     await signInWithRedirect(auth, provider).then(() => {
  //       getRedirectResult(auth).then((response) => {
  //         const user = response?.user;
  //         console.log(user);
  //         return user;
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};

const signInWithGoogleTs = async () => {
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

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};
export { registerUser, signInWithGoogle };
