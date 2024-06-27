export enum ENodeType {
    SCRIPT = "script",
    ACTION = "action"
}


export enum EActionType {
    Query = "query",
    Archive = "archive",
    Upgrade = "upgrade",
}


export type TNode<T> = {
    key: string;
    name: string;
    type: ENodeType;
    summary: string;
    description: string;
    source_nodes: string[];
    handler: T extends ENodeType.SCRIPT ? TScriptNode : TActionNode<EActionType>;
}

export type TScriptNode = {
    script: string[];
}

export type TActionNode<T> = {
    action_type: EActionType;
    handler: T extends EActionType.Query ? TQueryNode<T> : (T extends EActionType.Archive ? TArchiveNode : TUpgradeNode);
}

export type TArchiveNode = {
    tips: string
}

export type TUpgradeNode = {
    tips: string
}

export type TQueryNode<T> = {
    set_bg_knowledge: Record<string, string>
    handler: T;
    type: string
}