import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";

export const SettingsArticle = ({title, buyPrice, setBuyPrice, sellPrice, setSellPrice}) => {
    return (<>
        <h3>{title}</h3>
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <TextField
                    value={buyPrice}
                    onChange={e => setBuyPrice(e.target.value)}
                    label={"Precio de compra"}
                    type={"number"}
                    variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type={"number"}
                    value={sellPrice}
                    onChange={ e => setSellPrice(e.target.value)}
                    label={"Precio de venta"}
                    variant="outlined" />
            </Grid>
        </Grid>
    </>)
}