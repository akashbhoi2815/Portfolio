import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      ease: "easeIn",
      duration: 0.5,
      delay: 0.5,
      // staggerChildren: 0.3 ,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const SkillsImg = ({ title }) => {
  const skillTitle = title.split(" ").join("-").toUpperCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <img
        src={require(`../assets/skills/${title}.png`)}
        alt={skillTitle}
        className="hover:animate-bounce-hold transition duration-300 rounded-full bg-light_grey h-20"
      />

      <p className="text-xs mt-1 md:text-center text-light_grey font-playfair">
        {skillTitle}
      </p>
    </motion.div>
  );
};

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-5 pb-24">
      {/* HEADER SECTION  */}
      <div className="md:flex md:justify-center md:gap-16 mt-24">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="flex justify-center font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
          <p className="mt-10 mb-7 text-xl">
            I love to learn new things and experiment with new technologies.
            These are some of the major languages, technologies, tools and
            platforms I have worked with:
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-2 ss:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-9"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SkillsImg title="html" />
          <SkillsImg title="css" />
          <SkillsImg title="javascript" />
          <SkillsImg title="bootstrap" />
          <SkillsImg title="chakra" />
          <SkillsImg title="tailwind" />
          <SkillsImg title="react" />
          <SkillsImg title="redux" />
          <SkillsImg title="react_router" />
          <SkillsImg title="mongodb" />
          <SkillsImg title="nodejs" />
          <SkillsImg title="express" />
          <SkillsImg title="git" />
          <SkillsImg title="vercel" />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
