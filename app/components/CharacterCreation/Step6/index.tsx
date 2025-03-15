import { TextField } from "@mui/material";

export default function Step6(){
    return(
        <div>
            <h1>Detalhes</h1>
            <TextField id="outlined-basic" label="Player" variant="outlined" />
            <TextField id="outlined-basic" label="Character" variant="outlined" />
            <TextField id="outlined-basic" label="Species" variant="outlined" />
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
        </div>
    )
}