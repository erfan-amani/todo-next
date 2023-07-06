import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const type = request.nextUrl.searchParams.get("type");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("type", type);

  return NextResponse.next({ headers: requestHeaders });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
