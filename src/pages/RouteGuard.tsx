import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebase";
import Login from "./login";

const RouteGuard = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }
  return children;
};

export default RouteGuard;
