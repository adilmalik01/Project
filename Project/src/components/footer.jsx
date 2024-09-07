import "./footer.css";

const Footer = () => {
    return (
        <section className="ai oh vo ns px-4 py-8 md:px-8 md:py-12 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <img className="py-5 w-32 h-auto" src="/111.png" alt="Logo" />
                    <div className="mt-4 md:mt-8">
                        <p className="text-lg font-semibold">Pages</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-black hover:text-white">Home</a></li>
                            <li><a href="#" className="text-black hover:text-white">Services</a></li>
                            <li><a href="#" className="text-black hover:text-white">About</a></li>
                            <li><a href="#" className="text-black hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
                    <p className="text-lg font-semibold">Help</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-black hover:text-white">Customer Support</a></li>
                        <li><a href="#" className="text-black hover:text-white">Delivery Details</a></li>
                        <li><a href="#" className="text-black hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="text-black hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
                    <p className="text-lg font-semibold">Extra Links</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-black hover:text-white">Customer Support</a></li>
                        <li><a href="#" className="text-black hover:text-white">Delivery Details</a></li>
                        <li><a href="#" className="text-black hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="text-black hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 text-center">
                <ul className="flex justify-center space-x-4 mb-4">
                    <li><a href="#" className="text-black hover:text-white">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                        </svg>
                    </a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100067842709373" className="text-black hover:text-white">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a></li>
                    <li><a href="https://www.instagram.com/dani_digitizer?utm_source=qr&igsh=NzB5eGxxdnZmOTV1" className="text-black hover:text-white">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.668-.311 2.978 2.978 0 0 1-1.71-1.711 5.025 5.025 0 0 1-.311-1.67c-.042-.95-.053-1.218-.053-3.654s0-2.687.053-3.654a5.022 5.022 0 0 1 .311-1.67 2.976 2.976 0 0 1 1.711-1.71 5.04 5.04 0 0 1 1.67-.311c.95-.043 1.218-.055 3.654-.055s2.687 0 3.654.055a5.042 5.042 0 0 1 1.67.311 2.976 2.976 0 0 1 1.711 1.71 5.02 5.02 0 0 1 .311 1.67c.043.95.055 1.218.055 3.654s-.012 2.705-.055 3.654z"></path>
                        </svg>
                    </a></li>
                    <li><a href="#" className="text-black hover:text-white">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.478 2 2 6.478 2 12c0 4.991 3.656 9.128 8.438 9.877v-6.99H7.897v-2.886h2.541V9.691c0-2.507 1.493-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.468h-1.26c-1.242 0-1.63.77-1.63 1.558v1.864h2.773l-.444 2.886h-2.329v6.99C18.344 21.128 22 16.99 22 12c0-5.522-4.478-10-10-10z"></path>
                        </svg>
                    </a></li>
                </ul>
                <p className="text-sm">© 2024 HiHi Digitizing. All Rights Reserved.</p>
            </div>
        </section>
    );
}

export default Footer;
