import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {CalculatorInput} from "../../components/CalculatorInput/CalculatorInput";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Stack,
    styled
} from "@mui/material";
import {useState} from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import {useLocalStorage} from "../../hooks/useLocalStorageState";
import {PricesResume} from "../../components/PricesResume/PricesResume";


export const Calculator = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [totalCompra, setTotalCompra] = useState(0);
    const [totalVenta, setTotalVenta] = useState(0);

    const [amountYakult, setAmountYakult] = useState(0);
    const [amountYakult40LT, setAmountYakult40LT] = useState(0);
    const [amountSoful, setAmountSoful] = useState(0);
    const [amountSofulBebible, setAmountSofulBebible] = useState(0);

    const [yakultBuyPrice] = useLocalStorage("yakultBuyPrice", 0);
    const [yakultSellPrice] = useLocalStorage("yakultSellPrice", 0);

    const [yakult40LTBuyPrice] = useLocalStorage("yakult40LTBuyPrice", 0);
    const [yakult40LTSellPrice] = useLocalStorage("yakult40LTSellPrice", 0);

    const [sofulBuyPrice] = useLocalStorage("sofulBuyPrice", 0);
    const [sofulSellPrice] = useLocalStorage("sofulSellPrice", 0);

    const [sofulBebibleBuyPrice] = useLocalStorage("sofulBebibleBuyPrice", 0);
    const [sofulBebibleSellPrice] = useLocalStorage("sofulBebibleSellPrice", 0);

    const onClickCalcular = () => {
        let amountYakultReal = parseFloat(amountYakult);
        let amountYakult40LTReal = parseFloat(amountYakult40LT);
        let amountSofulReal = parseFloat(amountSoful);
        let amountSofulBebibleReal = parseFloat(amountSofulBebible);

        if(isNaN(amountYakultReal)) amountYakultReal = 0;
        if(isNaN(amountYakult40LTReal)) amountYakult40LTReal = 0;
        if(isNaN(amountSofulReal)) amountSofulReal = 0;
        if(isNaN(amountSofulBebibleReal)) amountSofulBebibleReal = 0;

        let buyTotalCompraYakult = amountYakultReal * yakultBuyPrice;
        let buyTotalCompraYakult40LT = amountYakult40LTReal * yakult40LTBuyPrice;
        let buyTotalCompraSoful = amountSofulReal *  sofulBuyPrice;
        let buyTotalCompraSofulBebible = amountSofulBebibleReal * sofulBebibleBuyPrice;

        setTotalCompra( buyTotalCompraYakult
        + buyTotalCompraYakult40LT
        + buyTotalCompraSoful
        + buyTotalCompraSofulBebible);

        let sellTotalYakult = amountYakultReal * yakultSellPrice;
        let sellTotalYakult40LT = amountYakult40LTReal * yakult40LTSellPrice;
        let sellTotalSoful = amountSofulReal * sofulSellPrice;
        let sellTotalSofulBebible = amountSofulBebibleReal * sofulBebibleSellPrice;

        setTotalVenta (sellTotalYakult
        + sellTotalYakult40LT
        + sellTotalSoful
        + sellTotalSofulBebible);

        setDialogOpen(true)

    }

    return (<>
        <Box m={2} mt={4}>
            <CssBaseline />
            <h1><CalculateIcon /> Calculadora</h1>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CalculatorInput value={amountYakult} label={"Yakult"} onChangeValue={setAmountYakult}/>
                </Grid>
                <Grid item xs={6}>
                    <CalculatorInput value={amountYakult40LT} label={"Yakult 40 lt"} onChangeValue={setAmountYakult40LT}/>
                </Grid>
                <Grid item xs={6}>
                    <CalculatorInput value={amountSoful} label={"Soful"} onChangeValue={setAmountSoful}/>
                </Grid>
                <Grid item xs={6}>
                    <CalculatorInput value={amountSofulBebible} label={"Soful bebible"} onChangeValue={setAmountSofulBebible}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                          container
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                        <Button variant="contained" onClick={onClickCalcular}>Calcular</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} mt={5}>
                    <h4 align={"right"}>Precios</h4>
                    <PricesResume title={"Yakult"} buyPrice={yakultBuyPrice} sellPrice={yakultSellPrice} />
                    <PricesResume title={"Yakult 40 LT"} buyPrice={yakult40LTBuyPrice} sellPrice={yakult40LTSellPrice} />
                    <PricesResume title={"Soful"} buyPrice={sofulBuyPrice} sellPrice={sofulSellPrice} />
                    <PricesResume title={"Soful bebible"} buyPrice={sofulBebibleBuyPrice} sellPrice={sofulBebibleSellPrice} />
                </Grid>
            </Grid>

            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Calculo de costos"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <strong>Compra: {totalCompra}</strong><br/><strong>Venta: {totalVenta}</strong>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    </>);
}