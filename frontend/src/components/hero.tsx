import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="rounded-md flex justify-center">
      <img
        src={hero}
        className="w-[600px] right-20 rounded-lg max-h-[500px] object-contain"
      />
    </div>
  );
};

export default Hero;
