export type IColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
}

export type ICardDragItem = {
  id: string;
  columnId: string;
  text: string;
  type: "CARD";
}


export type DragItem = IColumnDragItem | ICardDragItem;