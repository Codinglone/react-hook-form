import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const onErrors = (errors) => console.log(errors);

  const registerOptions = {
    name: { 
        required: "Name is required",
        maxLength: {
            value: 30,
            message: "Name must not be greater than 30 characters"
        }
    },
    email: { required: "Email is required" },
    password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, onErrors)}>
      <div>
        <label>Name</label>
        <input
          name="name"
          {...register("name", registerOptions.name)}
        />
        <p style={{color: "red"}}>
        {errors.name && errors.name.message}
        </p>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", registerOptions.email)}
        />
        <p style={{color: "red"}}>
        {errors.email && errors.email.message}
        </p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", registerOptions.password)}
        />
        <p style={{color: "red"}}>
        {errors.password && errors.password.message}
        </p>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
