import React, { useState } from "react";
import "./InfoBox.scss";

export default function InfoBox({ showInfo, setShowInfo }) {

  const [updateComponent, setUpdateComponent] = useState(false)
  const renderComponent = () => setUpdateComponent({ updateComponent: !updateComponent })

  const handleHideBox = () => {
    setShowInfo(false);
    renderComponent();
  };

  return (
    <div className={showInfo ? "info-box" : "info-box hidden"}>
      <button className="hide-info-button" onClick={handleHideBox}>
        <img className="hide-info-image" src={process.env.PUBLIC_URL + "./exit.svg"} />
      </button>
      <h2 className="info-header">Explore</h2>
      <div className="header-underline"></div>
      <p className="info-paragraph">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <button className="read-more-button">READ MORE</button>
    </div>
  );
}
