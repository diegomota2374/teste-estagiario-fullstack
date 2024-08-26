// src/components/TaskForm/TaskForm.tsx
import React from "react";
import useTaskForm from "../../hooks/useTaskForm/useTaskForm";
// import { TaskFormProps } from "../../types";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  SubmitButton,
} from "./TaskForm.styles";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TaskFormInputs } from "../../types";

interface TaskFormProps {
  register: UseFormRegister<TaskFormInputs>;
  handleSubmit: UseFormHandleSubmit<TaskFormInputs>;
  errors: FieldErrors<TaskFormInputs>;
  onSubmit: (data: TaskFormInputs) => void;
  onBack: () => void; // Propriedade adicional para o botão de voltar
}

const TaskForm: React.FC<TaskFormProps> = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  onBack,
}) => {
  return (
    <>
      <FormContainer>
        <FormTitle>Adicionar Nova Tarefa</FormTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Título:</Label>
            <Input
              type="text"
              {...register("title", {
                required: "O título é obrigatório",
                maxLength: { value: 100, message: "O título é muito longo" },
              })}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Descrição:</Label>
            <TextArea
              {...register("description", {
                required: "A descrição é obrigatória",
                maxLength: { value: 500, message: "A descrição é muito longa" },
              })}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </FormGroup>
          <SubmitButton type="submit">Adicionar Tarefa</SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default TaskForm;
