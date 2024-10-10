import React from 'react';
import FilterArea from './FilterArea';
import SliderSyncing from './SliderSyncing';
import bannerimg from "./assets/bannerimg.png";

function Herosection() {
  const handleApplyFilters = (filters) => {
    console.log('Filters received in Herosection:', filters);
  };

  return (
    <>
      <section
        className="relative py-24 px-4 bg-cover bg-center hero-section-parent-box"
        style={{
          backgroundImage: `url(${bannerimg})`,
          zIndex: 10,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="z-20 relative text-white container mx-auto hero-content-custom-box">
          <div className='banner-content'>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Your <br /> <span  style={{ fontWeight: 600 }} >Smart</span> Move
            </h1>
            <p className="leading-normal text-lg md:text-xl lg:text-2xl text-center">
              In oculis quidem se esse admonere <br /> interesse enim maxime placeat, facere <br /> possimus, omnis.
            </p>
          </div>
        </div>
      </section>
      <FilterArea
        options1={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]}
        options2={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
        options3={[{ value: 'x', label: 'Option X' }, { value: 'y', label: 'Option Y' }]}
        onApplyFilters={handleApplyFilters}
      />
      <SliderSyncing />
    </>
  );
}

export default Herosection;
