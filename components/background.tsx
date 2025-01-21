"use client";
import AnimatedGradient from "./fancy/animated-gradient-with-svg";

const Background = () => (
  <div>
    <div className="fixed -z-50 bg-[#6d28a8] w-full h-screen"></div>
    <div className="-z-40 fixed min-w-full h-screen bg-[#CA7DF9] blur-3xl transition-colors duration-1000 ease-in-out">
      <div className="w-1/2 h-1/2 bg-inherit relative float-left">
        <AnimatedGradient
          colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
          blur="none"
          speed={0.025}
        />
      </div>
      <div className="w-1/2 h-1/2 bg-inherit relative float-left">
        <AnimatedGradient
          colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
          blur="none"
          speed={0.025}
        />
      </div>
      <div className="w-1/2 h-1/2 bg-inherit relative float-right">
        <AnimatedGradient
          colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
          blur="none"
          speed={0.025}
        />
      </div>
      <div className="w-1/2 h-1/2 bg-inherit relativ float-right">
        <AnimatedGradient
          colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
          blur="none"
          speed={0.025}
        />
      </div>
    </div>
  </div>
);

export default Background;
