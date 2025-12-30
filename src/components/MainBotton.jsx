import { Button } from "./ui/button";

function MainBotton() {
  return (
    <section className="text-center mb-16">
      <p className="leading-5 my-8 text-sm">Works with your technologies</p>
      <ul className="flex justify-between mb-8 w-[75%] md:w-[90%] lg:w-[75%] mx-auto">
        <li>
          <img
            src="images/js.png"
            alt="JavaScript"
            className="hover:scale-125 transition-all transition-500 delay-120"
          />
        </li>
        <li>
          <img
            src="images/ts.png"
            alt="TypeScript"
            className="hover:scale-125 transition-all transition-500 delay-120"
          />
        </li>
        <li>
          <img
            src="images/react.png"
            alt="React"
            className="hover:scale-125 transition-all transition-500 delay-120"
          />
        </li>
        <li>
          <img
            src="images/redux.png"
            alt="redux"
            className="hover:scale-125 transition-all transition-350 delay-100"
          />
        </li>
        <li>
          <img
            src="images/tailwind.png"
            alt="TailwindCss"
            className="hover:scale-125 transition-all transition-500 delay-120"
          />
        </li>
        <li>
          <img
            src="images/nextjs.png"
            alt="Next.js"
            className="hover:scale-125 transition-all transition-500 delay-120"
          />
        </li>
      </ul>

      <div className="bg-primary text-secondary w-[75%] md:w-[90%] lg:w-[75%] mx-auto rounded-2xl py-16 px-8">
        <h2 className="scroll-m-20 pb-2 text-2xl md:text-3xl lg:text-5xl font-medium lg:font-normal tracking-tight first:mt-0">
          Build faster websites
        </h2>
        <p className="leading-5 text-sm my-8">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <Button className="bg-secondary text-black hover:bg-secondary/90">
          Get Start
        </Button>
      </div>
    </section>
  );
}

export default MainBotton;
