// pages/_middleware.ts
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest, event: NextFetchEvent) {

  // return NextResponse.redirect("https://phase-connect.com/")
  return NextResponse.next()
}