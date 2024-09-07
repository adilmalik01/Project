import React from 'react';
import Footer from './footer';

const AboutUs = () => {
    return (
        <>



            <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        <i className="fas fa-info-circle mr-2"></i> About HiHi Digitizing Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Delivering Exceptional Embroidery Digitizing Solutions
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/owner.jpeg"
                            alt="Owner"
                            className="shadow-lg w-full h-auto max-w-sm object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* My Story */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                <i className="fas fa-history mr-2"></i> My Story
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                With a keen eye for detail and a passion for innovation, I've honed my skills in embroidery digitizing to help clients achieve their branding goals. I'm dedicated to staying up-to-date with the latest embroidery technologies and trends, ensuring HiHi Digitizing Services remains at the forefront of the industry.
                            </p>
                        </section>

                        {/* Why I Started */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                <i className="fas fa-lightbulb mr-2"></i> Why I Started HiHi Digitizing Services
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                I saw a need for personalized, high-quality digitizing services that truly listen to clients' needs. I'm committed to building long-lasting relationships and delivering exceptional results that make my clients proud.
                            </p>
                        </section>

                        {/* Our Mission */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                <i className="fas fa-bullseye mr-2"></i> Our Mission
                            </h3>
                            <ul className="mt-4 list-disc list-inside text-base text-gray-600 space-y-2">
                                <li>Deliver precise and timely digitizing solutions</li>
                                <li>Build long-lasting relationships with our clients</li>
                                <li>Stay up-to-date with the latest embroidery technologies and trends</li>
                            </ul>
                        </section>

                        {/* About Me */}
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                <i className="fas fa-user mr-2"></i> About Me
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                As a passionate embroidery enthusiast with 11 years of experience, I founded HiHi Digitizing Services to provide exceptional digitizing solutions that exceed clients' expectations. My journey began with a simple goal: to deliver high-quality, precise, and timely digitizing services that help businesses shine.
                            </p>
                        </section>
                    </div>
                </div>

                {/* Additional Section */}
                <div className="mt-16 bg-gray-100 py-12 px-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                        <i className="fas fa-star mr-2"></i> What Sets Us Apart
                    </h3>
                    <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed text-center">
                        At HiHi Digitizing Services, we pride ourselves on attention to detail, personalized service, and a commitment to quality. Our years of experience and passion for embroidery ensure that every project we undertake is executed with precision and care.
                    </p>
                </div>

                {/* Connect with Me */}
                <div className="mt-16 max-w-7xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">
                        <i className="fas fa-envelope mr-2"></i> Connect with Me
                    </h3>
                    <div className="mt-6 space-y-2 text-base text-gray-600">
                        <p>Email: <a href="mailto:danishabbas496@gmail.com" className="text-blue-600 hover:underline">danishabbas496@gmail.com</a></p>
                        <p>
                            Facebook: <a href="https://www.facebook.com/profile.php?id=100067842709373" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HiHi Digitizing Services on Facebook</a>
                        </p>
                        <p>
                            Instagram: <a href="https://www.instagram.com/dani_digitizer?utm_source=qr&igsh=NzB5eGxxdnZmOTV1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dani_digitizer on Instagram</a>
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

        </>
    );
};

export default AboutUs;
