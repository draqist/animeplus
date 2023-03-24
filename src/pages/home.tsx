import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "utils/firebase";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  // const { token, user } = signInWithGoogle
  
  return <div>{user.displayName} </div>;
};

export default Home;
