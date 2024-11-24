import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 py-16 text-gray-800 bg-gradient-to-r from-yellow-100 to-yellow-300">
      <h1 className="mb-4 text-4xl font-bold text-center text-amber-900">About Us</h1>
      <p className="max-w-3xl mb-6 text-lg text-center">
        Welcome to <span className="font-bold text-amber-700">Spice Haven</span>, your trusted source for the finest
        spices and premium dry fruits. With decades of experience in the industry, we pride ourselves on offering top-quality
        products sourced from the best farms across the globe.
      </p>
      <p className="max-w-3xl mb-6 text-lg text-center">
        As a wholesaler, we cater to businesses of all sizes, ensuring that our clients receive the freshest and most aromatic spices
        and the highest-grade dry fruits, selected and processed with the utmost care. Our commitment to quality, transparency, and
        customer satisfaction sets us apart in the market.
      </p>
      <p className="max-w-3xl mb-6 text-lg text-center">
        Explore our extensive range of spices and dry fruits, from everyday essentials to rare and exotic varieties. We’re here to help
        you add flavor, nutrition, and authenticity to every dish. Reach out to us to discover more about our offerings and how we can
        support your business.
      </p>
      <p className="max-w-3xl mb-6 text-lg text-center">
        To further ensure our credibility, we hold a valid trade license under the Jharkhand Municipal Act, 2011. Our trade license
        number is <span className="font-bold text-amber-700">BIS8052824318588</span>, issued to Mohammad Anis Akhtar on
        <span className="font-bold"> 08-02-2024</span>. The license remains valid until <span className="font-bold">07-02-2034</span>.
      </p>
      <p className="max-w-3xl mb-6 text-lg text-center">
        You can view our trade license and other authenticity documents by clicking the link below:
      </p>
      <a
        href="/doc.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded hover:bg-green-700"
      >
        View Trade License
      </a>
      <p className="max-w-3xl mt-8 text-lg font-semibold text-center text-amber-800">
        Additionally, here is a picture of our shop for your reference:
      </p>
      <img
        src="/shop.jpeg"
        alt="Anis Dry Fruits and Spices Shop"
        className="w-full max-w-md mt-4 border rounded shadow-lg"
      />
      <p className="max-w-3xl mt-8 text-lg font-semibold text-center text-amber-800">
        Thank you for choosing Spice Haven — where quality and flavor meet.
      </p>
    </div>
  );
};

export default About;
