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
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Endereço de e-mail inválido",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Senha:</Label>
            <Input
              type="password"
              {...register("password", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres",
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
