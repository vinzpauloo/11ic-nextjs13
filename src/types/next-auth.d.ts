import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        acdivo: {
            advP: string
        }
    }
}