import React from "react";

const rainMessage = "Looks like it's gonna rain! Bring an umbrella.";
const jacketMessage = "It's chilly outside. Wear a jacket.";
const coatMessage = "It's cold outside. Wear a coat.";
const allClearMessage = "It's a lovely day! Enjoy.";

const Recommendations = ({ hasRain, wearJacket, wearCoat }) => (
  <div>
    <h3>Be prepared ...</h3>
    {hasRain ? <p>{rainMessage}</p> : null}
    {wearJacket ? <p>{jacketMessage}</p> : null}
    {wearCoat ? <p>{coatMessage}</p> : null}
    {!(hasRain || wearJacket || wearCoat) ? <p>{allClearMessage}</p> : null}
  </div>
);

export default Recommendations;
