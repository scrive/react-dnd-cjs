import { TargetType } from 'dnd-core-cjs';
import { DndOptions } from '../interfaces';
import { DropTargetSpec, DropTargetCollector, DndComponentEnhancer } from './interfaces';
export declare function DropTarget<RequiredProps, CollectedProps = {}>(type: TargetType | ((props: RequiredProps) => TargetType), spec: DropTargetSpec<RequiredProps>, collect: DropTargetCollector<CollectedProps, RequiredProps>, options?: DndOptions<RequiredProps>): DndComponentEnhancer<CollectedProps>;
