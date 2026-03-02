// In-memory array storage for CRUD operations
let itemsArray = [
    { id: 1, name: 'Next.js', description: 'React framework for production' },
    { id: 2, name: 'TypeScript', description: 'Typed superset of JavaScript' },
    { id: 3, name: 'Route Handlers', description: 'API routes in Next.js' }
];

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const itemId = parseInt(id);
    const item = itemsArray.find(item => item.id === itemId);

    if (!item) {
        return Response.json(
            { error: 'Item not found' },
            { status: 404 }
        );
    }

    return Response.json(item);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const itemId = parseInt(id);
        const body = await request.json();

        const itemIndex = itemsArray.findIndex(item => item.id === itemId);

        if (itemIndex === -1) {
            return Response.json(
                { error: 'Item not found' },
                { status: 404 }
            );
        }

        if (body.name) {
            itemsArray[itemIndex].name = body.name;
        }

        if (body.description !== undefined) {
            itemsArray[itemIndex].description = body.description;
        }

        return Response.json(itemsArray[itemIndex]);
    } catch (error) {
        return Response.json(
            { error: 'Invalid request format' },
            { status: 400 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const itemId = parseInt(id);
    const itemIndex = itemsArray.findIndex(item => item.id === itemId);

    if (itemIndex === -1) {
        return Response.json(
            { error: 'Item not found' },
            { status: 404 }
        );
    }

    const deletedItem = itemsArray.splice(itemIndex, 1)[0];
    return Response.json(deletedItem);
}
