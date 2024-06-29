type Props = {
  img: string;
  name: string;
  onClick?: () => void;
  folderName: string;
};
const AppIcon = ({ img, name, onClick, folderName }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`hover:border-2 border-white text-white text-center w-[18%] h-full flex items-center justify-center flex-col gap-1 ml-[.3vh]`}
    >
      <img src={img && img} alt={name && name} className="w-full" />
      <p className="text-[1vh] ">
        {name && name === "Folder" ? folderName : name || "Folder"}
      </p>
    </div>
  );
};

export default AppIcon;
