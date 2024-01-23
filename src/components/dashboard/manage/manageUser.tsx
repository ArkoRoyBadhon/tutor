import { useGetAllUserQuery } from "@/app/redux/features/user/userApi";
import React, { useState } from "react";
import EditModals from "../modals/editModals";

const ManageUser = () => {
  // manage user
  const [Dmodal, setDModal] = useState(false);
  const [DmodalData, setDModalData] = useState<any>();

  // edit
  const [editUser, setEditUser] = useState(false);
  const [EUser, setEUser] = useState<any>();

  const { data: AllUser, isLoading, isSuccess } = useGetAllUserQuery(undefined);

  const detailModal = (
    <div className="fixed top-[100px] h-[400px] bg-gray-200 shadow-md w-[400px] rounded-md overflow-hidden">
      <div className="flex justify-end">
        <div
          className="cursor-pointer
        px-2 py-1 bg-red-300 w-fit"
          onClick={() => {
            setDModal(false);
          }}
        >
          close
        </div>
      </div>
      <div className="">
        <h3 className="text-center font-bold underline text-lg">User Detail</h3>
        <div className="px-5 py-5 capitalize">
            <p className=""><span className="font-semibold">Name: </span>{DmodalData?.name}</p>
            <p className=""><span className="font-semibold">Email: </span>{DmodalData?.email}</p>
            <p className=""><span className="font-semibold">Address: </span>{DmodalData?.address}</p>
            <p className=""><span className="font-semibold">Role: </span>{DmodalData?.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-2 relative">
      <h2 className="text-center font-bold underline text-xl">Manage Users</h2>

      {Dmodal && detailModal}
      {editUser && <EditModals EUser={EUser} setEditUser={setEditUser} />}

      <div className="overflow-x-auto">
        <table className="mt-5 min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Action</th>
              <th className="py-2 px-4 border-b">promotion</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {AllUser &&
              AllUser?.data?.map((item: any) => {
                return (
                  <tr key={item._id}>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.role}</td>
                    <td className="py-2 px-4 border-b flex gap-2">
                      <button
                        onClick={() => {
                          setDModal(true);
                          setDModalData(item);
                        }}
                        className="px-2 py-1 rounded-md bg-deep hover:bg-deeper hover:text-white cursor-pointer transition-all ease-in"
                      >
                        Detail
                      </button>
                      <button className="px-2 py-1 rounded-md bg-deep hover:bg-deeper hover:text-white cursor-pointer transition-all ease-in">
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setEditUser(true);
                          setEUser(item);
                        }}
                        className="px-2 py-1 rounded-md bg-deep hover:bg-deeper hover:text-white cursor-pointer transition-all ease-in"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b">
                      {item.role === "user" ? (
                        <button className="px-2 py-1 rounded-md bg-deep hover:bg-deeper hover:text-white cursor-pointer transition-all ease-in">
                          Promote admin
                        </button>
                      ) : (
                        <button className="px-2 py-1 rounded-md bg-deeper text-white cursor-pointer transition-all ease-in">
                          Promoted
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
