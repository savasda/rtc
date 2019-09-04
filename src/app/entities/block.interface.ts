export interface BlockInterface {
    link: string;
    content: string;
    childrens?: Array<BlockInterface>
}
