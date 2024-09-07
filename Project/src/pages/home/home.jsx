import DemoCarousel from "../../components/Crousel";
import  Footer  from "../../components/footer";
import ServiceCard from "../../components/ServiceCard"



const Home = () => {


    const services = [
        {
          icon: '🎨', // Customize these icons as needed
          title: 'Portrait Logo Digitizing',
          description:
            'Our Portrait Logo Digitizing service captures the essence and details of portraits, converting them into embroidery-ready files. We use advanced techniques to ensure every stitch reflects the intricacies of facial features, expressions, and nuances, making your embroidered portraits look lifelike and professional.',
        },
        {
          icon: '🧢',
          title: '3D Puff Logo Digitizing',
          description:
            '3D Puff Logo Digitizing adds a stunning, raised effect to your logos, giving them a bold and eye-catching look. Ideal for caps, jackets, and other apparel, our service ensures precise padding and stitch angles to create depth and dimension, enhancing the visual appeal of your brand’s logos.',
        },
        {
          icon: '🪡',
          title: 'Patch Logo Digitizing',
          description:
            'Our Patch Logo Digitizing service specializes in creating high-quality patches that are perfect for uniforms, promotional items, and personal use. We meticulously design each patch to ensure that it’s both visually appealing and durable, with crisp edges and vibrant colors that stand out on any fabric.',
        },
        {
          icon: '🧵',
          title: 'Applique Digitizing',
          description:
            'Applique Digitizing combines fabric pieces with embroidery to create unique and artistic designs. Our service emphasizes clean cuts and precise stitching, allowing for creative customization of logos and graphics that add texture and contrast to any garment, making your designs truly one-of-a-kind.',
        },
        {
          icon: '🔤',
          title: 'Small Text Digitizing',
          description:
            'Small Text Digitizing focuses on the precision required to make small letters and details legible and clear, even at reduced sizes. Perfect for badges, patches, and intricate logos, our service ensures that your text remains readable, crisp, and aesthetically pleasing, regardless of the size constraints.',
        },
      ];

    return (<>
        <DemoCarousel />
        <div className="min-h-[100vh] w-full" >
            <div className="  text-center py-10">
                <h4 className='text-[16px] poppinEbold'>Our Services</h4>
                <h1 className='text-[30px] poppinEbold'>What Our Agency Provides</h1>
                <div className="grid py-10 grid-cols-1  place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="w-full min-h-screen ">
            <div className="py-8 ">
                <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 max-md:px-8  gap-8 max-w-5xl mx-auto">

                    {/* Section 1 */}
                    <div className="flex max-sm:flex-col max-md:items-center max-md:text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Simple integration"
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Simple integration</h3>
                            <p className="text-gray-700 mt-2">
                                Use the LocaleData gem to download translations directly into your Ruby on Rails projects using the provided command line interface. Just create a project and follow the step-by-step instructions.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex max-sm:flex-col-reverse max-md:items-center max-md:text-center">
                        <div className="mr-4">
                            <h3 className="text-xl font-semibold">Easy collaboration</h3>
                            <p className="text-gray-700 mt-2">
                                All LocaleData projects are private. Each project can have multiple collaborators with different roles and access permissions. You determine who can see and edit your translations. Just add admins, and you're ready to go.
                            </p>
                        </div>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Easy collaboration"
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* Section 3 */}
                    <div className="flex max-sm:flex-col max-md:items-center max-md:text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Personalized service"
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Personalized Service</h3>
                            <p className="text-gray-700 mt-2">
                                Personalized service and attention to detail ensure your needs are met with precision.
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="flex max-sm:flex-col-reverse max-md:items-center max-md:text-center ">
                        <div className="mr-4">
                            <h3 className="text-xl font-semibold">Competitive Pricing</h3>
                            <p className="text-gray-700 mt-2">
                                Competitive pricing without hidden fees ensures great value.
                            </p>
                        </div>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Competitive pricing"
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                    </div>

                </div>
            </div>
        </div>
        <Footer />



    </>);
}

export default Home;