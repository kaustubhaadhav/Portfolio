import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import cpp from "../../assets/icons/c++.svg";
import java from "../../assets/icons/java.svg";

function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    python_icon,
    cpp,
    java,

  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Kaustubh Adhav | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
        <div className=" xl:order-2">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Software Engineer / <br />  Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Kaustubh Adhav. A passionate Software Developer/Engineer <br />{" "}
              based in USA. Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world  📍
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              As a Junior Software Developer/Engineer, I possess a versatile and comprehensive skill set that spans across software, hardware, mobile development, and cloud technologies. With proficiency in Python, C/C++, Objective-C, Swift, Java, MySQL, Oracle, and XML, I excel in building robust systems from the ground up. My expertise in development environments such as Xcode, Visual Studio, and GitHub, along with tools like Maven and D2P, enables me to streamline complex workflows and deliver high-performance applications.
              I have deep experience with mobile development on iOS and Android, including Mobile Device Management, multithreading, and event-driven processing. I create efficient, scalable applications, using advanced API integration and client/server programming techniques. On the hardware side, I specialize in EMV L2, Contactless Kernels, and card security technologies like DUKPT, adhering to PCI Compliance and ANSI x9.24 standards.
              In the cloud domain, I am adept at deploying and managing applications on AWS and Azure, while my knowledge of network protocols like HTTPs, TCP/IP, REST, SOAP, and Bluetooth ensures secure and optimized communication across systems. With additional strengths in DevOps, Machine Learning, and operating systems, I can drive innovation across every layer of technology.
              From low-level hardware programming to high-level software development, my capabilities allow me to deliver full-stack solutions that meet complex technical requirements.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

{
  /* <p className="px-8 text-lg font-medium  md:text-xl">
&lt;p&gt; As a Junior Front-End Developer, I possess an impressive
arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I
excel in designing and maintaining responsive websites that offer a
smooth user experience. My expertise lies in crafting dynamic,
engaging interfaces through writing clean and optimized code and
utilizing cutting-edge development tools and techniques. I am also a
team player who thrives in collaborating with cross-functional teams
to produce outstanding web applications. &lt;/p&gt;
</p> */
}
export default About;
