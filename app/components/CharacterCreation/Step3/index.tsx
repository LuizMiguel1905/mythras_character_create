"use client"
import { TextField } from "@mui/material";
import StatsCharacter from "../../StatsCharacter";
import { StatsCharacterEnum } from "@/app/util/stats";
import { useState } from "react";
export default function Step3() {
    
    const [pointsValue, setPointsValue] = useState<number>(80);
    return (
        <div className="flex flex-col gap-4">
            <h1>Characteristics</h1>
            <small>Roll for and Assign Characteristics</small>
            <small>For Humans, there are 2 ways to calculate characteristics.</small>
            <small>Roll 3d6 each for STR, CON, DEX, POW and CHA. Roll 2d6+6 each for INT and SIZ.</small>
            <small>Distribute from a pool of 80 points to the skills as you or the GM see fit. Minimum allocation is 3 points per characteristic except for INT and SIZ which is 6. Maximum 18 for all.</small>

            <div className="flex flex-col gap-2.5 justify-center">
                <StatsCharacter type_name={StatsCharacterEnum.STR} />
                <StatsCharacter type_name={StatsCharacterEnum.DEX} />
                <StatsCharacter type_name={StatsCharacterEnum.CON} />
                <StatsCharacter type_name={StatsCharacterEnum.POW} />
                <StatsCharacter type_name={StatsCharacterEnum.CHA} />
                <StatsCharacter type_name={StatsCharacterEnum.INT} />
                <StatsCharacter type_name={StatsCharacterEnum.SIZ} />
            </div>
            <span>Points: {pointsValue}</span>
        </div>
    );
}
