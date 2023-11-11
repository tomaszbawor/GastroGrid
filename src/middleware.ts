import {withClerkMiddleware} from "@clerk/nextjs";
import {NextResponse} from "next/server";

export default withClerkMiddleware(() => {
    console.log("Auth middleware running ");
    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

