import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Login({ setDados }) {
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const sendLogin = (data) => {
    setDados(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(sendLogin)}>
        <input placeholder="Username" {...register("username")}></input>
        {errors.username && (
          <div className="error">{errors.username.message}</div>
        )}
        <input placeholder="Password" {...register("password")}></input>
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
