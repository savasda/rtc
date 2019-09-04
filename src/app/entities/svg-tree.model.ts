import { SvgTreeInterface, CenterNode } from "./svg-tree.interface";
import { BlockInterface } from "./block.interface";

export class SvgTreeModel implements SvgTreeInterface {
    static reference: SvgTreeModel;
    isRoot: boolean;    
    center: CenterNode;
    parent: SvgTreeInterface;
    childrens: BlockInterface[];

    getCenter(): CenterNode {
        throw new Error("Method not implemented.");
    }
    createSVG(): void {
        throw new Error("Method not implemented.");
    }

    constructor(items: Array<BlockInterface>) {
        this.parent = null;
        this.isRoot = true;
        SvgTreeModel.reference = this;
    }

}
