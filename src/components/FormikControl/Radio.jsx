import React from 'react';
import {FormControl, ThemeProvider, makeStyles, MenuItem, InputLabel, Select, FormGroup} from "@material-ui/core";
import {theme} from "./UI/MuiTheme";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontSize: "3vh",
  },
  select: {
    color: "#fff",
  },
  option: {
    fontWeight: "600",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
    fontSize: "2.5vh",
  }
}));

export default function Radio({name, label, options, setFieldValue}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    console.log(event.target.value)
    setFieldValue(name, event.target.value)
    setAge(event.target.value)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.label}>{label}</InputLabel>
          <Select
            className={classes.select}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={(e) => handleChange(e)}
          >{options.map((o, i) => <MenuItem className={classes.option} key={i} value={o.value}>{o.name}</MenuItem>)}
          </Select>
        </FormControl>
      </FormGroup>
    </ThemeProvider>
  );
}