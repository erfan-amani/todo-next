import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // const token = request.cookies.get("next-auth.session-token")?.value;

  const requestHeaders = new Headers(request.headers);
  // token && requestHeaders.set("Authorization", token);

  return NextResponse.next({ headers: requestHeaders });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
