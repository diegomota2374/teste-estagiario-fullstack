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
    <RegisterContainerPage>
      <RegisterContainer>
        <Title>Task Manager</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Nome:</Label>
            <Input
              {...register("name", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 2,
                  message: "O nome deve ter pelo menos 2 caracteres",
                },
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
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
          <ButtonContainer>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Cadastre-se"}
            </SubmitButton>
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
          </ButtonContainer>
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
        </Form>
      </RegisterContainer>
    </RegisterContainerPage>
  );
};

export default Register;
