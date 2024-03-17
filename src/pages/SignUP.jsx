import React, { useEffect } from "react";
import { useState } from "react";
import supabase from "../Supabase";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import getData from "../utils/GetUserData";

function SignUP() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordcheck, setPasswordCheck] = useState(false);
  const [passwordlength, setPasswordlength] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function handlePasswordCheck() {
    setPasswordCheck(true);
  }
  function handlePasswordLength(e) {
    if (e.length <= 6) {
      setPasswordlength(true);
    } else {
      setPasswordlength(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getData().then((data) => {
      if (data?.aud) {
        navigate("/allmovies");
      }
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0 my-20">
          {/* Card */}
          <div class="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-sm bg-[#ffffff0f]">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                {/* User name input */}
                <div>
                  <label
                    for="user_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Afsal VN"
                    required=""
                    onChange={(user) => {
                      setUsername(user.target.value);
                    }}
                  />
                </div>

                {/* Email input */}
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(user) => {
                      setEmail(user.target.value);
                    }}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(user) => {
                      setPassword(user.target.value);
                      handlePasswordLength(user.target.value);
                    }}
                  />
                  {passwordlength && (
                    <p class="text-sm text-red-600 dark:text-red-400 my-4">
                      Passwords should be at least 6 characters
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(user) => {
                      setConfirmPassword(user.target.value);
                    }}
                  />
                  {passwordcheck && (
                    <p class="text-sm text-red-600 dark:text-red-400 my-4">
                      Passwords do not match
                    </p>
                  )}
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={async (btn) => {
                    btn.preventDefault();

                    console.log(email, password);
                    if (password !== confirmPassword) {
                      handlePasswordCheck();
                      return;
                    }

                    const { data: authenticated, error: authError } =
                      await supabase.auth.signUp({
                        email: email,
                        password: password,
                      });

                    if (authError) {
                      return console.log(authError);
                    }

                    console.log("data", authenticated);

                    const { data: databaseEntry, error: databaseEntryError } =
                      await supabase
                        .from("user")
                        .insert({
                          id: authenticated.user.id,
                          username: username,
                        })
                        .select();
                    if (databaseEntryError) {
                      console.log(
                        "databaseEntryError" +
                          JSON.stringify(databaseEntryError)
                      );
                    }

                    if (authError) {
                      return console.log("error" + authError);
                    }

                    alert("Account created successfully");

                    navigate("/allmovies");
                  }}
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUP;
