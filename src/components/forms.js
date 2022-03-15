import React from "react";
import { useForm } from "react-hook-form";

function Forms() {
  const { reset, register, formState: { errors, isValid }, handleSubmit } = useForm({
      mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <>
    <h1>React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Name:
            <input
                {...register("firstName", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 5,
                        message: "Минимум 5 символов"
                    }
                })}
            />
        </label>
        <div>
            {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <input type="submit" disabled={!isValid}/>
    </form>
    </>
  );
}

export default Forms;