import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto mb-5 text-center mt-7 md:w-4/12'>
            <p className='mb-2 text-yellow-600'>---{subHeading}---</p>
            <h3 className='py-4 text-3xl uppercase border-y-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;