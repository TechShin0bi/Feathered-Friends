import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // In a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create the user in the database
    // const existingUser = await db.user.findUnique({ where: { email } })
    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: 'User already exists' },
    //     { status: 400 }
    //   )
    // }
    // const hashedPassword = await hash(password, 10)
    // const user = await db.user.create({
    //   data: { name, email, password: hashedPassword }
    // })

    // Mock tokens - in a real app, generate proper JWT tokens
    const tokens = {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token'
    }

    // Mock user data - replace with actual user data from your database
    const user = {
      id: '1',
      name,
      email
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
    console.error('Signup error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
