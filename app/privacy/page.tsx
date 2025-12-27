import { ShieldCheck, CreditCard, Lock } from 'lucide-react';
import Link from 'next/link';
import { BiEnvelope } from 'react-icons/bi';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emerald-100 rounded-full">
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Last updated: December 27, 2025
          </p>
        </div>

        <div className="prose prose-emerald max-w-none">
          <div className="bg-emerald-50 p-6 rounded-xl mb-8">
            <p className="text-emerald-800">
              At Feathered Friends, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-emerald-600 mr-3 mt-0.5">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                    <p className="text-gray-600">
                      When you make a purchase or attempt to make a purchase, we collect certain information including:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Name, email address, and phone number</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely through our payment processor)</li>
                      <li>Order history and preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-emerald-600 mr-3 mt-0.5">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Automatically Collected Information</h3>
                    <p className="text-gray-600">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages you visit and time spent on those pages</li>
                      <li>Referring/exit pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Screen orders for potential risk or fraud</li>
                <li>Improve and optimize our website</li>
                <li>Send you marketing communications (if you've opted in)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. 
                All transactions are processed through a secure payment gateway and no credit card 
                information is stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="mt-4 text-gray-600">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-600">
                We use cookies to enhance your experience on our website. You can set your browser to 
                refuse all or some browser cookies, but this may limit your ability to use certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <div className="flex items-center text-gray-600">
                <BiEnvelope className="h-5 w-5 text-emerald-600 mr-2" />
                <span>privacy@featheredfriends.com</span>
              </div>
              <p className="mt-4 text-gray-600">
                For more information about our privacy practices, or if you have questions, please contact us by email or by mail using the details provided on our <Link href="/contact" className="text-emerald-600 hover:underline">Contact Us</Link> page.
              </p>
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
