import { useDraggable } from "@dnd-kit/core";
import { FC, ReactElement, ReactNode } from "react";

type DragableProps = {
  children: ReactNode;
  id: string | null;
};

const Dragable: FC<DragableProps> = (props: DragableProps): ReactElement => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-indigo-600 rounded-sm"
    >
      {props.children}
    </button>
  );
};

export default Dragable;
