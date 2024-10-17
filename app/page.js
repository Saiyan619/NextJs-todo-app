"use client"
import Todo from "@/Components/Todo";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Input } from "@nextui-org/input";
import {Button} from '@nextui-org/button'; 
import { Textarea } from "@nextui-org/input";
// import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import 'react-toastify/dist/ReactToastify.css';
import TodoCard from "./components/Card";

export default function Home() {
  const [formData, setformData] = useState({
    title: "",
    description: ""
  });

  const [todoData, setTodoData] = useState([]);
  // const [isFollowed, setIsFollowed] = React.useState(false);


  const fetchTodos = async () => {
    try {
      const response = await axios('/api');
      setTodoData(response.data.todos)
    } catch (error) {
      console.log(error)
    }
   
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: id
      }
    });
    toast.success(response.data.msg)
    fetchTodos();
  }

  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  const onchangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData(form => ({ ...form, [name]: value }))
    console.log(formData)
  }

  useEffect(() => {
    fetchTodos();
  }, [])
  

  const onsubmitHandler = async(e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post('/api',formData)

      toast.success(response.data.msg)
      setformData({
        title: "",
        description: ""
      })
      await fetchTodos();
    } catch (error) {
      
    }
    console.log("submit btn clicked")
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={onsubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input value={formData.name} onChange={onchangeHandle} type="text" name="title" label="Title" placeholder="Enter your Todo title" />
        </div>

        <Textarea
          value={formData.description} onChange={onchangeHandle} name="description" 
      label="Description"
      placeholder="Enter description"
      className="w-full"
    />
        
        <Button type="submit" className="bg-orange-600 text-white w-full">Create ToDo 🧾</Button>

      </form>
      
      <div className="p-5 flex flex-wrap gap-5 items-center justify-center">
        {todoData.map((item, index) => {
          return <TodoCard key={index}
          id={index}
                mongoId={item._id}
                title={item.title}
                description={item.description}
                complete={item.isCompleted}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo} />
      })}
      </div>

    </>
  );
}












{/* ///////////Table////////// */}
{/* <div className="mt-10">
<h2 className="flex items-center justify-center font-semibold">My To-dos</h2>
<Table aria-label="Example empty table" className="w-[60%] m-auto">
<TableHeader>
  <TableColumn>Id</TableColumn>
  <TableColumn>Title</TableColumn>
  <TableColumn>Description</TableColumn>
  <TableColumn>Status</TableColumn>
  <TableColumn>Actions</TableColumn>
    </TableHeader>
    {todoData ? 
      (<TableBody>

      {todoData.map((item, index) => {       
       return <TableRow key={index}>
                  <TableCell className={`px-6 py-4 ${item.isCompleted ? 'line-through' : ''}`}>{index+1}</TableCell>
                  <TableCell className={`px-6 py-4 ${item.isCompleted ? 'line-through' : ''}`}>{item.title}</TableCell>
                  <TableCell className={`px-6 py-4 ${item.isCompleted ? 'line-through' : ''}`}>{item.description}</TableCell>
                  <TableCell className={`px-6 py-4 ${item.isCompleted ? 'line-through' : ''}`}>{item.isCompleted ? "completed" : "pending"}</TableCell>
         <TableCell className="flex gap-2">
         <Button onClick={()=> deleteTodo(item._id)} className="bg-red-500 text-white w-full">Delete</Button>
         {item.isCompleted ? "":  <Button onClick={()=>completeTodo(item._id)} className="bg-green-500 text-white w-full">Done</Button>}
                  </TableCell>
        
        </TableRow>
         })}
      </TableBody> )
      :
(   <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>)          }
  
</Table>
</div> */}


{/* <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
              </th>
              <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
          <tbody>
            {todoData.map((item, index) => {
              return <Todo key={index}
                id={index}
                mongoId={item._id}
                title={item.title}
                description={item.description}
                complete={item.isCompleted}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo} />
            })}
        </tbody>
        </table>
        

      </div> */}