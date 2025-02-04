import Button from "../ui/Button";
import contact from "../../assets/images/about/Contact.png";

const GetInTouch = () => {
  return (
    <section className="bg-white py-10 px-7 sm:px-12 xl:px-24 grid grid-cols-2 items-center gap-14">
        <div className="flex flex-col justify-center gap-8">
            <h2 className="text-primary text-4xl font-Montserrat font-semibold">Get In Touch With Us</h2>
            <p className="font-Montserrat text-[#515151]">Whether you’re looking to buy, sell, or rent, we’re here to help you every step of the way. Contact us today to start your journey toward finding your perfect property.</p>
            <Button type="button" onClick={() => console.log("Contacted")} onBlur={() => 1} className="bg-primary text-white px-14 py-1 rounded-md w-fit text-lg" variant="primary" size="sm">Contact Us</Button>
        </div>
        <img src={contact} className="w-4/5 ml-auto" alt="" />
    </section>
  )
}

export default GetInTouch