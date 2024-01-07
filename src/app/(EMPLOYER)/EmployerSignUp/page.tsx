"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

const EmployerSignUp = () => {
  const router = useRouter();
  return (
    <div className=" mt-20">
      <div className="flex">
        <button
          onClick={router.back}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          <MdArrowBackIosNew />
        </button>
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <Image
              src={"/images/companysignup.svg"}
              width={700}
              height={700}
              alt="alt"
            ></Image>
          </div>
        </div>

        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-3 text-black text-center">
              Create Account
            </h1>
            <div className="mt-2 mb-6 text-sm text-gray-600 text-center">
              <p>Create your company profile and boost your hiring process</p>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  placeholder="Company Name"
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  placeholder="Company Email"
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <select
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  name="companysize"
                  id="companysize"
                >
                  <option value="">Company Size</option>
                  <option value="1-10">1-10</option>
                  <option value="10-50">10-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-500">100-500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <input
                  placeholder="City"
                  type="text"
                  id="City"
                  name="City"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  placeholder="State"
                  type="text"
                  id="State"
                  name="State"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  placeholder="Conform Password"
                  type="password"
                  id="conformpassword"
                  name="conformpassword"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Dont have an account?{" "}
                <Link href="/signup" className="text-black hover:underline">
                  Create Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignUp;
