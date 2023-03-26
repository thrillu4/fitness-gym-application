import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Classes that challenge every muscle and a group setting that keeps you challenging the person beside you. Motivating coaches keep you pushing toward that extra rep, set and crunch for total-body results.",
    image: image1,
  },
  {
    name: "Yoga Training Classes",
    description:
      "Take yoga classes anytime and anywhere so you can rejuvenate your body and mind.",
    image: image2,
  },
  {
    name: "Ab Core Training Classes",
    description:
      "Build your core strength and tone your abs, butt and legs with LES MILLS CORE, a 30-minute workout focused on your core.",
    image: image3,
  },
  {
    name: "Adventure Training Classes",
    description:
      "Fitness Training offers online fitness training programs specifically designed for the physical challenges of mountain adventure.",
    image: image4,
  },
  {
    name: "Fitness Training Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Learn about our world-class group fitness workouts and find a class! Make you fall in love with fitness.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className=" mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className=" w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
