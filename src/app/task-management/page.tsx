"use client";

import { cardsData } from "../../components/DndContext/dndData";
import { useEffect, useState } from "react";
import { Draggable, DropResult, Droppable } from "react-beautiful-dnd";
// import LoadingSkeleton from "./LoadingSkeleton";
import { DndContext } from "../../components/DndContext/DndContext";
import { useTaskStore } from "../../store/TaskStore";
interface Cards {
  _id: number;
  projectName: string;
  taskName: string;
  taskDescription: string;
  deadline: string;
  dueDate: string;
  assignMembers: string[];
}
interface IniCard {
  _id: number;
  title: string;
}
const iniCard = [
  {
    id: 0,
    title: "Todo",
  },
  {
    id: 1,
    title: "In Progress",
  },
  {
    id: 2,
    title: "Done",
  },
];
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
  const allTask = useTaskStore((state) => state.manageTasks);
  // console.log("test", allTask);
  useEffect(() => {
    getManageTask();
  }, [getManageTask]);
  const [data, setData] = useState<IniCard[] | []>([]);
  const [taskData, setTaskData] = useState<Cards[] | []>([]);
  console.log("now", data);

  // project

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId.split("droppable")[1]
      );
      const [item] = newData[oldDroppableIndex].components.splice(
        source.index,
        1
      );
      newData[newDroppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const [item] = newData[droppableIndex].components.splice(source.index, 1);
      newData[droppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    }
  };
  useEffect(() => {
    setTaskData(allTask);
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
        {iniCard.map((card, index) => {
          return (
            <Droppable key={index} droppableId={`droppable${card.id}`}>
              {(provided) => (
                <div
                  className="p-5 lg:w-1/3 w-full bg-white  border-gray-400 border border-dashed"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-center font-bold mb-6 text-black">
                    {card.title}
                  </h2>
                  {taskData?.map((component, index) => (
                    <Draggable
                      key={component._id}
                      draggableId={component._id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="bg-gray-200 mx-1 px-4 py-3 my-3"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          {component.taskName}
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
