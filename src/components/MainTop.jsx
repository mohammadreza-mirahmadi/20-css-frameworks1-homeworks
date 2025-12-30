import Card from "./Card";
const contents = [
  {
    id: 1,
    title: "Performance Optimization",
    text: "Enhancing React apps by minimizing re-renders, lazy loading components, and utilizing memoization techniques for improved performance and speed.",
  },
  {
    id: 2,
    title: "Redux State Management",
    text: "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
  },
  {
    id: 3,
    title: "Tailwind Responsive Design",
    text: "Create responsive web interfaces effortlessly using Tailwind CSS utility classes, ensuring a consistent experience across all device sizes.",
  },
  {
    id: 4,
    title: "Vite Production Deployment",
    text: "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
  },
  {
    id: 5,
    title: "React Library Integration",
    text: "Seamlessly add functionality to React applications by integrating third-party libraries, ensuring smooth interactions and enhanced capabilities.",
  },
  {
    id: 6,
    title: "React App Authentication",
    text: "Secure React applications with robust authentication mechanisms, using libraries like Firebase, Auth0, or custom JWT-based solutions.",
  },
];

function MainTop() {
  return (
    <section className="text-left my-16">
      <h2 className="scroll-m-20 pb-2 text-2xl md:text-4xl font-medium tracking-tight first:mt-0">
        Everything you need to start a website
      </h2>
      <p className="leading-5 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        consequuntur.
      </p>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contents.map((content) => (
          <Card key={content.id} title={content.title} text={content.text} />
        ))}
      </div>
    </section>
  );
}

export default MainTop;
