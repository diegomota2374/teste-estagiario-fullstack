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
        <Title data-testid="login-title">Task Manager</Title>
        <Form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
          <div>
            <Label htmlFor="email" data-testid="email-label">
              Email:
            </Label>
            <Input
              id="email"
              data-testid="email-input"
              {...register("email", {
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Endereço de e-mail inválido",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage data-testid="email-error">
                {errors.email.message}
              </ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="password" data-testid="password-label">
              Senha:
            </Label>
            <Input
              id="password"
              type="password"
              data-testid="password-input"
              {...register("password", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage data-testid="password-error">
                {errors.password.message}
              </ErrorMessage>
            )}
          </div>
          <SubmitButton
            type="submit"
            disabled={loading}
            data-testid="submit-button"
          >
            {loading ? "Carregando..." : "Login"}
          </SubmitButton>
          {serverError && (
            <ErrorMessage data-testid="server-error">
              {serverError}
            </ErrorMessage>
          )}
        </Form>
        <RegisterButton
          onClick={handleRegisterClick}
          data-testid="register-button"
        >
          Não tem uma conta? Cadastre-se aqui.
        </RegisterButton>
      </LoginContainer>
    </LoginContainerPage>
  );
};

export default Login;
