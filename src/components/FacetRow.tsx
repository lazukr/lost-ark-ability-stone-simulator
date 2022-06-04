import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { FacetNode, FacetNodeState } from "./FacetNode";
import { RowSelect } from "../AbilityStone";
import { red, blue } from "@mui/material/colors";

interface FacetRowProps {
    nodes: FacetNodeState[];
    row: RowSelect;
    updateStone: (row: RowSelect) => void;
}

const rowToColour = (row: RowSelect) => {
    switch(row) {
        case RowSelect.Top:
            return blue[500];
        case RowSelect.Mid:
            return blue[500];
        case RowSelect.Bot:
            return red[500];
    }
};

export const FacetRow = ({
    nodes,
    row,
    updateStone,
}: FacetRowProps) => {

    const colour = rowToColour(row);
    return (
        <Grid 
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 0.5,
                    width: 64,
                    height: 64,
                },
            }}
        >
            <Paper 
                elevation={0}
                square
                variant="outlined"
                sx={{
                    backgroundColor: colour,
                }}
            />
            {nodes.map((state, i) => <FacetNode key={i} state={state} colour={colour}/>)}
            <IconButton
                size="large"
                sx={{
                    color: colour,
                }}
                disabled={!nodes.some(node => node === FacetNodeState.Empty)}
                onClick={() => {updateStone(row)}}
            >
                <Paper
                    elevation={0}
                    square
                    variant="outlined"
                    sx={{
                        color: colour,
                        fontSize: 32,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle",
                        backgroundColor: colour,
                    }}
                >
                    🔨
                </Paper>
            </IconButton>
        </Grid>
    );
}