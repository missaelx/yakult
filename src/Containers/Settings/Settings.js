import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Snackbar
} from "@mui/material";
import {SettingsArticle} from "../../components/SettingsArticle/SettingsArticle";
import {useLocalStorage} from "../../hooks/useLocalStorageState";
import {useState} from "react";
import SettingsIcon from "@mui/icons-material/Settings";

export const Settings = () => {
    const [yakultBuyPrice, setYakultBuyPrice] = useLocalStorage("yakultBuyPrice", 0);
    const [yakultSellPrice, setYakultSellPrice] = useLocalStorage("yakultSellPrice", 0);

    const [yakult40LTBuyPrice, setYakult40LTBuyPrice] = useLocalStorage("yakult40LTBuyPrice", 0);
    const [yakult40LTSellPrice, setYakult40LTSellPrice] = useLocalStorage("yakult40LTSellPrice", 0);

    const [sofulBuyPrice, setSofulBuyPrice] = useLocalStorage("sofulBuyPrice", 0);
    const [sofulSellPrice, setSofulSellPrice] = useLocalStorage("sofulSellPrice", 0);

    const [sofulBebibleBuyPrice, setSofulBebibleBuyPrice] = useLocalStorage("sofulBebibleBuyPrice", 0);
    const [sofulBebibleSellPrice, setSofulBebibleSellPrice] = useLocalStorage("sofulBebibleSellPrice", 0);

    const [yakultBuyPriceState, setYakultBuyPriceState] = useState(yakultBuyPrice);
    const [yakultSellPriceState, setYakultSellPriceState] = useState(yakultSellPrice);

    const [yakult40LTBuyPriceState, setYakult40LTBuyPriceState] = useState(yakult40LTBuyPrice);
    const [yakult40LTSellPriceState, setYakult40LTSellPriceState] = useState(yakult40LTSellPrice);

    const [sofulBuyPriceState, setSofulBuyPriceState] = useState(sofulBuyPrice);
    const [sofulSellPriceState, setSofulSellPriceState] = useState(sofulSellPrice);

    const [sofulBebibleBuyPriceState, setSofulBebibleBuyPriceState] = useState(sofulBebibleBuyPrice);
    const [sofulBebibleSellPriceState, setSofulBebibleSellPriceState] = useState(sofulBebibleSellPrice);


    const [toatOpen, setToastOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const saveSettings = () => {
        let yakultBuyPriceStateFinal = parseFloat(yakultBuyPriceState);
        let yakultSellPriceStateFinal = parseFloat(yakultSellPriceState);
        let yakult40LTBuyPriceStateFinal = parseFloat(yakult40LTBuyPriceState);
        let yakult40LTSellPriceStateFinal = parseFloat(yakult40LTSellPriceState);
        let sofulBuyPriceStateFinal = parseFloat(sofulBuyPriceState);
        let sofulSellPriceStateFinal = parseFloat(sofulSellPriceState);
        let sofulBebibleBuyPriceStateFinal = parseFloat(sofulBebibleBuyPriceState);
        let sofulBebibleSellPriceStateFinal = parseFloat(sofulBebibleSellPriceState);
        if(
            isNaN(yakultBuyPriceStateFinal) ||
            isNaN(yakultSellPriceStateFinal) ||
            isNaN(yakult40LTBuyPriceStateFinal) ||
            isNaN(yakult40LTSellPriceStateFinal) ||
            isNaN(sofulBuyPriceStateFinal) ||
            isNaN(sofulSellPriceStateFinal) ||
            isNaN(sofulBebibleBuyPriceStateFinal) ||
            isNaN(sofulBebibleSellPriceStateFinal)
        ){
            setDialogOpen(true);
            return;
        }

        setYakultBuyPrice(yakultBuyPriceStateFinal);
        setYakultSellPrice(yakultSellPriceStateFinal);
        setYakult40LTBuyPrice(yakult40LTBuyPriceStateFinal);
        setYakult40LTSellPrice(yakult40LTSellPriceStateFinal);
        setSofulBuyPrice(sofulBuyPriceStateFinal);
        setSofulSellPrice(sofulSellPriceStateFinal);
        setSofulBebibleBuyPrice(sofulBebibleBuyPriceStateFinal);
        setSofulBebibleSellPrice(sofulBebibleSellPriceStateFinal);

        setToastOpen(true);
    }

    return (<>
        <Box m={2} mt={4}>
            <CssBaseline />
            <h1><SettingsIcon /> Ajustes</h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <SettingsArticle title={"Yakult"} buyPrice={yakultBuyPriceState} setBuyPrice={setYakultBuyPriceState} sellPrice={yakultSellPriceState} setSellPrice={setYakultSellPriceState} />
                </Grid>
                <Grid item xs={12}>
                    <SettingsArticle title={"Yakult 40 LT"} buyPrice={yakult40LTBuyPriceState} setBuyPrice={setYakult40LTBuyPriceState} sellPrice={yakult40LTSellPriceState} setSellPrice={setYakult40LTSellPriceState} />
                </Grid>
                <Grid item xs={12}>
                    <SettingsArticle title={"Soful"} buyPrice={sofulBuyPriceState} setBuyPrice={setSofulBuyPriceState} sellPrice={sofulSellPriceState} setSellPrice={setSofulSellPriceState} />
                </Grid>
                <Grid item xs={12}>
                    <SettingsArticle title={"Soful bebible"} buyPrice={sofulBebibleBuyPriceState} setBuyPrice={setSofulBebibleBuyPriceState} sellPrice={sofulBebibleSellPriceState} setSellPrice={setSofulBebibleSellPriceState} />
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={saveSettings}>Guardar</Button>
                        <Snackbar
                            open={toatOpen}
                            autoHideDuration={3000}
                            onClose={() => setToastOpen(false)}
                            message="Guardado"
                        />
                        <Dialog
                            open={dialogOpen}
                            onClose={() => setDialogOpen(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Hay un error en la definición de los precios"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Revisa que el formato de los número sea correcto y que no contenga caracteres ajenos a números.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setDialogOpen(false)} autoFocus>
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>);
}