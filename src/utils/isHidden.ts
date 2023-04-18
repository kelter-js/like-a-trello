import { ColumnDragItem } from "../dragItem";

const isHidden = (
  draggedItem: ColumnDragItem | null,
  itemType: string,
  id: string,
): boolean => {
  return Boolean(draggedItem && draggedItem.type === itemType && draggedItem.id === id);
}

export default isHidden;