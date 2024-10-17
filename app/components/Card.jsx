import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function TodoCard({id, title, description, mongoId, complete, deleteTodo, completeTodo}) {

  return (
    <Card className="max-w-[340px] mt-5">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className={`text-small font-semibold leading-none text-default-600 ${complete ? 'line-through' : ''}`}>{title}</h4>
          </div>
              </div>
              {     complete ? "" :   <Button
          className="bg-green-500"
          radius="full"
          size="sm"
          onClick={()=>completeTodo(mongoId)}
        >
                  Done
                  </Button>}
        
        

              
      </CardHeader>
      <CardBody className={`px-3 py-0 text-small text-default-400 ${complete ? 'line-through' : ''}`}>
        <p>
               {description}
              </p>
       
      </CardBody>
      <CardFooter className="gap-3 ">
              <div className="flex gap-5 items-center justify-between">
              <Button
          className="bg-red-500"
          radius="full"
          size="sm"
         onClick={()=> deleteTodo(mongoId)}
        >
                  Delete
              </Button>
                  
                   <span className="font-semibold text-default-400 text-small">
          #FullstackBuiltByNiyi
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
        </div>
      </CardFooter>
    </Card>
  );
}
