
import { throttle } from "throttle-debounce-ts";
import { useRef, useMemo } from "react";

import { CardContainer } from "./styles";
import useItemDrag from "./hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import isHidden from "./utils/isHidden";
import { moveTask, setDraggedItem } from "./state/actions";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, columnId, isPreview }: CardProps): JSX.Element => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  const [_, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem || draggedItem.type !== "CARD" || draggedItem.id === id) {
        return;
      }

      dispatch(
        moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
      );

      dispatch(setDraggedItem({ ...draggedItem, columnId }));

    }),
  });

  const shouldBeHidden = useMemo(() => {
    return isHidden(draggedItem, "CARD", id, isPreview);
  }, [draggedItem, id, isPreview]);

  drag(drop(ref));

  return (
    <CardContainer
      isHidden={shouldBeHidden}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  );
}

export default Card;