import { useState } from "react";
import Loader from "../helpers/loader/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../helpers/toasterMessages/Toaster";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const url = "https://netflix-clone-apis.vercel.app/api/v1/login";
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      };
      if (!(formData.email && formData.password)) {
        return toast.error("inputs field is required");
      }
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      if (!(data.success === false)) {
        successToast("Login successfully");
        return navigate("/home");
      }
      errorToast("email or password incorrect");
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };
  return (
    <div className="form-design shadow-lg rounded">
      <h2 className="text-center">Sign-In</h2>
      <form>
        <div className="form-group mb-3 mt-5">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            value={formData.email}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            value={formData.password}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;
