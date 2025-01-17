import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/heroImage.jpg";
import { Link } from "react-scroll";
import { GiNotebook } from "react-icons/gi";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I&apos;am a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I&lsquo;m passionate about crafting user-friendly web applications
            that solve real-world problems. My goal is to transform ideas into
            efficient and scalable digital solutions.
          </p>
          <div className="flex items-center gap-x-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href="https://drive.google.com/file/d/1Num4r9FHujpk_cqooS6MAco0oyEekiUw/view?usp=drive_link"
              download="Your_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white lg:hidden md: w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-lime-500 cursor-pointer"
            >
              View Resume
              <span className="group-hover:rotate-90 duration-300 ">
                <GiNotebook size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
