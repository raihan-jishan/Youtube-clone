const LeftNavMenuItem = ({ text, icon, className, action, width }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] mt-3" +
        className
      }
      onClick={action}
    >
      <span className={"text-xl m-1 mr-5"}>{icon}</span>
      {width ? null : text}
    </div>
  );
};

export default LeftNavMenuItem;
