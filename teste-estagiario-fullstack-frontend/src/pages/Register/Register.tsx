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
        <Title>Register</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Name:</Label>
            <Input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters long",
                },
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
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
          <ButtonContainer>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </SubmitButton>
            <CancelButton type="button" onClick={handleCancel}>
              Cancel
            </CancelButton>
          </ButtonContainer>
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
        </Form>
      </RegisterContainer>
    </RegisterContainerPage>
  );
};

export default Register;
