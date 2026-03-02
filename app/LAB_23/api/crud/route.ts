// In-memory array storage for CRUD operations
let itemsArray = [
    { id: 1, name: 'Next.js', description: 'React framework for production' },
    { id: 2, name: 'TypeScript', description: 'Typed superset of JavaScript' },
    { id: 3, name: 'Route Handlers', description: 'API routes in Next.js' }
];

let nextId = 4;

export async function GET() {
    return Response.json(itemsArray);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        if (!body.name) {
            return Response.json(
                { error: 'Name is required' },
                { status: 400 }
            );
        }

        const newItem = {
            id: nextId++,
            name: body.name,
            description: body.description || ''
        };

        itemsArray.push(newItem);
        return Response.json(newItem, { status: 201 });
    } catch (error) {
        return Response.json(
            { error: 'Invalid request format' },
            { status: 400 }
        );
    }
}
