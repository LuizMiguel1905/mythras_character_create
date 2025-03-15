export enum StatsCharacterEnum {
    STR = "STR",
    CON = "CON",
    DEX = "DEX",
    POW = "POW",
    CHA = "CHA",
    INT = "INT",
    SIZ = "SIZ",
}
export interface StatsCharacterProps {
    type_name: StatsCharacterEnum;
}