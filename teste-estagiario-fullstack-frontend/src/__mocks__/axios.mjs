import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 500 });

// Configurar o mock com respostas customizadas
mock.onGet("/api/tasks").reply(200, [
  { id: 1, title: "Task 1", description: "Description 1" },
  { id: 2, title: "Task 2", description: "Description 2" },
]);

mock.onPost("/api/tasks").reply(201, {
  id: 3,
  title: "New Task",
  description: "New Task Description",
});

export default mock;
