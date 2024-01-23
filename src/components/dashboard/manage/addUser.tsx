import { useCreateUserMutation } from "@/app/redux/features/user/userApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
};

const AddUser = () => {
  const [createUser, { isSuccess, error }] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("form data", data);

    createUser(data);
  };

  if (isSuccess) {
    console.log("User added");
  }
  if (error) {
    console.log("failed", (error as any)?.data?.message);
  }

  return (
    <div className="p-5 md:p-10">
      <h2 className="text-lg font-bold text-center underline">
        Add A New User
      </h2>
      <div className="mt-10 w-full ">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-2">
            <input
              className="py-1 px-2 mx-auto rounded-md w-full md:w-[60%]"
              type="text"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-center text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <input
              className="py-1 px-2 mx-auto rounded-md w-full md:w-[60%]"
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-center text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <input
              className="py-1 px-2 mx-auto rounded-md w-full md:w-[60%]"
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-center text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <input
              className="py-1 px-2 mx-auto rounded-md w-full md:w-[60%]"
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="text-center text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <input
              className="py-1 px-2 mx-auto rounded-md w-full md:w-[60%]"
              type="text"
              placeholder="address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="flex flex-col mt-5">
            <input
              className="bg-deeper py-2 rounded-md cursor-pointer text-white mx-auto w-full md:w-[60%]"
              type="submit"
              value="Add User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
