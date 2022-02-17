import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {LabelBottomNavigation} from "./components/BottomNavigation/BottomNavigation";

function App() {
    const [value, setValue] = useState(1);
    return (<>
        <CssBaseline enableColorScheme/>
        <LabelBottomNavigation/>
    </>);
}

export default App;
