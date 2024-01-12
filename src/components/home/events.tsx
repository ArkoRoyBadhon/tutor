import Marquee from "react-fast-marquee";

const Events = () => {
  return (
    <div className="container mt-10">
      <h2 className="font-bold">Events</h2>

      <div className="">
        <Marquee>
          <div className="bg-light rounded-md py-2">
          Tutor house arranged an Picnic on January 24, 2024. Everyone is invited. 
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Events;
