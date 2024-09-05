import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate(); // This hook will allow you to programmatically navigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle your login logic here.
  };

  // Function to handle closing the modal and navigating to the home page
  const closeModalAndRedirect = () => {
    document.getElementById("my_modal_3").close(); // Close the modal
    navigate("/"); // Redirect to home page
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <button
              type="button"
              onClick={closeModalAndRedirect} // Close the modal and redirect
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mt-4">Login</h3>

            {/* Email Input */}
            <div className="mt-3 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-3 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Login Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
            </div>

            {/* Signup Redirect */}
            <p className="mt-4 text-center">
              Not Registered Yet?{" "}
              <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
