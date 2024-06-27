import {TEdge} from "./edge.ts";
import {TNode} from "./node.ts";
import {TBgKnowledge} from "./BgKnowledge.ts";

export type TFlow = {
    nodes: TNode<unknown>[];
    edges: TEdge[];
    bg_knowledge: TBgKnowledge;
}