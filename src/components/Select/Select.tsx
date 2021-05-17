import { Grid, GridSize, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import React from 'react';
import './Select.css';

interface SelectProps {
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    xl?: GridSize;
    lg?: GridSize;
    options: string[];
    className?: string;
    textFieldParams?: TextFieldProps;
    label?: string;
    name?: string;
    value?: string;
    icon: React.ReactNode;
    onChange?: (event: React.ChangeEvent<{}>, value: string, reason: any, details?: any) => void;
    helper?: string;
    error?: boolean;
    errorMessage?: string;
}

const Select = ({
    xs,
    sm,
    md,
    xl, lg, options, className, label, name, value, onChange, textFieldParams,
    helper,
    icon,
    errorMessage,
    error, }: SelectProps) => {

    return <Grid item xs={xs} sm={sm} md={md} xl={xl} lg={lg} className="m-top-2">
        <Autocomplete
            className={"m-top-1" + className}
            options={options}
            disableClearable
            fullWidth
            onChange={onChange}
            renderInput={(params) =>
                <TextField
                    error={error}
                    {...params}
                    name={name}
                    helperText={error ? <p>{errorMessage}</p> : <p>{helper}</p>}
                    value={value}
                    label={label}
                    variant="outlined"
                    {...textFieldParams}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                {/* <Icon> */}
                            </InputAdornment>
                        ),
                    }}
                />}
        />
    </Grid>
}

export default Select;