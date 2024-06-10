import backgroundImage from "../assets/images/bg.jpeg";
import logo from "../assets/images/NH.png";
import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { urlUserLogin } from "../api/setupURL";
import { userLoginAPI, userInsertAPI } from "../api/userAPI";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toastTopCenter = useRef(null);
  const toastCenter = useRef(null);
  const signIn = async (e) => {
    if (email == "" || password == "") {
      showMessage(e, toastCenter, "error", "Vui lòng nhập đầy đủ thông tin!");
    } else {
      await userLoginAPI(email, password);
      showMessage(e, toastTopCenter, "success", "Đăng nhập thành công!");
    }
  };
  const showMessage = (event, ref, severity, detail) => {
    const label = event.target.innerText;
    ref.current.show({
      severity: severity,
      summary: "Thông báo",
      detail: detail,
      life: 3000,
    });
  };
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 rounded-lg shadow-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Yourname@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="bg-yellow-500 hover:bg-green-600 text-white font-medium py-2 px-10 rounded"
                onClick={(e) => signIn(e)}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
        <Toast ref={toastTopCenter} position="top-center" />
        <Toast ref={toastCenter} position="center" />
      </div>
    </section>
  );
};

export default Login;
