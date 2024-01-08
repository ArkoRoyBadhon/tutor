import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 md:p-8 rounded shadow-md w-[80%] md:w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
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
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-deep text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <hr className="mt-5 border-b border-solid border-black" />
        <div className="mt-2 cursor-pointer">
          <div className="bg-light hover:bg-deep flex items-center gap-3 py-1 justify-center rounded-md text-gray-700">
            <FcGoogle /> <p className="">Login with Google</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        Not an account? <Link className="font-bold text-deep" href="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
