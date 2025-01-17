import { Backend, Identifier } from 'dnd-core-cjs';
import { DragSourceOptions, DragPreviewOptions } from '../interfaces';
export interface Connector {
    hooks: any;
    connectTarget: any;
    receiveHandlerId(handlerId: Identifier | null): void;
    reconnect(): void;
}
export declare class SourceConnector implements Connector {
    hooks: any;
    private handlerId;
    private dragSourceRef;
    private dragSourceNode;
    private dragSourceOptionsInternal;
    private dragSourceUnsubscribe;
    private dragPreviewRef;
    private dragPreviewNode;
    private dragPreviewOptionsInternal;
    private dragPreviewUnsubscribe;
    private lastConnectedHandlerId;
    private lastConnectedDragSource;
    private lastConnectedDragSourceOptions;
    private lastConnectedDragPreview;
    private lastConnectedDragPreviewOptions;
    private readonly backend;
    constructor(backend: Backend);
    receiveHandlerId(newHandlerId: Identifier | null): void;
    readonly connectTarget: any;
    dragSourceOptions: DragSourceOptions | null;
    dragPreviewOptions: DragPreviewOptions | null;
    reconnect(): void;
    private reconnectDragSource;
    private reconnectDragPreview;
    private didHandlerIdChange;
    private didConnectedDragSourceChange;
    private didConnectedDragPreviewChange;
    private didDragSourceOptionsChange;
    private didDragPreviewOptionsChange;
    private disconnectDragSource;
    private disconnectDragPreview;
    private readonly dragSource;
    private readonly dragPreview;
    private clearDragSource;
    private clearDragPreview;
}
