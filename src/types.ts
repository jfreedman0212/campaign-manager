export const enum CharacterType {
    PLAYER = 'player',
    NON_PLAYER = 'non_player',
}

export type Campaign = {
    readonly id: number,
    readonly name: string,
    readonly description: string,
};

export type Character = {
    readonly id: number,
    readonly campaignId: number,
    readonly name: string,
    readonly type: CharacterType,
    readonly strength: number,
    readonly dexterity: number,
    readonly constitution: number,
    readonly intelligence: number,
    readonly wisdom: number,
    readonly charisma: number,
};