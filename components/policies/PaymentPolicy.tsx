"use client";

import React from 'react';
import { CreditCard, ShieldCheck, Clock, AlertCircle, ArrowRight, Truck, Package, RefreshCw, MapPin } from 'lucide-react';

const PaymentAndShippingPolicy: React.FC = () => {
  const paymentMethods = [
    {
      name: 'Credit/Debit Cards',
      icon: <CreditCard className="h-6 w-6 text-emerald-600" />,
      details: 'Visa, Mastercard, American Express, Discover'
    },
    {
      name: 'PayPal',
      icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.08c3.476 0 5.08.307 6.01 4.28.08.332.16.68.24 1.032.24 1.08.4 2.308.48 3.616.16 2.4.4 5.988-1.92 7.488-1.6 1.2-3.2 1.512-5.28 1.512h-1.2c-.4 0-.8.28-.88.68l-1.2 5.28c-.08.28-.32.48-.6.48z" />
      </svg>,
      details: 'Secure online payments'
    }
  ];

  const securityFeatures = [
    {
      title: 'SSL Encryption',
      description: 'All transactions are protected with 256-bit SSL encryption'
    },
    {
      title: 'PCI Compliance',
      description: 'We are PCI DSS compliant to ensure your payment information is secure'
    },
    {
      title: 'No Storage',
      description: 'We do not store your credit card details on our servers'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Payment & Shipping Policy</h1>
        <div className="mt-4 h-1 w-20 bg-emerald-500 mx-auto"></div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
        <div className="p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Accepted Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-full mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{method.name}</h3>
                    <p className="mt-1 text-gray-600">{method.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Processing Time</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Orders are typically processed within 1-2 business days. You will receive an email confirmation once your payment is processed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Important Information</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All prices are in USD (United States Dollars)</li>
                      <li>Your card will be charged at the time of purchase</li>
                      <li>For any payment issues, please contact our support team</li>
                      <li>We reserve the right to cancel any order that cannot be authorized</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">Need help with your payment?</p>
            <a
              href="/contact"
              className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Contact Support <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-lg font-semibold">Shipping Options</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Free standard shipping on orders over $50</span>
              </li>
              <li className="flex items-start">
                <Package className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Express shipping available at checkout</span>
              </li>
              <li className="flex items-start">
                <RefreshCw className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Processing time: 1-2 business days</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-lg font-semibold">Delivery Times</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Standard: 3-5 business days</li>
              <li>• Express: 1-2 business days</li>
              <li>• International: 7-14 business days</li>
              <li className="text-sm text-gray-500 mt-2">*Delivery times are estimates and may vary</li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-lg font-semibold">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• We ship to all 50 U.S. states</li>
              <li>• International shipping available to select countries</li>
              <li>• Signature may be required for delivery</li>
              <li>• Tracking information provided for all orders</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Due to high demand and seasonal variations, delivery times may be longer than usual. 
                We appreciate your patience and understanding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Last updated: December 27, 2025</p>
      </div>
    </div>
  );
};

export default PaymentAndShippingPolicy;