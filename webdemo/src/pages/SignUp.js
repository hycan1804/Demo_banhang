import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputOtp } from "primereact/inputotp";
import { sendAuthMail, userInsertAPI } from "../api/userAPI";
export const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [token, setTokens] = useState();
  const [authMail, setAuthMail] = useState();
  const toastTopCenter = useRef(null);
  const toastCenter = useRef(null);
  const [person, setPerson] = useState({
    id: 0,
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    IsAdmin: false,
    confirmPassword: "",
  });

  const onChangeFullName = (e) => {
    const { value } = e.target;
    setPerson({
      ...person,
      fullName: value,
    });
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setPerson({
      ...person,
      email: value,
    });
  };
  const onChangePassword = (e) => {
    const { value } = e.target;
    setPerson({
      ...person,
      password: value,
    });
  };
  const onChangeConfirmPassword = (e) => {
    const { value } = e.target;
    setPerson({
      ...person,
      confirmPassword: value,
    });
  };
  const customInput = ({ events, props }) => {
    return (
      <input
        {...events}
        {...props}
        type="text"
        className="w-[50px] h-[50px] border border-solid text-3xl text-center "
      />
    );
  };
  const onSignUp = (e) => {
    if (
      person.fullName == "" ||
      person.email == "" ||
      person.password == "" ||
      person.confirmPassword == ""
    ) {
      showMessage(e, toastCenter, "error", "Vui lòng nhập đầy đủ thông tin!");
    } else if (person.password != person.confirmPassword) {
      showMessage(
        e,
        toastCenter,
        "error",
        "Nhập lại mật khẩu không trùng khớp!"
      );
    } else {
      onSendAuthMail(person.email);
      //      showMessage(e, toastTopCenter, "success", "Đăng ký thành công");
    }
  };
  const onSendAuthMail = async (email) => {
    var data = await sendAuthMail(email);
    setAuthMail(data);
    setVisible(true);
  };

  const onSubmitCode = async (e) => {
    if (token == authMail) {
      var data = await userInsertAPI(person);
      console.log(data);
      showMessage(e, toastTopCenter, "success", "Đăng ký thành công!");
      person.fullName = "";
      person.email = "";
      person.password = "";
      person.confirmPassword = "";
      setVisible(false);
    } else {
      showMessage(e, toastCenter, "error", "Vui lòng nhập mã xác thực hợp lệ!");
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
  // json
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 rounded-lg shadow-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={person.fullName}
                  name="fullName"
                  id="fullName"
                  placeholder="Your Full Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={onChangeFullName}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={person.email}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Yourname@gmail.com"
                  required=""
                  onChange={onChangeEmail}
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
                  type="password"
                  value={person.password}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={onChangePassword}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={person.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={onChangeConfirmPassword}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5"></div>
                  <div className="ml-3 text-sm"></div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
                  onClick={onSignUp}
                >
                  Create an account
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sign in now?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        onShow={() => setTokens("")}
      >
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl mb-2">Mã XÁC NHẬN</p>
          <p className="text-secondary block mb-4">
            nhập mã xác nhận được gửi về Email của bạn.
          </p>
          <InputOtp
            value={token}
            onChange={(e) => setTokens(e.value)}
            length={6}
            integerOnly
            inputTemplate={customInput}
            onLoad={() => setTokens("")}
          />
          <div className="flex justify-between mt-5 self-stretch">
            <Button
              label="Resend Code"
              link
              className="p-0"
              onClick={() => onSendAuthMail(person.email)}
            ></Button>
            <Button
              label="Submit Code"
              onClick={(e) => onSubmitCode(e)}
            ></Button>
          </div>
        </div>
      </Dialog>
      <Toast ref={toastTopCenter} position="top-center" />
      <Toast ref={toastCenter} position="center" />
    </section>
  );
};
export default SignUp;
