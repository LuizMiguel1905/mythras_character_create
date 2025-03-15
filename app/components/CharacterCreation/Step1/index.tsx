import { TextField } from "@mui/material";

export default function Step1(){
    return(
        <div className="flex flex-col gap-8 items-center">
            <h1>Details</h1>
            <div className="flex flex-col gap-4">
                <TextField id="outlined-basic" label="Player" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Character" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Species" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Gender" variant="outlined" fullWidth/>
            </div>
        </div>
    )
}