import Pc from "../assets/pc.png";
import Laptop from "../assets/laptop.webp";
import Circle from "../assets/circle.svg";

const AboutMe = () => {
  return (
    <section
      className="about box-border block m-0 p-0 py-[80px] lg:py-[150px] bg-secondary"
      id="about"
    >
      <div className="container max-w-[1070px] m-auto p-0 px-[17px] md:px-[40px]  ">
        <div className="about-content flex flex-col lg:flex-row box-border items-center justify-center  m-0 p-0 text-center lg:w-[936px] lg:h-[381px] lg:justify-around">
          <div className="img-side relative p-0 m-0 flex  flex-col items-center justify-center box-border lg:w-[468px] lg:h-[355px] lg:items-start">
            <img
              src={Pc}
              alt="emoji"
              className="work-emoji hidden h-auto w-[60px] absolute bottom-[57px] box-border right-[15px] z-10 md:block lg:bottom-[35px] lg:right-[98px] "
            />
            <img
              src={Laptop}
              alt="mee"
              className="img-side__main-img box-border rounded-2xl mb-[35px] h-auto w-[90%] max-w-full md:w-[410px] md:h-[350px] lg:m-0"
            />
            <span className="bottom-[-3px] box-border  hidden h-[170px] w-[170px] rounded-[50%] m-0 p-0 absolute right-[-40px] md:block lg:bottom-[-33px] lg:right-[33px] lg:h-[190px] lg:w-[190px]">
              <img
                src={Circle}
                alt="text"
                className="bg-[white] rounded-full animate-[spin_9s_linear_infinite]"
              />
            </span>
          </div>
          <div className="text-side max-w-[540px] p-0 md:pr-[15px] m-0 text-center lg:text-left lg:w-[468px] lg:h-[381px]">
            <h3 className="m-0 p-0 font-bold mb-[10px] text-[#147efb] uppercase text-[17px] ">
              About me
            </h3>
            <h4 className="m-0 p-0 mb-[20px] font-bold text-[25px]">
              A dedicated Front-end Developer <br /> based in Lahore, Pakistan
              📍
            </h4>
            <p className="m-0 p-0 text-[17px] font-medium text-[#767676] leading-[1.5] dark:text-[gray]">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
