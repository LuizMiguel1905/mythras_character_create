import { TextField } from "@mui/material";

export default function Step2(){
    return(
        <div className="flex flex-col gap-8">
            <h1>Concept</h1>
            <small>Determine your idea for the character. Come up with your own concept</small>
            <TextField id="outlined-basic" label="Concept" variant="outlined" />
        </div>
    )
}