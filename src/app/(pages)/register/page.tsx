"use client"
import { useCreateUserMutation } from "@/app/redux/features/user/userApi";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string
  email: string;
  password: string;
  confirmPassword: string;
  address: string
};

const RegisterPage = () => {
  const [createUser] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("data", data);
      const res = await createUser(data).unwrap();

      console.log(res);
      
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 md:p-8 rounded shadow-md w-[80%] md:w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("address", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-deep text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>
        {/* <hr className="mt-5 border-b border-solid border-black" /> */}
        {/* <div className="mt-2 cursor-pointer">
          <div className="bg-light hover:bg-deep flex items-center gap-3 py-1 justify-center rounded-md text-gray-700">
            <FcGoogle /> <p className="">Login with Google</p>
          </div>
        </div> */}
      </div>
      <div className="mt-5">
        Already have an account?{" "}
        <Link className="font-bold text-deep" href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
