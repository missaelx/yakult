import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsIcon from '@mui/icons-material/Settings';
import CalculateIcon from '@mui/icons-material/Calculate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import {useEffect, useRef, useState} from "react";
import {Calculator} from "../../Containers/Calculator/Calculator";
import {Settings} from "../../Containers/Settings/Settings";

const MainComponent = (value) => {
    switch (value.value){
        case 0:
            return <Calculator/>;
        case 1:
            return <Settings/>;
        default:
            return <Calculator/>;

    }
}
export const LabelBottomNavigation = () => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, [value]);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <MainComponent value={value} />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Calculadora" icon={<CalculateIcon />} />
                    <BottomNavigationAction label="Ajustes" icon={<SettingsIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}