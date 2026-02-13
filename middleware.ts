import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const { pathname, searchParams } = url

    // Handle /index.php requests
    if (pathname === '/index.php' || pathname === '/') {
        const v = searchParams.get('v')

        if (v) {
            // Map legacy 'v' parameters to new routes
            const lowerV = v.toLowerCase().trim();
            let newPath = '/';

            switch (lowerV) {
                case 'home':
                    newPath = '/';
                    break;
                case '323a':
                    newPath = '/323A';
                    break;
                case '323b':
                    newPath = '/323B';
                    break;
                case '324a':
                    newPath = '/324A';
                    break;
                case '324d':
                    newPath = '/324D';
                    break;
                case '325':
                    newPath = '/325';
                    break;
                case 'caic':
                    newPath = '/caic';
                    break;
                case 'caic_events':
                    newPath = '/caic_events';
                    break;
                case 'caic_events2':
                    newPath = '/caic_events2';
                    break;
                case 'dcc':
                    newPath = '/dcc';
                    break;
                case 'dcc_events':
                    newPath = '/dcc_events';
                    break;
                case 'dcc_events2':
                    newPath = '/dcc_events2';
                    break;
                case 'outdoor':
                    newPath = '/outdoor';
                    break;
                case 'outdoor_events':
                    newPath = '/outdoor_events';
                    break;
                case 'social activity':
                case 'social%20activity':
                    newPath = '/social_activity';
                    break;
                case 'social activity_events':
                case 'social%20activity_events':
                    newPath = '/social_activity_events';
                    break;
                case 'entrepreneurship_club':
                    newPath = '/entrepreneurship_club';
                    break;
                case 'events':
                    newPath = '/events';
                    break;
                case 'lab_advance':
                    newPath = '/lab_advance';
                    break;
                case 'lab_automation':
                    newPath = '/lab_automation';
                    break;
                case 'lab_csl':
                    newPath = '/lab_csl';
                    break;
                case 'lab_database':
                    newPath = '/lab_database';
                    break;
                case 'lab_os':
                    newPath = '/lab_os';
                    break;
                case 'lab_osl':
                    newPath = '/lab_osl';
                    break;
                case 'lab_pm':
                    newPath = '/lab_pm';
                    break;
                case 'lab_virtual':
                    newPath = '/lab_virtual';
                    break;
                case 'student_achievements_all':
                    newPath = '/student_achievements_all';
                    break;
                default:
                    // If no match found, maybe just let it through or 404? 
                    // But existing site might have other pages. 
                    // We'll assume these are all.
                    return NextResponse.next();
            }

            // Rewrite to the new path so the URL bar remains the same if desired, 
            // or Redirect if we want to modernize.
            // Requirement: "Ensuring the preservation of the original URL structure through rewrites and redirects."
            // Rewrite preserves the URL `index.php?v=...` visually but renders the new page.
            if (newPath !== '/') {
                return NextResponse.rewrite(new URL(newPath, request.url));
            }
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
