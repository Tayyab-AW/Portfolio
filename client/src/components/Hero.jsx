import Waveimg from "../assets/waving.png";
import Socials from "./Socials";
const Hero = () => {
  return (
    <div
      id="home"
      className="flex lg:h-screen justify-center items-center box-border flex-col relative m-0 p-0 py-[110px] bg-primary lg:p-0 lg:justify-start"
    >
      <div className="container px-[17px] block box-border max-w-[1070px] md:px-[40px] md:mx-[75px] lg:mx-auto">
        <div className="content flex box-border items-center flex-col justify-center m-0 p-0 relative gap-x-[30px] gap-y-[30px] lg:gap-x-[100px] lg:gap-y-[100px] lg:h-[650px] lg:items-start">
          <div className="hero-main text-center lg:text-start flex box-border items-center flex-col-reverse lg:flex-row justify-center m-0 p-0 relative gap-x-[30px] gap-y-[30px] lg:gap-x-[100px] lg:gap-y-[100px]  ">
            <div className="hero-text flex box-border flex-col m-0 max-w-[500px] p-0 relative ">
              <h1 className=" font-bold my-[20px] text-[40px] leading-[48px] md:text-[55px] md:leading-[66px] ">
                Front-End React Developer
              </h1>
              <img
                src={Waveimg}
                alt="waving_hand"
                className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] absolute right-[30px] top-[64px] md:right-[30px] md:top-[87px]  lg:right-[130px] m-0 p-0 "
              />

              <p className="mb-[50px] font-medium text-[18px] p-0 text-[#555] lg:m-0 dark:text-[gray]">
                Hi, I'm Muhammad Tayyab. A passionate Front-end React Developer
                based in Lahore, Pakistan. 📍
              </p>
              <span className="flex box-border justify-center mb-[40px] mt-[-20px] p-0 gap-x-[16px] gap-y-[16px] lg:mb-[25px] lg:mt-[25px] lg:gap-x-[13px] lg:gap-y-[13px] lg:justify-start ">
                <Socials />
              </span>
            </div>
            {/* <div className="hero-img h-[280px] w-[280px] md:h-[350px] md:w-[350px] rounded-full border-[3px] relative "></div> */}
          </div>
          <div className="skills flex box-border bottom-0 items-center flex-col left-0 m-0 p-0 static lg:flex-row lg:absolute">
            <p className="mb-[30px] p-0 font-semibold text-[17px] text-center pb-[10px] border-b-2 border-[#939395] lg:p-0 lg:border-0 lg:m-0 lg:pr-[20px] lg:border-r-2 lg:mr-[70px] ">
              Tech Stack
            </p>
            <div className="logos m-0 p-0">
              <ul className="flex flex-wrap box-border justify-center m-0 p-0 gap-x-[30px] gap-y-[30px] ">
                <li className="h-[57px] hover:-translate-y-4 transition-all duration-500 ease-in-out">
                  <img
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="skill-icon"
                    className="h-[50px] w-[110px] m-0 p-0 "
                  />
                </li>
                <li className="h-[57px] hover:-translate-y-4 transition-all duration-500 ease-in-out">
                  <img
                    src="https://skillicons.dev/icons?i=js,ts"
                    alt="skill-icon"
                    className="h-[50px] w-[110px] m-0 p-0 "
                  />
                </li>
                <li className="h-[57px] hover:-translate-y-4 transition-all duration-500 ease-in-out">
                  <img
                    src="https://skillicons.dev/icons?i=react,next"
                    alt="skill-icon"
                    className="h-[50px] w-[110px] m-0 p-0 "
                  />
                </li>
                <li className="h-[57px] hover:-translate-y-4 transition-all duration-500 ease-in-out">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind,scss"
                    alt="skill-icon"
                    className="h-[50px] w-[110px] m-0 p-0 "
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
