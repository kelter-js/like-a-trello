import { ColumnDragItem } from "../dragItem";

const isHidden = (
  draggedItem: ColumnDragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean,
): boolean => {
  return Boolean(!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id);
}

export default isHidden;