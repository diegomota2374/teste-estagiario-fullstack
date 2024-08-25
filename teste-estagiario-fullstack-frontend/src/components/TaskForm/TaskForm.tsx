// src/components/TaskForm/TaskForm.tsx
import React from "react";
import useTaskForm from "../../hooks/useTaskForm/useTaskForm";
import { TaskFormProps } from "../../types";
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

const TaskForm: React.FC<TaskFormProps> = () => {
  const { register, handleSubmit, errors, onSubmit } = useTaskForm();

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
