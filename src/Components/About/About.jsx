const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I&apos;m Sohel Rana, a passionate and dedicated university student
          with a lifelong love for computers and technology. From a young age,
          I’ve been fascinated by how software and websites can solve real-world
          problems. After finishing high school, I decided to dive into
          programming to turn my passion into a career.
        </p>
        <br />
        <p className="text-xl">
          Recognizing the growing demand for web and software solutions, I
          joined the Programming Hero course, where I mastered the MERN Stack
          (MongoDB, Express.js, React, Node.js). Throughout my learning journey,
          I’ve built 12 small to mid-sized MERN stack projects, giving me over{" "}
          <span className="text-blue-500">1 year of hands-on experience.</span>{" "}
          Currently, I’m continuously upgrading my skills and exploring new
          technologies to stay ahead in the ever-evolving tech world. I’m eager
          to gain real-life experience through impactful opportunities where I
          can contribute, learn, and grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
