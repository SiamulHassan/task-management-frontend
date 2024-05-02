"use client";

import { cardsData } from "../../components/DndContext/dndData";
import { useEffect, useState } from "react";
import { Draggable, DropResult, Droppable } from "react-beautiful-dnd";
// import LoadingSkeleton from "./LoadingSkeleton";
import { DndContext } from "../../components/DndContext/DndContext";
import { useTaskStore } from "../../store/TaskStore";
// interface Cards {
//   _id: number;
//   projectName: string;
//   taskName: string;
//   taskDescription: string;
//   deadline: string;
//   dueDate: string;
//   assignMembers: string[];
// }
interface IniCard {
  id: number;
  title: string;
  tasks: {
    _id: number;
    projectName: string;
    taskName: string;
    taskDescription: string;
    deadline: string;
    dueDate: string;
    assignMembers: string[];
  }[];
}

// interface Cards {
//   _id: number;
//   projectName: string;
//   taskName: string;
//   taskDescription: string;
//   deadline: string;
//   dueDate: string;
//   assignMembers: string[];
// }
const DndExample = () => {
  const getManageTask = useTaskStore((state) => state.getManageTask);
  const allTask = useTaskStore((state) => state.iniCard);
  console.log("test", allTask);
  useEffect(() => {
    getManageTask();
  }, [getManageTask]);
  const [data, setData] = useState<IniCard[] | []>([]);
  // const [taskData, setTaskData] = useState<Cards[] | []>([]);
  // console.log("now", taskData);

  // project

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    // console.log(source.droppableId);
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))];
      //console.log("newS", newData);
      //shallow copy concept
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId
      );
      const [item] = newData[oldDroppableIndex].tasks.splice(source.index, 1);
      newData[newDroppableIndex].tasks.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId
      );
      const [item] = newData[droppableIndex].tasks.splice(source.index, 1);
      newData[droppableIndex].tasks.splice(destination.index, 0, item);
      setData([...newData]);
    }
  };
  useEffect(() => {
    setData(allTask);
  }, [allTask]);
  if (!data.length) {
    // return <LoadingSkeleton />;
  }
  return (
    <DndContext onDragEnd={onDragEnd}>
      <h1 className="text-center mt-8 mb-3 font-bold text-[25px] ">
        Drag and Drop Application
      </h1>
      <div className="flex gap-4 justify-between my-20 mx-4 flex-col lg:flex-row">
        {data.map((val, index) => {
          return (
            <Droppable key={index} droppableId={`${val.id}`}>
              {(provided) => (
                <div
                  className="p-5 lg:w-1/3 w-full bg-white  border-gray-400 border border-dashed"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-center font-bold mb-6 text-black">
                    {val.title}
                  </h2>
                  {val?.tasks?.map((component, index) => (
                    <Draggable
                      key={component._id}
                      draggableId={`${val.id}-${component._id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="bg-gray-200 mx-1 px-4 py-3 my-3"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <p>{component.taskName}</p>
                          <p>{component.taskDescription}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DndContext>
  );
};

export default DndExample;
