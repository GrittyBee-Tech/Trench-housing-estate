import Icon from "../../assets/icons";

const reasons = [
    {
        title: "Local Expertise",
        icon: "expert",
        text: "We have in-depth knowledge of the local market, giving you an edge in your real estate transactions"
    },
    {
        title: "Customer-Centric",
        icon: "3users",
        text: "Your needs are our priority. We listen carefully to your requirements and tailor our services to meet your unique needs."
    },
    {
        title: "Integrity",
        icon: "integrity",
        text: "We believe in doing the right thing, always. Our clients can trust us to be honest, ethical, and transparent in all our dealings."
    },
    {
        title: "Innovation",
        icon: "idea",
        text: "We embrace technology and modern solutions to make the real estate process more efficient and convenient for our clients."
    }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 px-7 sm:px-12 xl:px-24 grid grid-cols-4 grid-rows-2 gap-5">
        <div className="flex flex-col justify-center col-span-2 row-span-2">
            <h2 className="text-primary text-4xl font-Montserrat font-semibold">Why Choose Us</h2>
            <p className="font-Montserrat text-[#515151] mt-4">Our mission is to provide exceptional real estate services with integrity, transparency, and a commitment to excellence. We strive to create lasting relationships with our clients, ensuring that they have a seamless and stress-free experience.</p>
        </div>
        {
            reasons.map(({icon, title, text}) => (
                <article key={title} className="bg-white p-5 rounded-md col-span-1 row-span-1 flex flex-col gap-2.5">
                    <span className="p-2 rounded-full w-fit bg-[#F5F5F5] shadow-sm">
                        <Icon color="#001A35" size={22} type={icon} />
                    </span>
                    <h5 className="text-[#001A35] text-xl font-semibold font-Montserrat">{title}</h5>
                    <p className="text-sm text-[#515151] font-Montserrat">{text}</p>
                </article>
            ))
        }
    </section>
  )
}

export default WhyChooseUs