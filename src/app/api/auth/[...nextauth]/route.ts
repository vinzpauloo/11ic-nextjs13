// ** Next Auth Imports
import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// ** Lib Imports
import request from '../../../../lib/request'

// ** Utils Imports
import { encrypt } from '../../../../utils/encryption'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                ipaddress: { label: 'ipaddress', type: 'text' },
                fp: { label: 'fp', type: 'text' },
                device: { label: 'device', type: 'number' },
                player_id: { label: 'player_id', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            authorize: async (credentials: Record<"ipaddress" | "fp" | "device" | "player_id" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) => {
                const { player_id, password, ipaddress, fp, device } = credentials || {};

                // Convert device to a number
                const deviceAsNumber = Number(device);

                // Construct the data to be sent to the backend
                const dataToSend = { player_id, password, ipaddress, fp, device: deviceAsNumber };

                try {
                    const response = await request({
                        url: '/login',
                        method: 'POST',
                        data: dataToSend,
                        headers: { 'Content-Type': 'application/json' }
                    });

                    const { code, data } = response;

                    // If login successful, create a "user" object to pass along to NextAuth
                    if (code === 1 && data) {
                        console.log(`SUCCESS TOKEN@@@`, data)
                        const encryptedData = encrypt(data);
                        console.log(`ENCRYPT`, encryptedData)
                        const acdivo = { id: "1", advP: encryptedData };
                        return acdivo;
                    } else {
                        return null;
                    }
                } catch (e: any) {
                    console.log(`ERROR`, e)
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    debug: false, // set to true whilst in development
    // secret: process.env.NEXTAUTH_SECRET as string, // local
    secret: process.env.NEXT_PUBLIC_SECRET, // production
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.acdivo = token as any
            return session
        }
    }
}

// ** IMPORTANT for NextAuth to work as of NextJS 13 App Router **
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };