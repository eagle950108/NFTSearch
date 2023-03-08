import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Empty from "../Empty";
import TokenItem from "./TokenItem";
import PremiumNFTLoading from "../Loading/PremiumNFTLoading";
import DetailModal from "../Modal/DetailModal";

import getAssets from "../../../utils/getAssets";

export default function TokenList({ slug, data }) {
  const [listData, setListData] = useState([]);
  const [nextKey, setNextKey] = useState("");
  const [detailData, setDetailData] = useState({});
  const [detailVisible, setDetailVisible] = useState(false);

  useEffect(() => {
    if (data.assets) {
      setListData(data.assets);
      setNextKey(data.next);
    }
  }, [data]);

  useEffect(() => {
    if (detailData.id) {
      setDetailVisible(true);
    }
  }, [detailData]);

  const showmodal = (index) => {
    setDetailData(listData[index]);
  };

  const fetchNextPage = useCallback(async () => {
    if (nextKey) {
      let nextData = await getAssets(slug, nextKey);
      if (nextData.data) {
        setListData([...listData, ...nextData.data.assets]);
        setNextKey(nextData.data.next);
      }
    }
  }, [nextKey, listData, slug]);

  return (
    <>
      {data.assets && (
        <InfiniteScroll
          dataLength={listData.length}
          next={fetchNextPage}
          hasMore={true}
          loader={<PremiumNFTLoading />}
          className="row"
        >
          {listData.map((asset, index) => (
            <TokenItem
              data={asset}
              key={index}
              showmodal={() => showmodal(index)}
            />
          ))}
        </InfiniteScroll>
      )}
      {detailVisible && (
        <DetailModal
          visible={detailVisible}
          data={detailData}
          close={() => {
            setDetailVisible(false);
          }}
        />
      )}
      {!listData.length && <Empty />}
    </>
  );
}
