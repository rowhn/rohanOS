import { useCallback, useRef } from 'react';

// Attaches drag behaviour to a title-bar ref. Reports live position updates
// and, on release, whether the pointer ended near a screen edge (for snap).
export function useDraggableWindow({ onMove, onDragEnd, disabled }) {
  const dragState = useRef(null);

  const handleMouseDown = useCallback(
    (e) => {
      if (disabled) return;
      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
      };

      const handleMouseMove = (moveEvent) => {
        if (!dragState.current) return;
        const dx = moveEvent.clientX - dragState.current.lastX;
        const dy = moveEvent.clientY - dragState.current.lastY;
        dragState.current.lastX = moveEvent.clientX;
        dragState.current.lastY = moveEvent.clientY;
        onMove(dx, dy);
      };

      const handleMouseUp = (upEvent) => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        const x = upEvent.clientX;
        let side = null;
        if (x <= 3) side = 'left';
        else if (x >= window.innerWidth - 3) side = 'right';
        if (onDragEnd) onDragEnd(side);
        dragState.current = null;
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [onMove, onDragEnd, disabled]
  );

  return handleMouseDown;
}
