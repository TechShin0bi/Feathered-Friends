import React from 'react';
import ParrotSaleItem from '../ParrotSaleItem';
import { ParrotType } from '@/types/common';
import { parrots_data } from '@/public/data/parrots';
import PriceFilterSection from './PriceFilterSection';
import PriceInput from './PriceInput';
import ListRadioButtonContainer from '../PriceRange';
import FilterRadioListItem from './FilterRadioListItem';


const SaleSection: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/* <div className="w-full md:w-3/4 md:pr-4 mb-8 md:mb-0"> */}
                        {
                            parrots_data.map((data: ParrotType) => (
                                <ParrotSaleItem location={data.location} age={data.age} image={data.image} name={data.name} price={data.price} key={data.id} id={data.id} />
                            ))
                        }
                    </div>
                    <div className="hidden  w-full md:w-1/4 md:block">
                        <p className='font-sans font-medium ml-3 text-2xl uppercase' >Filter</p>
                        <PriceFilterSection >
                            <PriceInput />
                            <ListRadioButtonContainer
                                label='Price Range: '>
                                <FilterRadioListItem label='Under 10k' />
                                <FilterRadioListItem label='10 - 19k' />
                                <FilterRadioListItem label='20 - 150k' />
                                <FilterRadioListItem label='151 - 900k' />
                                <FilterRadioListItem label='more than 900k' />
                                <button
                                    className="hover:underline self-start en  font-sans text-gray-700 font-thin py-1 px-2"
                                // onClick={() => { console.log("clicked") }}
                                >
                                    Clear
                                </button>
                            </ListRadioButtonContainer>
                        </PriceFilterSection>

                        <PriceFilterSection >
                            <ListRadioButtonContainer
                                label='Gender: '>
                                <FilterRadioListItem label='male' />
                                <FilterRadioListItem label='female' />
                            </ListRadioButtonContainer>
                        </PriceFilterSection>

                        <PriceFilterSection >
                            <ListRadioButtonContainer
                                label='Age: '>
                                <FilterRadioListItem label='1 day' />
                                <FilterRadioListItem label='5 day' />
                                <FilterRadioListItem label='2 weeks' />
                                <FilterRadioListItem label='5 weeks' />
                                <FilterRadioListItem label='5 months' />
                                <FilterRadioListItem label='1 month' />
                                <FilterRadioListItem label='8 months' />
                            </ListRadioButtonContainer>
                        </PriceFilterSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaleSection;
