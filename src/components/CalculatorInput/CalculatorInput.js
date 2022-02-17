import TextField from '@mui/material/TextField';
export const CalculatorInput = ({label, value, onChangeValue}) => {
    return (<>
        <TextField
            label={label}
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            type={"number"}
            variant="outlined" />
    </>);
}