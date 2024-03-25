"use client"
import { CarouselItem } from '@/types/common';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ClientFeedbackItem from './ClientFeedbackItem';

const ClientCarouselFeedback: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
    return (
        <Carousel
            autoPlay
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={33.33}
        >
            {
                items.map((item, index) => (
                    <ClientFeedbackItem key={index} feedback={item.feedback} id={item.id} imageUrl={item.imageUrl} name={item.name} rating={item.rating} />
                ))
            }
        </Carousel>
    )
};
export default ClientCarouselFeedback