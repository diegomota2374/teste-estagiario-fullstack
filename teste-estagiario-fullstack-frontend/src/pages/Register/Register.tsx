import {
  RegisterContainer,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  CancelButton,
  ErrorMessage,
  RegisterContainerPage,
  ButtonContainer,
} from "./Register.styles";
import { useRegisterForm } from "../../hooks/useRegisterForm/useRegisterForm";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    handleCancel,
    errors,
    loading,
    serverError,
    onSubmit,
  } = useRegisterForm();

  return (
    <RegisterContainerPage data-testid="register-container-page">
      <RegisterContainer data-testid="register-container">
        <Title data-testid="register-title">Task Manager</Title>
        <Form onSubmit={handleSubmit(onSubmit)} data-testid="register-form">
          <div>
            <Label htmlFor="name" data-testid="name-label">
              Nome:
            </Label>
            <Input
              id="name"
              data-testid="name-input"
              {...register("name", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 2,
                  message: "O nome deve ter pelo menos 2 caracteres",
                },
              })}
            />
            {errors.name && (
              <ErrorMessage data-testid="name-error">
                {errors.name.message}
              </ErrorMessage>
            )}
          </div>
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
          <ButtonContainer data-testid="button-container">
            <SubmitButton
              type="submit"
              disabled={loading}
              data-testid="submit-button"
            >
              {loading ? "Registrando..." : "Cadastre-se"}
            </SubmitButton>
            <CancelButton
              type="button"
              onClick={handleCancel}
              data-testid="cancel-button"
            >
              Cancelar
            </CancelButton>
          </ButtonContainer>
          {serverError && (
            <ErrorMessage data-testid="server-error">
              {serverError}
            </ErrorMessage>
          )}
        </Form>
      </RegisterContainer>
    </RegisterContainerPage>
  );
};

export default Register;
