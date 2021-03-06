import xhrReq from '../utils/xhr';

const fetchTodos = () => {
  return xhrReq({
    path: `/todo`,
  });
};
const addTodo = (data) => {
  return xhrReq({
    path: '/todo',
    method: 'POST',
    body: data,
  });
};
const updateTodo = (data) => {
  return xhrReq({
    path: '/todo',
    method: 'PUT',
    body: data,
  });
};

const deleteTodo = (id) => {
  return xhrReq({
    path: `/todo/delete/${id}`,
    method: 'DELETE',
  });
};

const TodoService = {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};

export default TodoService;
