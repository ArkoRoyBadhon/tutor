import Image from "next/image";
import teacherImg from "../../assets/teacher.png";
import { FaRegCircleCheck } from "react-icons/fa6";

const Overview = () => {
  return (
    <div className="container mt-10">
      <h2 className="font-bold">Overview Service</h2>
      <div className="my-8 flex justify-center gap-10">
        <Image src={teacherImg} width={200} height={200} alt="img" />
        <div className="">
          <div className="flex items-center gap-5">
            <FaRegCircleCheck className="text-deep" />
            <h5 className="font-semibold">Qualified Teachers</h5>
          </div>
          <div className="flex items-center gap-5">
            <FaRegCircleCheck className="text-deep" />
            <h5 className="font-semibold">Support 24/7</h5>
          </div>
          <div className="flex items-center gap-5">
            <FaRegCircleCheck className="text-deep" />
            <h5 className="font-semibold">Cashback Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
