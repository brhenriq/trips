"use client";

import Divider from "@/components/Divider";
import SearchIcons from "@/components/SearchIcons";
import { TbBuilding, TbBuildingCottage, TbHome2 } from "react-icons/tb";
import { MdOutlineCottage } from "react-icons/md";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <Divider title="Tente pesquisar por" />

      <div className="flex w-full justify-between mt-5">
        <SearchIcons
          icon={<TbBuilding size={35} className="text-grayPrimary" />}
          title="Resorts"
        />

        <SearchIcons
          icon={<TbBuildingCottage size={35} className="text-grayPrimary" />}
          title="Fazendas"
        />

        <SearchIcons
          icon={<MdOutlineCottage size={35} className="text-grayPrimary" />}
          title="Chalés"
        />

        <SearchIcons
          icon={<TbHome2 size={35} className="text-grayPrimary" />}
          title="Pousadas"
        />
      </div>
    </div>
  );
};

export default QuickSearch;
