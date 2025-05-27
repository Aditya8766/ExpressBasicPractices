const { todos } = require('./todos');
const { v4: uuidv4 } = require('uuid');

const resolvers = {
  Query: {
    getTodos: () => todos,
  },
  Mutation: {
    addTodo: (_, { title }) => {
      const newTodo = { id: uuidv4(), title, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
    toggleTodo: (_, { id }) => {
      const todo = todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return todo;
    },
    deleteTodo: (_, { id }) => {
      const index = todos.findIndex(t => t.id === id);
      if (index > -1) {
        todos.splice(index, 1);
        return true;
      }
      return false;
    }
  }
};

module.exports = resolvers;
