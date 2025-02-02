import { useDraggable, useDroppable } from "@dnd-kit/core";
import { FC, ReactElement, ReactNode } from "react";

type DropableProps = {
  children: ReactNode;
  id: string | null;
};

const Dropable: FC<DropableProps> = (props: DropableProps): ReactElement => {
  // dragable
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <>
      <div ref={setNodeRef} style={style} className="flex bg-slate-600 justify-center align-middle">
        {props.children}
      </div>
    </>
  );
};

export default Dropable;
