import { failedLoadImage } from "../../../utils/compre.js";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showThumbnailsButton: false,
    showPrevButton: false,
    showNextButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const Art = ({ image, asset, action }) => {
  return (
    <>
      {
        <>
          {action ? (
            <img
              src={image ? image : asset}
              onError={failedLoadImage}
              className="lazy nft__item_preview w-100 ratio-1-1"
              role="button"
              onClick={action}
              alt=""
            />
          ) : (
            <SRLWrapper options={options}>
              <img
                src={image ? image : asset}
                onError={failedLoadImage}
                className="lazy nft__item_preview w-100"
                role="button"
                onClick={action}
                alt=""
              />
            </SRLWrapper>
          )}
        </>
      }
    </>
  );
};

export default Art;
