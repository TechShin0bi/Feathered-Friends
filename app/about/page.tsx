"use client";

import { parrot13 } from '@/public/assets';
import React, { useEffect, useState } from 'react';
import { Users, Heart, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import ParrotBanner from '@/components/ParrotBanner';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & Avian Expert',
    image: '/team/alex.jpg', // Replace with actual image paths
    bio: 'With over 15 years of experience in avian care, Alex founded Feathered Friends to share their passion for these magnificent creatures.'
  },
  {
    name: 'Maria Garcia',
    role: 'Veterinary Specialist',
    image: '/team/maria.jpg',
    bio: 'Certified avian veterinarian ensuring all our birds receive the highest standard of medical care and attention.'
  },
  {
    name: 'Jamie Smith',
    role: 'Customer Care',
    image: '/team/jamie.jpg',
    bio: 'Dedicated to providing exceptional service and support to our feathered friends and their human companions.'
  }
];

const stats = [
  { id: 1, name: 'Happy Customers', value: '500+', icon: Users },
  { id: 2, name: 'Birds Rehomed', value: '1000+', icon: Heart },
  { id: 3, name: 'Years of Experience', value: '10+', icon: Award },
  { id: 4, name: 'Satisfaction Rate', value: '99%', icon: CheckCircle },
];

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ParrotBanner imageUrl={parrot13} altText="Colorful parrots" />
      
      {/* About Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2013, Feathered Friends began as a small family-owned aviary with a passion for connecting people with healthy, happy parrots. 
              What started as a love for these intelligent creatures has grown into a trusted destination for bird enthusiasts across the country.
            </p>
          </div>
          
          {/* Stats */}
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="flex flex-col bg-emerald-50 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-emerald-600">
                      {stat.value}
                    </dd>
                    <div className="mt-2 text-emerald-500">
                      <Icon className="mx-auto h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Mission & Values */}
          <div className="mt-24">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="lg:max-w-2xl lg:flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Feathered Friends, we're dedicated to providing healthy, well-socialized parrots to loving homes while 
                  educating our community about proper avian care and conservation.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p className="mb-6">
                    We believe in ethical breeding practices, proper avian nutrition, and creating lasting relationships between birds and their human companions. 
                    Our team works tirelessly to ensure every bird receives the care and attention they deserve.
                  </p>
                  <ul role="list" className="space-y-4">
                    {[
                      'Ethical breeding practices',
                      'Comprehensive health guarantees',
                      'Lifetime support for all adopted birds',
                      'Educational resources for bird owners',
                      'Conservation-focused initiatives'
                    ].map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle className="h-6 w-5 flex-none text-emerald-500" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <div className="relative rounded-2xl bg-gray-50 p-2 shadow-xl ring-1 ring-gray-900/10">
                  <div className="aspect-[16/10] w-full rounded-xl bg-gray-100">
                    <Image
                      src="/about/aviary.jpg" // Replace with actual image
                      alt="Our aviary"
                      width={1000}
                      height={600}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Passionate experts dedicated to the well-being of our feathered friends.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {teamMembers.map((person) => (
              <li key={person.name} className="group relative">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-emerald-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Policies */}
      {/* <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
              Our Policies
            </h2>
            <div className="space-y-16">
              <PaymentPolicy />
              <DeliveryPolicy />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;