import {
  LoginContainer,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  LoginContainerPage,
  RegisterButton,
} from "./Login.styles";
import { useLoginForm } from "../../hooks/useLoginForm/useLoginForm";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    handleRegisterClick,
    errors,
    loading,
    serverError,
    onSubmit,
  } = useLoginForm();

  return (
    <LoginContainerPage>
      <LoginContainer>
        <Title>Task Manager</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Email:</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Password:</Label>
            <Input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </SubmitButton>
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
        </Form>
        <RegisterButton onClick={handleRegisterClick}>
          Não tem uma conta? Cadastre-se aqui.
        </RegisterButton>
      </LoginContainer>
    </LoginContainerPage>
  );
};

export default Login;
