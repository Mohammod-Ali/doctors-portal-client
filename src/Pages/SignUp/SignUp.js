import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const handleSignUp = data => {
        console.log(data)
    }

    return (
        <div className="h-[800px]  flex justify-center items-center">
        <div className="w-96 p-7">
        <h1 className="text-2xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {required: 'Name is required'})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {required: 'Email is required'})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                  required: 'Password is required',
                  minLength: {value: 6, message: 'Password must be 6 characters or longer'}
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
             <label className="label">
              <span className="label-text">Forgat Password</span>
            </label>
          </div>
          <input className="btn btn-accent w-full" value='Sign Up' type="submit" />
        </form>
        <p>Already have an account, Please <Link className="text-primary" to='/login'>Login</Link></p>
        <div className="divider">OR</div>
          <button className="btn btn-outline w-full">Continue with Google</button>
        </div>
      </div>
    );
};

export default SignUp;