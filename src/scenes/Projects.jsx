import { BiLink, BiLogoGithub } from "react-icons/bi";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ title, name, description, tech1, tech2, tech3,github,link }) => {
  const overlayStyles = `absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-500
    bg-gray-700 z-30 flex justify-center items-center text-center p-4 text-white rounded-xl`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative p-3 m-2 w-[300px] shadow-[0px_0px_10px_rgba(0,0,0,0.5)] h-[485px] bg-white rounded-xl overflow-hidden"
    >
      <div className="relative group"> {/* Added 'group' class here */}
        <img
          src={require(`../assets/${projectTitle}.png`)}
          alt={projectTitle}
          className="object-contain rounded-xl w-full max-h-[280px]"
        />
        <div className={overlayStyles}>
          <a href={github} target="_blank" className="bg-blue-500 text-white p-2 rounded m-1 text-2xl"><BiLogoGithub/></a>
          <a href={link} target="_blank" className="bg-blue-500 text-white p-2 rounded m-1 text-2xl"><BiLink/></a>
        </div>
      </div>
      <p className="font-playfair text-xl text-black text-center font-bold m-1">
        {name}
      </p>
      <p className="font-opensans text-sm text-dark-grey text-center">
        {description}
      </p>
      <p className="font-playfair text-xl text-black text-center font-bold m-1">
        Tech Stack
      </p>
      <div className="flex justify-evenly font-opensans text-xs text-dark-grey text-center p-2">
        <p className="border border-gray-400 p-1 rounded-lg">{tech1}</p>
        <p className="border border-gray-400 p-1 rounded-lg">{tech2}</p>
        <p className="border border-gray-400 p-1 rounded-lg">{tech3}</p>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">{/* write about all project summery */}</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid justify-center grid-cols-2 lg:grid-cols-3 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
           <Project
            title="Project1"
            name="Eccomerce"
            description="An eCommerce website allows businesses to sell products or services online. It includes features like product listings, shopping carts and user accounts. 🛍️👘"
            tech1="REACT"
            tech2="TAILWIND"
            tech3="FIREBASE"
            github="https://github.com/akashbhoi2815/ecommerce-online-shop"
            link="https://ecommerce-online-shop-sigma.vercel.app/"
          />
          <Project
            title="project2"
            name="Calendly.com clone"
            description="Calendly is an app for scheduling appointments, and events.you can send your availability with a Calendly link"
            tech1="REACT"
            tech2="CHAKRAUI"
            tech3="FIREBASE"
            github="https://github.com/akashbhoi2815/parallel-cast-7381"
            link="https://calendl-yparallel-cast-7381.vercel.app/"
          />
          <Project
            title="project3"
            name="Jefit clone"
            description="On this Jefit website people can manage and track all workouts in one place·"
            tech1="REACT"
            tech2="BOOTSTRAP"
            tech3="REDUX"
            github="https://github.com/akashbhoi2815/magical-vase-490"
            link="https://62ef681b8e24d65b3bd926d5--projectjefit.netlify.app/"
          />
          <Project
            title="project4"
            name="Nature_Basket Clone"
            description="Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food."
            tech1="JAVASCRIPT"
            tech2="HTML"
            tech3="CSS"
            github="https://github.com/manish-2396/Natures-Basket_project"
            link="https://fastidious-quokka-0abdad.netlify.app/"
          />
          <Project
            title="project5"
            name="Stylecraze Clone"
            description="Lifestyle store clone using HTML, CSS ,JavaScript and bootstrap. Lifestyle is India’s leading fashion destination for the latest trends. 🛍️👘"
            tech1="HTML"
            tech2="CSS"
            tech3="JAVASCRIPT"
            github="https://github.com/akashbhoi2815/TopGearFashion_E-Commerce"
            link="https://topgearfashion.vercel.app/"
          />
          {/* <Project title="project1" name="" description="" tech1="" tech2="" tech3=""/>
          <Project title="project1" name="" description="" tech1="" tech2="" tech3=""/> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
