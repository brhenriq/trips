interface DividerProps {
  title: string;
}

const Divider = ({ title }: DividerProps) => {
  return (
    <div className="flex items-center">
      <div className="w-full h-[2px] bg-grayLighter" />
      <h2 className="font-medium text-grayLighter whitespace-nowrap px-5">
        {title}
      </h2>
      <div className="w-full h-[2px] bg-grayLighter" />
    </div>
  );
};

export default Divider;
