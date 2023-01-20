import Mountain1 from "../assets/Chosen1.jpg";
import Mountain2 from "../assets/Chosen2.jpg";
import Mountain3 from "../assets/Chosen3.jpg";
import Mountain4 from "../assets/Chosen4.jpg";
import PropertyData from "./PropertyData";
import "./AccomodationStyles.css";

const Property = () => {
  return (
    <div className="property">
      <h1>Working Hours</h1>
      <p>We have 2 Branches of Taxi Rank which operate at different times. Its important to note the times of operation for each.</p>

    <PropertyData
      className="first-des"
      heading="Middelburg Taxi Rank(Main)"
      text="Located in Middelburg Town, this is our main rank for commutters leaving Town to all sections of Mhluzi. Taxis are divided into sections the first being Thembisa and Sourounding Areas, the Second being NyanyaThu/Ext3 and to surrounding areas, we also have ext 8 and surrounding areas, further on we have Ext 5, 6 and Tokologo. We also have a section of Doornkop and surrounding areas"
      img1={Mountain1}
      img2={Mountain3}
    />

  <PropertyData
      className="first-des-reverse"
      heading="Extension 5 Taxi Rank"
      text="Located in Mhluzi Ext 5, this is our secondary Taxi Rank which is used for commuting in the early hours of the morning until 9am. All taxis from Tokologo, Ext 5 and 6 lead to this taxi rank in the early hours of the morning till 9am."
      img1={Mountain2}
      img2={Mountain4}
    />
    </div>
  );
};

export default Property;