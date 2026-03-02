'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Item {
    id: number;
    name: string;
    description: string;
}

export default function LAB23Page() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    // Fetch all items
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/crud');
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching items:', error);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    // Create item
    const handleCreate = async () => {
        if (!newItem.name.trim()) {
            alert('Please enter a name');
            return;
        }

        try {
            const response = await fetch('/api/crud', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem)
            });
            const createdItem = await response.json();
            setItems([...items, createdItem]);
            setNewItem({ name: '', description: '' });
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    // Update item
    const handleUpdate = async (id: number) => {
        const updatedName = prompt('Enter new name:');
        if (!updatedName) return;

        try {
            const response = await fetch(`/api/crud/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: updatedName })
            });
            const updatedItem = await response.json();
            setItems(items.map(item => item.id === id ? updatedItem : item));
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    // Delete item
    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            await fetch(`/api/crud/${id}`, {
                method: 'DELETE'
            });
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h1>LAB 23 - Intercepting Routes & Route Handlers</h1>
            <p className="lead">Demonstrating Intercepting Routes and Route Handlers in Next.js</p>

            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                            <h5>Part A: Intercepting Routes</h5>
                        </div>
                        <div className="card-body">
                            <p>Intercepting routes allow you to intercept a route and display a modal or different content.</p>
                            <p>Click the button below to see an intercepting route in action:</p>
                            <Link href="/LAB_23/modal-demo" className="btn btn-primary">
                                Open Intercepting Route Modal
                            </Link>
                            <div className="alert alert-info mt-3">
                                <small>The route uses the <code>(.)modal</code> pattern to intercept routes</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-success text-white">
                            <h5>Part A & B: Route Handlers & CRUD API</h5>
                        </div>
                        <div className="card-body">
                            <p>This demo uses <strong>Route Handlers</strong> to create a REST API with full CRUD operations:</p>
                            <ul className="small">
                                <li><code>GET /api/crud</code> - Fetch all items</li>
                                <li><code>POST /api/crud</code> - Create new item</li>
                                <li><code>PUT /api/crud/[id]</code> - Update item</li>
                                <li><code>DELETE /api/crud/[id]</code> - Delete item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header bg-info text-white">
                    <h5>CRUD Operations Demo - Array Storage</h5>
                </div>
                <div className="card-body">
                    <div className="mb-4">
                        <h6>Add New Item</h6>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Item name"
                                    value={newItem.name}
                                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    value={newItem.description}
                                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success w-100" onClick={handleCreate}>
                                    Add Item
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {loading ? (
                        <div className="alert alert-info">Loading items...</div>
                    ) : items.length === 0 ? (
                        <div className="alert alert-warning">No items yet. Add one to get started!</div>
                    ) : (
                        <>
                            <h6>Items List (Total: {items.length})</h6>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description || '-'}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-warning me-2"
                                                        onClick={() => handleUpdate(item.id)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
