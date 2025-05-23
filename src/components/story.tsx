import { Button } from "./button";
import { AnimatedTitle } from "./animated-title";
import { Link } from "react-router-dom"

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export const Story = () => {
  return (
    <section id="story" className="min-h-[80vh] w-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0a192f] bg-blend-overlay text-blue-50 flex flex-col items-center px-16">
      <div className="w-full text-center  mt-10">
        <AnimatedTitle containerClass="text-6xl">
          {"OUR RECENT EVENTS"}
        </AnimatedTitle>
      </div>

      <div className="w-full flex justify-between items-center mt-8">
        <div className="w-1/2 flex flex-col items-start -mt-5">
          <p className="text-lg pb-5 text-violet-50 max-w-md text-justify" style={{ lineHeight: '1.6' }}>
            Our recent college IoT event gave students hands-on experience with devices like Arduino and Esp32. Guided by seniors and supported by faculty, students explored real-world applications and gained valuable practical knowledge in IoT.
          </p>
          <Link to="/events"><Button containerClass="bg-red-500 flex-center gap-1">Events</Button></Link>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <div className="relative w-[400px] h-[300px]">
            <ImageClipBox
              src="/img/event.png"
              alt="Events"
              clipClass="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
