import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
});

const logTodo = (id, title, finished) => {
  console.log(`
        ID : ${id}
        Title : ${title}
        Finished : ${finished}
        `);
};
