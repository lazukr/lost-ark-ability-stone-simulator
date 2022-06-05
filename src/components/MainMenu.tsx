import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GitHubIcon from '@mui/icons-material/GitHub';
import { AbilityStone } from "../AbilityStone";



enum Stone {
    Rare,
    Epic,
    Legendary,
    Relic,
};
const buttonList = [Stone.Rare, Stone.Epic, Stone.Legendary, Stone.Relic];


interface MainMenuProps {
    setNewStone: (abilityStone: AbilityStone) => void;
}

export const MainMenu = ({
    setNewStone,
}: MainMenuProps) => {

    const getNewStone = (stone: Stone) => {
        switch (stone) {
            case Stone.Rare:
                return AbilityStone.getRare(75);
            case Stone.Epic:  
                return AbilityStone.getEpic(75);
            case Stone.Legendary:
                return AbilityStone.getLegend(75);
            case Stone.Relic:
                return AbilityStone.getRelic(75);
        }
    }

    return (
        <React.Fragment>
             <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar>
                    <Typography 
                        variant="h5"
                        color="inherit"
                        noWrap
                        sx={{
                            mr: 2,
                        }}
                    >
                        Ability Stone Simulator
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {buttonList.map(page => (
                            <Button
                                key={page}
                                variant="outlined"
                                sx={{my: 1, mx: 1}}
                                onClick={() => {setNewStone(getNewStone(page))}}
                            >
                                {Stone[page]}
                            </Button>
                        ))}
                    </Box>                  
                    <Button 
                        href="https://github.com/lazukr/lost-ark-ability-stone-simulator" 
                        startIcon={<GitHubIcon/>} 
                        variant="outlined" 
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Github
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}