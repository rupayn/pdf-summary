import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);
    return NextResponse.next();
}