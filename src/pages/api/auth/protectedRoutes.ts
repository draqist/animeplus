import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        // authorization: {
        //   params: {
        //     prompt: "consent",
        //     access_type: "offline",
        //     response_type: "code",
        //   },
        // },
      }),
    ],
  });

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  res.status(200).json({ name: "hello from protected" });
}
