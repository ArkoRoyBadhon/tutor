import Link from "next/link";
import Card from "../shared/card";

const AvailableService = () => {
  return (
    <div className="container">
      <h2 className="font-bold">Available Service</h2>
      <div className="mt-5 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-10 gap-x-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-deep mt-2 font-bold text-end">
        <Link href="/login">See More...</Link>
      </div>
    </div>
  );
};

export default AvailableService;
