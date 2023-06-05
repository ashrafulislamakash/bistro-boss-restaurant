import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import colorLogo from "../../assets/colorlogo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User Profile Updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={colorLogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />

                {errors.name?.type === "required" && (
                  <p className="text-red text-sm" role="alert">
                    Name is required{" "}
                  </p>
                )}
              </div>
            </div>
            {/* <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo Url
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("photoURL", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />

                {errors.name?.type === "required" && (
                  <p className="text-red text-sm" role="alert">
                    photoUrl is required{" "}
                  </p>
                )}
              </div>
            </div> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red text-sm" role="alert">
                  email is required{" "}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red text-sm" role="alert">
                  password is required{" "}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkgold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have a Account?{" "}
            <Link to="/login">
              {" "}
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
