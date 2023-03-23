import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - Pocket</title>
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
          <Button type="submit" color="cyan" className="mt-8 w-full">
            Sign in to account
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            >
              <span className="mr-5">Sign in with Twitter</span>
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
