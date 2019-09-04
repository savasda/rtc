import { BlockInterface } from "./block.interface";

export interface SvgTreeInterface {
    isRoot: boolean;
    center: CenterNode;
    parent: SvgTreeInterface;
    childrens: Array<BlockInterface>;
    getCenter(): CenterNode;
    createSVG(): void;
}

export interface CenterNode {
    x: number;
    y: number;
}
