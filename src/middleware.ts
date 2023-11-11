import { withClerkMiddleware} from "@clerk/nextjs";
import {type NextRequest, NextResponse} from "next/server";

// export default authMiddleware({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withClerkMiddleware((req: NextRequest) => {
    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

