// src/components/TaskForm/TaskForm.tsx
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  SubmitButton,
  ButtonContainer,
  CancelButton,
} from "./TaskForm.styles";

import { TaskFormProps } from "../../types";

const TaskForm: React.FC<TaskFormProps> = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  onBack,
}) => {
  return (
    <>
      <FormContainer data-testid="form-container">
        <FormTitle data-testid="form-title">Adicionar Nova Tarefa</FormTitle>
        <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
          <FormGroup data-testid="form-group-title">
            <Label data-testid="label-title">Título:</Label>
            <Input
              type="text"
              {...register("title", {
                required: "O título é obrigatório",
                maxLength: { value: 100, message: "O título é muito longo" },
              })}
              data-testid="input-title"
            />
            {errors.title && (
              <ErrorMessage data-testid="error-title">
                {errors.title.message}
              </ErrorMessage>
            )}
          </FormGroup>
          <FormGroup data-testid="form-group-description">
            <Label data-testid="label-description">Descrição:</Label>
            <TextArea
              {...register("description", {
                required: "A descrição é obrigatória",
                maxLength: { value: 500, message: "A descrição é muito longa" },
              })}
              data-testid="textarea-description"
            />
            {errors.description && (
              <ErrorMessage data-testid="error-description">
                {errors.description.message}
              </ErrorMessage>
            )}
          </FormGroup>
          <ButtonContainer data-testid="button-container">
            <SubmitButton type="submit" data-testid="submit-button">
              Adicionar
            </SubmitButton>
            <CancelButton
              type="button"
              onClick={onBack}
              data-testid="cancel-button"
            >
              Cancelar
            </CancelButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};

export default TaskForm;
