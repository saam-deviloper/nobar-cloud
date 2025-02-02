"use client";
import { DndContext } from "@dnd-kit/core";
// import ToolsCart from '../../components/toolsCart'
import Dragable from "@/components/dragable";
import Dropable from "@/components/dropable";
import { useState } from "react";

export default function DropDown() {
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);
  const containers = ["A", "B", "C"];
  const draggableMarkup = <Dragable id="draggable">Drag me</Dragable>;

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Dropable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Dropable>
        ))}
      </DndContext>
    </>
  );
}
