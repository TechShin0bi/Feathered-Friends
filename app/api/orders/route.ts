import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock authentication - in a real app, you would use your auth system
    const isAuthenticated = true;
    const userEmail = 'user@example.com';
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // In a real app, you would fetch orders from your database
    // This is a mock implementation
    const mockOrders = [
      {
        id: 'ORD-12345',
        date: '2025-12-20',
        status: 'Delivered',
        total: 249.98,
        items: [
          {
            id: '1',
            name: 'African Grey Parrot',
            price: 199.99,
            quantity: 1,
            image: '/assets/images/parrots/african-grey.jpg'
          },
          {
            id: '2',
            name: 'Parrot Food',
            price: 24.99,
            quantity: 2,
            image: '/assets/images/products/food.jpg'
          }
        ]
      },
      {
        id: 'ORD-12344',
        date: '2025-11-15',
        status: 'Shipped',
        total: 149.99,
        items: [
          {
            id: '3',
            name: 'Cockatiel',
            price: 149.99,
            quantity: 1,
            image: '/assets/images/parrots/cockatiel.jpg'
          }
        ]
      }
    ];

    return NextResponse.json({ orders: mockOrders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
