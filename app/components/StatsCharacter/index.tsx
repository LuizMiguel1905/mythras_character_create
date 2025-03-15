"use client"
import { StatsCharacterProps, StatsCharacterEnum } from "@/app/util/stats";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function StatsCharacter({ type_name }: StatsCharacterProps) {
    const [value, setValue] = useState<number | string>("");

    const rollDice = () => {
        let rollResult = 0;

        switch (type_name) {
            case StatsCharacterEnum.STR:
            case StatsCharacterEnum.CON:
            case StatsCharacterEnum.DEX:
            case StatsCharacterEnum.POW:
            case StatsCharacterEnum.CHA:
                rollResult = roll3d6();
                break;

            case StatsCharacterEnum.INT:
            case StatsCharacterEnum.SIZ:
                rollResult = roll2d6Plus6();
                break;

            default:
                rollResult = 0;
        }

        setValue(rollResult);
    };

    const roll3d6 = () => {
        return (
            Math.floor(Math.random() * 6 + 1) + 
            Math.floor(Math.random() * 6 + 1) + 
            Math.floor(Math.random() * 6 + 1)
        );
    };

    const roll2d6Plus6 = () => {
        return (
            Math.floor(Math.random() * 6 + 1) + 
            Math.floor(Math.random() * 6 + 1) + 6
        );
    };

    return (
        <div className="flex flex-row items-center gap-4">
            <TextField 
                id="outlined-basic" 
                label={type_name} 
                variant="outlined" 
                value={value} 
                InputProps={{ readOnly: true }} 
            />
            <Button variant="contained" onClick={rollDice}>Roll</Button>
        </div>
    );
}
