import type { NextAuthConfig } from 'next-auth';
 
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
            const isOnDashboard = nextUrl.pathname.startsWith('/deals');

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/deals', nextUrl));
            }

            return true;
        },
        async signIn({ user }) {
            if (user && user.token && user.id) return true;

            return false;
        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        async session({ session, token }) {
            try {
                if (token && session.user) {
                    session.user.role = token.role;
                    session.sessionToken = token.token;
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
