import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const password = useRef({});

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("Username", {
        required: "Username is required"
      })} />
      <input type="text" placeholder="Email" {...register("Email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Entered value does not match email format"
        }
      })} />
      <input type="tel" placeholder="Phone" {...register("Telephone number", {
        required: true
      })} />
      <input type="password" placeholder="Password" {...register("Password", {
        required: "Password is required",
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
          message: "Password must be at least 8 characters long, including 1 letter and 1 number",
        },
      })} />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {
        required: "Confirm password is required",
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
        validate: value => (value === register("Password").value || "The passwords do not match.")
      })} />
      
      <input type="submit" />
      <p></p>{errors["Confirm Password"] && <p>{errors["Confirm Password"].message}</p>}

    </form>
  );
}
