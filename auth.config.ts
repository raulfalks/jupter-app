import type { NextAuthConfig } from "next-auth";

/**
 * * Contains the configurations options for the NextAuth, such as:
 * @pages options: specify the route for custom sign-in, sign-out, and error pages
 * @callbacks options: called before a request is completed to verify the request, via Next.js Middleware
 * @providers options: an array where you list different login options, such as the `Credentials` 
 */
export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log(auth?.user);
            
            const isLoggedIn = !!auth?.user;

            const isOnDeals = nextUrl.pathname.startsWith("/deals");

            if (isOnDeals) {
                if (isLoggedIn) return true;

                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/deals", nextUrl));
            }

            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;
