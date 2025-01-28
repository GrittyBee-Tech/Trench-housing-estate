import team1 from "../../assets/images/about/team1.png";
import team2 from "../../assets/images/about/team2.png";
import team3 from "../../assets/images/about/team3.png";
import team4 from "../../assets/images/about/team4.png";

const teamMembers = [
    {
        image: team1,
        name: "Flores Williams",
        title: "Agent Coordinator"
    },
    {
        image: team2,
        name: "Flores Williams",
        title: "Agent Coordinator"
    },
    {
        image: team3,
        name: "Flores Williams",
        title: "Agent Coordinator"
    },
    {
        image: team4,
        name: "Flores Williams",
        title: "Agent Coordinator"
    }
];

const Team = () => {
  return (
    <section className="bg-[#001A35] py-10 px-7 sm:px-12 xl:px-24">
        <h2 className="text-white text-4xl font-Montserrat font-semibold text-center">Our Team</h2>
        <p className="text-center text-white mt-4">Meet the dedicated professionals behind Trench Housing</p>
        <div className="grid grid-cols-4 gap-5 mt-10 mb-6">
            {
                teamMembers.map(({name, title, image}, i) => (
                    <article className="group relative overflow-hidden" key={i}>
                        <img src={image || team1} alt="" className="h-full" />
                        <div className="absolute group-hover:bottom-0 -bottom-20 transition-all ease-out w-full left-0 right-0 bg-[#000000CC] pt-3 pb-5">
                            <h5 className="font-semibold text-white font-Montserrat text-center text-lg">{name ||"Flores Williams"}</h5>
                            <p className="text-white font-Montserrat text-center text-sm">{title || "Agent Coordinator"}</p>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

export default Team