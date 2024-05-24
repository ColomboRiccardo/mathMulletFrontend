import HeaderComponent from "../components/headerComponent";
import HeroImageComponent from "../components/heroImageComponent";

const HomePage = () => {
  return (
    <>
      <section className="h-screen">
        <HeroImageComponent>
          <div className="w-8/12 m-auto p-4 bg-black/75 rounded-md flex items-center flex-col justify-center">
            <h1 className="text-slate-50 text-4xl font-bold my-2">
              Welcome to MathHammer!
            </h1>
            <h2 className="text-slate-50 text-2xl font-medium my-2">
              In the 41th millennium there is only war...
              <br /> and math!
            </h2>
            <p className="text-slate-50 text-lg">
              The website/app dedicated to statistics about tabletop games!
            </p>
            <p className="text-slate-50 text-lg">
              Level up your strategy or just nerd out with our various statistic
              analysis tools and other stuff
            </p>
          </div>
        </HeroImageComponent>
        <main className="h-2/5 bg-gradient-to-t from-0% from-transparent to-10% to-gray-800 flex items-center justify-around">
          <div className="h-5/6 w-5/12 bg-black/50 rounded-md p-4 flex flex-col justify-center">
            <h2 className="text-3xl text-slate-50 font-bold">
              Today in the news, giant warhammer miniature found in field
            </h2>
            <div className="flex items-center justify-between my-4">
              <div className="w-4/12 m-auto">
                <div className="w-52 h-52 bg-slate-100"></div>
              </div>
              <div className="w-6/12">
                <p className="text-slate-50 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto vitae nam dolorem tenetur, id porro ratione itaque
                  excepturi rem quaerat temporibus neque eveniet laudantium, hic
                  perspiciatis tempore nostrum impedit esse!
                </p>
              </div>
            </div>
          </div>
          <div className="h-5/6 w-5/12 bg-black/50 rounded-md p-4 flex flex-col justify-center">
            <h2 className="text-3xl text-slate-50 font-bold">
              Stats are broken
            </h2>
            <div className="flex items-center justify-between my-4">
              <div className="w-4/12 m-auto">
                <div className="w-52 h-52 rounded-full bg-slate-100"></div>
              </div>
              <div className="w-6/12">
                <p className="text-slate-50 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto vitae nam dolorem tenetur, id porro ratione itaque
                  excepturi rem quaerat temporibus neque eveniet laudantium, hic
                  perspiciatis tempore nostrum impedit esse!
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="h-screen w-full"></section>
    </>
  );
};

export default HomePage;

{
  /* <img src={HeroImage} className="" alt="space marines doing stuff" /> */
}
