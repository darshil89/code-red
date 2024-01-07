"use cleint";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <header className="h-screen mt-20">
        <div className="text-4xl mt-8 ml-4 mb-4 text-gray-700 font-semibold">
          Choose <span className="text-blue-500">Yourself</span>
        </div>
        <nav className="flex">
          <div className="relative hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <Link href="/EmployerSignUp">
              <div>
                <Image
                  src="/images/company.jpg"
                  width={600}
                  height={600}
                  alt="Company"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-200">
                  <span className="text-white font-bold text-3xl">Company</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <Link href="/UserSignUp">
              <div>
                <Image
                  src="/images/coder.jpg"
                  width={600}
                  height={600}
                  alt="Candidate"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-200">
                  <span className="text-white font-bold text-3xl">Candidate</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <Link href="/MentorSignUp">
              <div>
                <Image
                  src="/images/mentor.jpg"
                  width={600}
                  height={600}
                  alt="Mentor"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-200">
                  <span className="text-white font-bold text-3xl">Mentor</span>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SignUp;
