import React from 'react';

const AboutUs = () => {
  return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative p-10 rounded-lg mx-12 overflow-hidden">
                
                <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                <div className="flex md:flex-row flex-col gap-8 md:gap-0 items-center justify-center mb-4">
                    
                    <div className="mr-4 text-center">
                        <p className="text-gray-700 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio <br /> vitae vestibulum vestibulum.
                        Curabitur tristique, <br /> dolor vel semper dictum, urna ligula ultricies nulla, at accumsan eros sapien id velit.
                        </p>
                    </div>
                    
                    <img
                        src="your-image-url.jpg" alt="About Us"
                        className="w-80 h-80 rounded-xl shadow-md hover:shadow-lg transition duration-300 mb-4 items-center justify-center flex-shrink-0"/>
                    
                    <div className="ml-4 text-center">
                        <p className="text-gray-700 mb-2">
                        Nulla facilisi. Sed ultricies sapien nec nibh congue, eu fringilla ligula iaculis. Duis vestibulum, <br />mi et
                        fringilla dictum, mauris odio interdum mauris,<br /> eu mollis arcu arcu vel est. Sed in eros vel quam convallis
                        facilisis. Donec auctor odio et congue tincidunt.
                        </p>
                    </div>
                
                </div>
                
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-gray-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-gray-300"></div>

            </div>
        </div>
  );
};

export default AboutUs;
