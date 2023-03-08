import { useEffect, useState } from "react";
import Art from "../Asset/art";
import ItemLoading from "../Loading/ItemLoading";

const TokenItem = ({ data, showmodal }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
          <ItemLoading />
        </div>
      ) : (
        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div className="nft__item m-0 pb-4 h-100 justify-content-between">
            <div className="nft__item_wrap w-100 ratio-1x1">
              <Art
                image={data.image_thumbnail_url}
                asset={data.image_original_url}
                action={showmodal}
              />
            </div>
            <div className="nft__item_info mb-0 mt-1">
              <span>
                <h4>
                  <span className="text-white">{data.name}</span>
                </h4>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TokenItem;
