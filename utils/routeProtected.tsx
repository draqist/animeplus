import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export function withPublic(Component) {
  return function WithPublic(props) {
    const [user] = useAuthState(auth);
    const router = useRouter();

    if (user) {
      router.replace("/home");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const router = useRouter();
    const [user] = useAuthState(auth);

    if (user) {
      return <Component auth={auth} {...props} />;
    } else if (user === null) {
      router.replace("/login");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}
