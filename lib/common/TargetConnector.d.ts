import { Backend, Identifier } from 'dnd-core-cjs';
import { Connector } from './SourceConnector';
export declare class TargetConnector implements Connector {
    hooks: any;
    private handlerId;
    private dropTargetRef;
    private dropTargetNode;
    private dropTargetOptionsInternal;
    private unsubscribeDropTarget;
    private lastConnectedHandlerId;
    private lastConnectedDropTarget;
    private lastConnectedDropTargetOptions;
    private readonly backend;
    constructor(backend: Backend);
    readonly connectTarget: any;
    reconnect(): void;
    receiveHandlerId(newHandlerId: Identifier | null): void;
    dropTargetOptions: any;
    private didHandlerIdChange;
    private didDropTargetChange;
    private didOptionsChange;
    private disconnectDropTarget;
    private readonly dropTarget;
    private clearDropTarget;
}
