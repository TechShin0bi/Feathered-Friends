import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParrotBanner from '@/components/ParrotBanner';
import { parrot13 } from '@/public/assets';
import React from 'react';

const Page = () => {
    return (
        <>
            <ParrotBanner imageUrl={parrot13} altText="parrots" />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Grid item 1 */}
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <ContactForm />
                    </div>
                    {/* Grid item 2 */}
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-xl font-semibold mb-4">Google Map</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.0538337805!2d-0.24168169227587744!3d51.52873520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760554060f00b1%3A0x8ee7fbd48fc83b2e!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1617932467916!5m2!1sen!2suk"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
