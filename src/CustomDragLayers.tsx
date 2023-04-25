import { useDragLayer } from "react-dnd";

import Column from "./Column";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";
import { useAppState } from "./state/AppStateContext";

const CustomDragLayer = (): JSX.Element | null => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column
          id={draggedItem.id}
          text={draggedItem.text}
          isPreview
        />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
}

export default CustomDragLayer;

