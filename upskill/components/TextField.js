import { Input, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    class: {
        display: 'flex',
        flexWrap: 'wrap',
        border: '2px solid gray'
    },
    standard: {
        margin: theme.spacing(1),
        width: "50px"
    },
    filled: {
        marginTop: theme.spacing(3),
        width: "50px"
    },
    outlined: {
        width: '25ch',
    },
}));

const MuiInput = ({ name, type, placeholder, value, handleChange, ...rest }) => {
    const classes = useStyles();
    return (
        <Input
            className={`${classes} ${props.filled && filled} ${props.outlined && outlined} ${standard && standard}`}
            name
            type
            placeholder
            value
            handleChange
            {...rest}
        />
    )
}

export default MuiInput;
