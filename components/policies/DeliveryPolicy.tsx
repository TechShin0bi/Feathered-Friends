import React from 'react';
import { Truck, Clock, RefreshCw, Package, CheckCircle, XCircle } from 'lucide-react';

const DeliveryPolicy: React.FC = () => {
  const deliveryOptions = [
    {
      name: 'Standard Delivery',
      time: '3-5 business days',
      price: 'Free on orders over $50',
      icon: <Truck className="h-6 w-6 text-emerald-600" />
    },
    {
      name: 'Express Delivery',
      time: '1-2 business days',
      price: '$9.99',
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      name: 'International',
      time: '7-14 business days',
      price: 'Varies by location',
      icon: <Package className="h-6 w-6 text-amber-600" />
    }
  ];

  const returnPolicy = [
    {
      title: '30-Day Return Policy',
      description: 'You may return most new, unopened items within 30 days of delivery for a full refund.',
      icon: <RefreshCw className="h-5 w-5 text-emerald-600" />
    },
    {
      title: 'Free Returns',
      description: 'We offer free returns for all orders within the United States.',
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />
    },
    {
      title: 'Non-Returnable Items',
      description: 'Perishable goods, custom products, and personal items cannot be returned.',
      icon: <XCircle className="h-5 w-5 text-red-600" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Delivery, Returns & Refunds</h1>
        <div className="mt-4 h-1 w-20 bg-emerald-500 mx-auto"></div>
      </div>

      {/* Delivery Options Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Delivery Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{option.name}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    {option.time}
                  </p>
                  <p className="font-medium">{option.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Important Delivery Information</h3>
            <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
              <li>Orders are typically processed within 1-2 business days</li>
              <li>Delivery times are estimates and may be affected by weather or carrier delays</li>
              <li>Signature may be required for delivery of high-value items</li>
              <li>International orders may be subject to customs fees</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Returns & Refunds Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Returns & Refunds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {returnPolicy.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How to Return an Item</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Contact our customer service team to initiate a return</li>
                <li>Package the item securely with all original packaging and tags</li>
                <li>Include the return authorization form (provided by customer service)</li>
                <li>Ship the package using a trackable shipping service</li>
              </ol>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">Refund Processing</h3>
              <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                <li>Refunds are processed within 3-5 business days after we receive your return</li>
                <li>Original shipping fees are non-refundable</li>
                <li>Refunds will be issued to the original payment method</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-medium text-red-800 mb-2">Non-Refundable Items</h3>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>Gift cards and downloadable software products</li>
                <li>Personalized or custom-made products</li>
                <li>Items marked as "Final Sale" or "Non-Returnable"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our delivery, return, or refund policies, please don't hesitate to contact our customer service team.
          </p>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
            Contact Customer Service
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>Last updated: December 27, 2025</p>
      </div>
    </div>
  );
};

export default DeliveryPolicy;