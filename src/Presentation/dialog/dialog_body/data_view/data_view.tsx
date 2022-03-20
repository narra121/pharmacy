import React from "react";
import { Column } from "../../../common/column";
import { DataList } from "./components/data_list";
import { FilterAll } from "./components/filter_all";
export const PharmacyDataList: React.FC = (props) => {
  return (
    <Column style={{ height: 246, width: 540 }}>
      <FilterAll />
      <DataList />
    </Column>
  );
};
