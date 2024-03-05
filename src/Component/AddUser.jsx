import addUser from "../Assets/Css/addUser.css";
// import { Navigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Redux/reducer";

const AddUser = ({ handlepop }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: data.name,
        email: data.email,
        phone: data.phone,
      })
      .then(function (response) {
        console.log(response);
        dispatch(add(data));
        handlepop(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="addUserCont">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        Name :{" "}
        <input
          {...register("name", { required: "This is required", maxLength: 20 })}
        />
        <p className="errorMessage"> {errors?.name?.message}</p>
        Email :{" "}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Email is not available",
            },
          })}
        />
        <p className="errorMessage"> {errors?.email?.message}</p>
        Phone :
        <input
          {...register("phone", {
            required: "Phone Number is  required ",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid Phone Number.",
            },
          })}
        />
        <p className="errorMessage"> {errors?.phone?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
