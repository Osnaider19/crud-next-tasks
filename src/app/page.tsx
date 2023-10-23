import { ButtonDeleteTaks } from "@/components/ButtonDeleteTaks";
import { From } from "@/components/From";

export default async function Home() {
  const getTasks = async () => {
    const data = await fetch("http://localhost:3000/api/tasks");
    const tasks = await data.json();
    return tasks;
  };
  const tasks = await getTasks();
  return (
    <main className="flex  flex-col items-center justify-center overflow-auto">
      <h1>Taks</h1>
      <ul className="flex gap-2 flex-col">
        {tasks.map((task) => (
          <li key={task._id} className="bg-slate-400 rounded-md py-2 px-4">
          <p>{task.title}</p>
          <p>{task.description}</p>
          <ButtonDeleteTaks id={task._id}/>
          </li>
        ))}
      </ul>
      <From/>
    </main>
  );
}
