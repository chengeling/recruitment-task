import { useState } from "react";

import SearchSection from "../../components/Layout/SearchSection";
import ApiaryList from "../../components/ApiaryList";
import { TApiaryItem } from "../../types/TApiaryItem";
import { ORDER_TYPE } from "../../enums/OrderType";
import { filterAscendingByNumber } from "../../utils/filterAscendingByNumber";
import { filterDescendingByNumber } from "../../utils/filterDescendingByNumber";

const HomePage = () => {
  const initialData = JSON.parse(localStorage.getItem("apiaries") || "[]");
  const [contentData, setContentData] = useState(initialData);

  const filterContent = (searchValues: any): void => {
    if (!searchValues.name) {
      setContentData(initialData);
      return;
    }
    const filteredData = contentData.filter((item: TApiaryItem) =>
      item.name.toLowerCase().includes(searchValues.name.toLowerCase())
    );
    setContentData(filteredData);
  };

  const orderContent = (orderType: ORDER_TYPE): void => {
    if (!orderType) return;
    const data = [...contentData];
    const sortFunction = orderType === ORDER_TYPE.ASCENDING ? filterAscendingByNumber : filterDescendingByNumber;
    const orderedData = data.sort(sortFunction);
    setContentData(orderedData);
  };

  return (
    <>
      <SearchSection filterContent={filterContent} orderContent={orderContent} />
      <ApiaryList data={contentData} />
    </>
  );
};

export default HomePage;
