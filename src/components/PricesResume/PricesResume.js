import {Stack, styled} from "@mui/material";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ItemBuy = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffa1a1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ItemSell = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#00746a' : '#5dc2b8',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const PricesResume = ({title, buyPrice, sellPrice}) => {
    return (<>
        <Stack direction="row" justifyContent="end" spacing={2} mb={1}>
            <Item>{title}</Item>
            <ItemBuy>{buyPrice}</ItemBuy>
            <ItemSell>{sellPrice}</ItemSell>
        </Stack>
    </>);
}