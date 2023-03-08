import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import TokenList from "../../components/Explore/TokenList";
import PremiumNFTLoading from "../../components/Loading/PremiumNFTLoading";
import getCollection from "../../../utils/getCollection";
import getAssets from "../../../utils/getAssets";
import style from "./style.js";
const GlobalStyle = createGlobalStyle`${style}`;

const Explore = () => {
  const [assetsData, setAssetsData] = useState({});
  const [nftAddress, setNftAddress] = useState("");
  const [tmpKwd, setTmpKwd] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [tokenName, setTokenName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const getCollectionData = async () => {
      await fetchCollectionData();
    };
    if (nftAddress) {
      getCollectionData();
    }
  }, [nftAddress]);

  const fetchCollectionData = async () => {
    setLoading(true);

    const { name, slug } = await getCollection(nftAddress);
    setTokenName(name);
    setSlug(slug);

    const response = await getAssets(slug);
    setAssetsData(response.data);

    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <section className="container">
        {tokenName && <h2>{tokenName}</h2>}
        <div className="row">
          <div className="col-lg-12">
            <div className="items_filter justify-content-between">
              <div
                className="row form-dark"
                id="form_quick_search"
                name="form_quick_search"
              >
                <div className="col">
                  <input
                    className="form-control"
                    id="name_1"
                    name="name_1"
                    placeholder="Input NFT Address..."
                    type="text"
                    value={tmpKwd}
                    onChange={(e) => setTmpKwd(e.target.value)}
                  />
                  <button
                    id="btn-submit"
                    onClick={() => {
                      setNftAddress(tmpKwd);
                    }}
                  >
                    <i className="fa fa-search bg-color-secondary"></i>
                  </button>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <PremiumNFTLoading />
        ) : (
          <TokenList slug={slug} data={assetsData} />
        )}
      </section>
    </>
  );
};
export default Explore;
