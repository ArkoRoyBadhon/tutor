interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    // Add other properties if any
  }
  
  interface EditModalsProps {
    EUser: User;
    setEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const EditModals: React.FC<EditModalsProps> = ({ EUser, setEditUser }) => {
    console.log("aaaa", EUser);
  
    return (
        <div className="fixed top-[100px] h-[400px] bg-gray-200 shadow-md w-[400px] rounded-md overflow-hidden">
        <div className="flex justify-end">
          <div
            className="cursor-pointer
          px-2 py-1 bg-red-300 w-fit"
            onClick={() => {
                setEditUser(false);
            }}
          >
            close
          </div>
        </div>
        <div className="">
          <h3 className="text-center font-bold underline text-lg">Edit User</h3>
          <div className="px-5 py-5 capitalize">
              <p className=""><span className="font-semibold">Name: </span>{EUser?.name}</p>
              <p className=""><span className="font-semibold">Email: </span>{EUser?.email}</p>
              <p className=""><span className="font-semibold">Address: </span>{EUser?.address}</p>
              {/* <p className=""><span className="font-semibold">Role: </span>{EUser?.}</p> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default EditModals;
  