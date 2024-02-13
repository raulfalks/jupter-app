import type { NextAuthConfig } from 'next-auth';


export enum Routes {
    Deals = "/deals",
    DealsOnboard = "/deals/onboard",
    SignIn = "/"
}


export function getAuthorization(
    pathname: string,
    token?: string,
    role?: string
) {
    switch (pathname) {
        case Routes.Deals.toString():
            if (token && role?.includes("Investor")) return true;
            return false;

        case Routes.DealsOnboard.toString():
            if (token && role?.includes("Founder")) return true;
            return false;

        case Routes.SignIn.toString():
            if (token && role) return false;
            return true;
            
        default:
            break;
    }
}

 
export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        /**
         * * The `authorized` method is used to verify if the request if authorized
         * * to access a page, via Next.js Middleware.
         * @param auth      Contains the user's session.
         * @param request   contains the incoming request.
         * @returns Logged in users are authenticated, otherwise they're redirected to sign-in page.
         */
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isAuthorized = getAuthorization(
                nextUrl.pathname, 
                auth?.user.token,
                auth?.user.role?.toString());

            if (isAuthorized) return true;

            if (isLoggedIn && auth.user.token) {
                if (auth.user.role?.includes("Investor")) {
                    return Response.redirect(new URL('/deals', nextUrl));
                }
                return Response.redirect(new URL('/deals/onboard', nextUrl));
            }

            return false;
        },
        async signIn({ user }) {
            if (user && user.token && user.id && user.role) return true;

            return false;
        },
        async session({ session, token }) {
            try {
                if (token && session.user) {
                    session.user.role = token.role;
                    session.sessionToken = token.token;
                    session.user.token = token.token;
                    session.userId = token.id!;
                    session.expires = token.expiration!;
                }

                return session;
            } catch (error) {
                throw new Error('Failed to use the session callback.');
            }
        },
        async jwt({ token, user }) {
            try {
                if (user) {
                    token.role = user.role;
                    token.token = user.token;
                    token.id = user.id;
                    token.expiration = user.expiration;
                }
                
                return token;
            } catch (error) {
                throw new Error('Failed to use the jwt callback.');
            }
        }
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;



