"use client";

import Divider from "@/components/Divider";
import SearchIcons from "@/components/SearchIcons";
import { TbBuilding, TbBuildingCottage } from "react-icons/tb";

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
          title="Fazenda"
        />

        <SearchIcons
          icon={<TbBuilding size={35} className="text-grayPrimary" />}
          title="Resorts"
        />

        <SearchIcons
          icon={<TbBuildingCottage size={35} className="text-grayPrimary" />}
          title="Fazenda"
        />
      </div>
    </div>
  );
};

export default QuickSearch;
