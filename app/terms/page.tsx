import { BookOpen, Gavel, ShoppingCart, AlertTriangle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emerald-100 rounded-full">
              <Gavel className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Last updated: December 27, 2025
          </p>
        </div>

        <div className="prose prose-emerald max-w-none">
          <div className="bg-emerald-50 p-6 rounded-xl mb-8">
            <p className="text-emerald-800">
              Welcome to Feathered Friends! These Terms of Service ("Terms") govern your access to and use of our website 
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Account Registration</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To access certain features of our website, you may be required to create an account. You agree to provide 
                  accurate, current, and complete information during the registration process and to update such information 
                  to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account password and for all activities that occur under your account. 
                  You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Orders and Purchases</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-emerald-600 mr-3 mt-0.5">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Order Acceptance</h3>
                    <p className="text-gray-600">
                      All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order 
                      for any reason, including errors in product descriptions or pricing.
                    </p>
                  </div>
                </div>
                <div className="ml-9 pl-1 text-gray-600">
                  <p className="font-medium mb-1">Pricing and Payment:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All prices are in USD and are subject to change without notice</li>
                    <li>Payment is due at the time of purchase</li>
                    <li>We accept major credit cards and PayPal</li>
                    <li>Sales tax will be added to orders as required by law</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Shipping and Delivery</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We aim to process and ship orders within 1-2 business days. Delivery times may vary depending on your location 
                  and the shipping method selected. Please refer to our <Link href="/shipping" className="text-emerald-600 hover:underline">Shipping Policy</Link> for more information.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        We are not responsible for any delays in delivery caused by the shipping carrier or other circumstances 
                        beyond our control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Returns and Refunds</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We want you to be completely satisfied with your purchase. Please review our 
                  <Link href="/returns" className="text-emerald-600 hover:underline"> Return Policy</Link> for detailed information 
                  about returns, exchanges, and refunds.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of 
                  Feathered Friends or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from any content on this website without 
                  our express written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To the maximum extent permitted by law, Feathered Friends shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages resulting from your use of or inability to use our website or services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes by 
                  posting the new Terms on this page and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes to these Terms constitutes your acceptance of the new Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                  without regard to its conflict of law principles.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-600 mr-2" />
                  <span>legal@featheredfriends.com</span>
                </div>
                <p>
                  If you have any questions about these Terms, please contact us at the email above or through our 
                  <Link href="/contact" className="text-emerald-600 hover:underline"> Contact Us</Link> page.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {currentYear} Feathered Friends. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
