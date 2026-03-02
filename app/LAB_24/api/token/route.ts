import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Token store (in-memory) - in production, use a real database
const tokenStore: Map<string, { expiresAt: number; user: string }> = new Map();

// Token expiry time - 1 hour in milliseconds
const TOKEN_EXPIRY = 60 * 60 * 1000;

/**
 * POST /api/token
 * Generates a new authentication token
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const user = body.user || 'anonymous';

        // Generate token
        const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const expiresAt = Date.now() + TOKEN_EXPIRY;

        // Store token
        tokenStore.set(token, { expiresAt, user });

        return NextResponse.json(
            {
                token,
                expiresAt: new Date(expiresAt).toISOString(),
                user,
                expiresIn: TOKEN_EXPIRY / 1000 // in seconds
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to generate token' },
            { status: 400 }
        );
    }
}

/**
 * GET /api/token
 * Validates if a token is still valid
 */
export async function GET(request: NextRequest) {
    try {
        const token = request.headers.get('x-auth-token') ||
                      request.cookies.get('authToken')?.value;

        if (!token) {
            return NextResponse.json(
                { error: 'No token provided' },
                { status: 401 }
            );
        }

        const storedToken = tokenStore.get(token);

        if (!storedToken) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 401 }
            );
        }

        const isExpired = storedToken.expiresAt < Date.now();

        return NextResponse.json({
            token,
            valid: !isExpired,
            expiresAt: new Date(storedToken.expiresAt).toISOString(),
            user: storedToken.user,
            timeRemaining: Math.max(0, storedToken.expiresAt - Date.now())
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Token validation failed' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/token
 * Revokes/invalidates a token
 */
export async function DELETE(request: NextRequest) {
    try {
        const token = request.headers.get('x-auth-token') ||
                      request.cookies.get('authToken')?.value;

        if (!token) {
            return NextResponse.json(
                { error: 'No token provided' },
                { status: 400 }
            );
        }

        // Remove token from store
        const deleted = tokenStore.delete(token);

        if (!deleted) {
            return NextResponse.json(
                { error: 'Token not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'Token revoked successfully',
            token
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Token revocation failed' },
            { status: 500 }
        );
    }
}
