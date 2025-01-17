import { DragDropManager, Unsubscribe, Listener, Identifier } from 'dnd-core-cjs';
import { DragSourceMonitor } from '../interfaces';
export declare class DragSourceMonitorImpl implements DragSourceMonitor {
    private internalMonitor;
    private sourceId;
    constructor(manager: DragDropManager);
    receiveHandlerId(sourceId: Identifier | null): void;
    getHandlerId(): Identifier | null;
    canDrag(): boolean;
    isDragging(): boolean;
    subscribeToStateChange(listener: Listener, options?: {
        handlerIds: Identifier[] | undefined;
    }): Unsubscribe;
    isDraggingSource(sourceId: Identifier): boolean;
    isOverTarget(targetId: Identifier, options?: {
        shallow: boolean;
    }): boolean;
    getTargetIds(): Identifier[];
    isSourcePublic(): boolean | null;
    getSourceId(): Identifier | null;
    subscribeToOffsetChange(listener: Listener): Unsubscribe;
    canDragSource(sourceId: Identifier): boolean;
    canDropOnTarget(targetId: Identifier): boolean;
    getItemType(): string | symbol | null;
    getItem(): any;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): import("dnd-core-cjs").XYCoord | null;
    getInitialSourceClientOffset(): import("dnd-core-cjs").XYCoord | null;
    getSourceClientOffset(): import("dnd-core-cjs").XYCoord | null;
    getClientOffset(): import("dnd-core-cjs").XYCoord | null;
    getDifferenceFromInitialOffset(): import("dnd-core-cjs").XYCoord | null;
}
