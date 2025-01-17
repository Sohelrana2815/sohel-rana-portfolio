import dailyLens from "../../assets/portfolio/dailyLens.png";
import easyHire from "../../assets/portfolio/easyHire.png";
import glowMartBD from "../../assets/portfolio/glowMartBD.png";
import studyFlow from "../../assets/portfolio/studyFlow.png";
import govtRealEstate from "../../assets/portfolio/govtRealEstate.png";
import bookVibe from "../../assets/portfolio/bookVibe.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dailyLens,
      demoLink: "https://daily-lens-90dd8.web.app",
      codeLink: "https://github.com/Sohelrana2815/daily-lens-front-end",
    },
    {
      id: 2,
      src: easyHire,
      demoLink: "https://easy-hire-e14d3.web.app",
      codeLink: "https://github.com/Sohelrana2815/easy-hire-front-end",
    },
    {
      id: 3,
      src: glowMartBD,
      demoLink: "https://glow-mart-bd.web.app",
      codeLink: "https://github.com/Sohelrana2815/glow-mart-bd-client",
    },
    {
      id: 4,
      src: studyFlow,
      demoLink: "https://stydy-flow.web.app",
      codeLink: "https://github.com/Sohelrana2815/study-flow-client?tab=readme-ov-file",
    },
    {
      id: 5,
      src: govtRealEstate,
      demoLink: "https://gov-real-estate.web.app",
      codeLink: "https://github.com/Sohelrana2815/Gov-Real-Estate",
    },
    {
      id: 6,
      src: bookVibe,
      demoLink: "https://book-hub-srm.netlify.app",
      codeLink: "https://github.com/Sohelrana2815/book-vibe",
    },
  ];

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4  border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0">
            {portfolios.map(({ id, src, demoLink, codeLink }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => window.open(demoLink, "_blank", "noopener")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(codeLink, "_blank", "noopener")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
