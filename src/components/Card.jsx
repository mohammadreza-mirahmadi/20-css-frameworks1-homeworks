function Card({ title, text }) {
  return (
    <div className=" flex flex-row-reverse pb-8 pt-10 pr-8 hover:shadow-lg mx-auto">
      <div className="w-[50%]">
        <h3 className="scroll-m-20 text-xl font-normal tracking-tight">
          {title}
        </h3>
        <p className="leading-4 text-xs">{text}</p>
      </div>
    </div>
  );
}

export default Card;
