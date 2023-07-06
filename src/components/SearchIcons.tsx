interface SearchIconsProps {
  icon: JSX.Element;
  title: string;
}

const SearchIcons = ({ title, icon }: SearchIconsProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {icon}

      <p className="text-sm text-grayPrimary">{title}</p>
    </div>
  );
};

export default SearchIcons;
