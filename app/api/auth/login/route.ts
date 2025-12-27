import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // In a real app, you would validate the credentials against your database
    // This is a simplified example
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Mock user data - replace with actual database lookup
    // const user = await db.user.findUnique({ where: { email } })
    // if (!user || !await compare(password, user.password)) {
    //   return NextResponse.json(
    //     { message: 'Invalid credentials' },
    //     { status: 401 }
    //   )
    // }

    // Mock tokens - in a real app, you would generate proper JWT tokens
    const tokens = {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token'
    }

    // Mock user data - replace with actual user data from your database
    const user = {
      id: '1',
      email,
      name: 'Test User'
    }

    // Set HTTP-only cookie with the access token
    cookies().set('auth-token', tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })

    return NextResponse.json({
      user,
      tokens
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
