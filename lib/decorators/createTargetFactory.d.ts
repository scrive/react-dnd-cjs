import * as React from 'react';
import { DropTarget } from 'dnd-core-cjs';
import { DropTargetMonitor } from '../interfaces';
import { DropTargetSpec } from './interfaces';
export interface Target extends DropTarget {
    receiveProps(props: any): void;
    receiveMonitor(monitor: any): void;
}
export default function createTargetFactory<Props>(spec: DropTargetSpec<Props>): (monitor: DropTargetMonitor, ref: React.RefObject<any>) => Target;
