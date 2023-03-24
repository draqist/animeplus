import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";
import { signInWithGoogle } from "../../utils/auth";

function Login() {
  let router = useRouter();

  const createUser = async () => {
    try {
      await signInWithGoogle().then((res) => {
        console.log(res);
        router.push("/home");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Sign In - AnimePlus</title>
      </Head>
      <AuthLayout
        title="Sign in to account"
        subtitle={
          <>
            Don’t have an account?{" "}
            <Link href="/register" className="text-cyan-600">
              Sign up
            </Link>{" "}
            for a free trial.
          </>
        }
      >
        <div className="mb-6 text-center">
          <button
            onClick={() => createUser()}
            className="inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
          >
            <span className="pr-4">Sign in with Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-8 w-8" viewBox="0 0 48 48">
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2  text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>
        <form>
          <div className="space-y-6">
            <TextField label="Email address" id="email" name="email" type="email" autoComplete="email" required />
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <Button disabled type="submit" color="cyan" className="mt-8 w-full">
            Sign in to account
          </Button>
        </form>
      </AuthLayout>
    </>
  );
}

export default Login;
