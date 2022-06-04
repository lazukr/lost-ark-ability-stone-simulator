import Paper from "@mui/material/Paper";

export enum FacetNodeState {
    Empty,
    Fail,
    Success,
};

const emptyColour = "#CCCCCC";
const failedColour = "#000000";

const getFacetNode = (colour: string, empty: boolean) => {
    return (<Paper
                elevation={0}
                square
                variant="outlined"
                sx={{
                    color: colour,
                    fontSize: 64,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle"
                }}
            >
                {empty ? "⬦" : "◆" }
            </Paper>);
};

const getFacetNodeSymbol = (state: FacetNodeState, colour: string) => {
    switch (state) {
        case FacetNodeState.Empty:
            return getFacetNode(emptyColour, true);
        case FacetNodeState.Fail:
            return getFacetNode(failedColour, false);
        case FacetNodeState.Success:
            return getFacetNode(colour, false);
    }
}

interface FacetNodeProps {
    state: FacetNodeState;
    colour: string;
}

export const FacetNode = ({
    state,
    colour,
}: FacetNodeProps) => {
    return getFacetNodeSymbol(state, colour);
}


