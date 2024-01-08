import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[300px] h-[350px] shadow-md rounded-md">
      <Image
        className="rounded-t-md w-full h-[50%]"
        src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        width={500}
        height={500}
        alt="img"
      />
      <div className="p-3 text-[16px]">
        <p className="font-semibold">John Carter</p>
        <p className=""><span className="font-semibold">Experience: </span> 3 years</p>
        <p className=""><span className="font-semibold">Gender: </span> Male</p>
        <p className=""><span className="font-semibold">Address: </span>Dhaka</p>
        <p className=""><span className="font-semibold">Institute: </span>Dhaka University</p>
            <button className="bg-light hover:bg-deep px-3 py-1 rounded-md w-full hover:text-white transition-all ease-in">View</button>
      </div>
    </div>
  );
};

export default Card;
