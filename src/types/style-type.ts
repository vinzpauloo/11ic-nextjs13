import { SxProps } from "@mui/material";

// for improvement -- type inference not working (styles.parent)
export interface ISXStyleType {
    [key : string] : SxProps
} 
