import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ParrotBanner from '@/components/ParrotBanner'
import { parrot13 } from '@/public/assets'
import React from 'react'
import DeliveryPolicy from '../../components/policies/DeliveryPolicy'
import PaymentPolicy from '../../components/policies/PaymentPolicy'

const page = () => {
    return (
        <>
            <Navbar />
            <ParrotBanner imageUrl={parrot13} altText="parrots" />
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae commodo nisi. Quisque mattis est a nunc tempus, eget euismod ipsum dapibus. Suspendisse potenti. Vivamus id fermentum nulla. Donec congue tincidunt odio sed efficitur.
                    </p>
                    <p className="text-lg mb-8">
                        Morbi non consequat elit, sed gravida purus. Duis vel efficitur turpis, vitae faucibus nunc. Nam sed vehicula ligula. Nulla hendrerit mi sed felis aliquet suscipit. Integer nec fermentum velit.
                    </p>
                    <p className="text-lg mb-8">
                        Aliquam eget odio sit amet neque auctor fermentum. Cras fringilla libero non arcu convallis, id lacinia neque malesuada. Fusce luctus velit nec leo vehicula, ac vestibulum nulla vestibulum.
                    </p>
                </div>
            </div>
            <div>
                <PaymentPolicy />
                <DeliveryPolicy />
            </div>
            <Footer />
        </>
    )
}

export default page