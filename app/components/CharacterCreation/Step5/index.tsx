import { TextField } from "@mui/material";

export default function Step5(){
    return(
        <div>
            <h1>Concept</h1>
            <small>Determine your idea for the character. Come up with your own concept - or you could get ideas by taking one or more entry from each of the following two tables.</small>
            <TextField id="outlined-basic" label="Concept" variant="outlined" />
        </div>
    )
}