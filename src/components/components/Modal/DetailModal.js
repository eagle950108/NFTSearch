import { useState } from "react";
import Modal from "react-awesome-modal";
import Art from "../Asset/art";

export default function DetailModal({ visible, close, data }) {
  const [isLoading] = useState(false);

  const _closeModal = () => {
    close();
  };

  return (
    <Modal
      visible={visible}
      width="800"
      effect="fadeInUp"
      onClickAway={_closeModal}
    >
      {isLoading ? (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
          <div className="reverse-spinner"></div>
        </div>
      ) : (
        <div className="p-5 detail-modal form-group">
          <div className="detail-group border-0">
            <img src={data.image_thumbnail_url} alt="Url" style={{width: '15vw', margin: '0 auto', borderRadius: '5px'}} />
          </div>
          <div className="detail-group">
            <label>Owner Address</label>
            <div className="details">
              <p className="">{data.owner ? data.owner : " N/A"}</p>
            </div>
          </div>
          <div className="detail-group">
            <label>Description</label>
            <div className="details">
              <p className="">{data.description ? data.description : "N/A"}</p>
            </div>
          </div>
          <div className="detail-group">
            <label>Attributes</label>
            <div className="details">
              {data.traits && data.traits.length > 0
                ? data.traits.map((trait, index) => {
                    return (
                      <div className="attribute-item">
                        <div className="Property--type">{trait.trait_type}</div>
                        <div
                          className="Property--value"
                          data-testid="Property--value"
                        >
                          {trait.value}
                        </div>
                      </div>
                    );
                  })
                : "N/A"}
            </div>
          </div>
          <div className="groups">
            <a
              className="btn-main btn-apply w-100"
              target="_blank"
              rel="noreferrer"
              href={data.permalink}
            >
              Purchase
            </a>
            <button className="btn-main w-100" onClick={_closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
