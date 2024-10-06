import React, { useState, useEffect } from 'react';
import { Paper, Button, Grid, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { MyObject } from './types';
import { setDeep } from './utils';

interface Field {
  type: string;
  label: string;
  path: string;
  values?: string[];
  min?: number;
  max?: number;
  currencies?: string[];
  defaultValue?: any;
}

interface DynamicFormProps {
  config: Field[];
  object: MyObject;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ config, object }) => {
  const [myObject, setMyObject] = useState<MyObject>(object);
  const [savedObject, setSavedObject] = useState<MyObject>();
  const [currentConfig, setCurrentConfig] = useState(config);

  useEffect(() => {
    setCurrentConfig(config);
  }, [config]);

  useEffect(() => {
    setMyObject(object);
  }, [object]);

  const handleChange = (path: string, value: any) => {
    setMyObject(setDeep(myObject, path, value));
  };

  const handleSaveChanges = () => {
    setSavedObject(myObject);
  };

  const renderField = (field: Field) => {
    const value = field.path.split('.').reduce((obj: any, key: string) => obj?.[key], myObject);

    switch (field.type) {
      case 'textInput':
        return (
          <Grid item xs={12} sm={12} md={6} key={field.path}>
            <TextField
              label={field.label}
              value={value || field.defaultValue || ''}
              onChange={(e) => handleChange(field.path, e.target.value)}
              fullWidth
            />
          </Grid>
        );
      case 'integerInput':
        return (
          <Grid item xs={12} sm={12} md={6} key={field.path}>
            <TextField
              label={field.label}
              type="number"
              value={value || field.defaultValue ||''}
              inputProps={{ min: field.min, max: field.max }}
              onChange={(e) => handleChange(field.path, parseInt(e.target.value, 10))}
              fullWidth
            />
          </Grid>
        );
      case 'enumInput':
        return (
          <Grid item xs={12} sm={6} md={6} key={field.path}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>{field.label}</InputLabel>
              <Select
                label={field.label}
                value={value || field.defaultValue || ''}
                onChange={(e) => handleChange(field.path, e.target.value)}
                sx={{ textAlign: 'left' }}
              >
                {field.values?.map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 'currencyInput':
        return (
          <Grid item xs={12} sm={12} md={6} key={field.path}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <FormControl variant="outlined" style={{ flex: 1 }}>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  aria-label={field.label}
                  label={field.label}
                  value={value?.currency || field.defaultValue?.currency || ''}
                  onChange={(e) => handleChange(`${field.path}.currency`, e.target.value)}
                  sx={{ textAlign: 'left' }}
                >
                  {field.currencies?.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Value"
                type="number"
                value={value?.value  || field.defaultValue?.value  || ''}
                inputProps={{
                  min: field.min,
                  max: field.max,
                  step: "0.001"
                }}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const decimalPattern = /^\d+(\.\d{0,3})?$/;
                  
                  if (decimalPattern.test(inputValue) || inputValue === '') {
                    const parsedValue = parseFloat(inputValue);
                    const isValidMin = field.min !== undefined ? parsedValue >= field.min : true;
                    const isValidMax = field.max !== undefined ? parsedValue <= field.max : true;
              
                    if (!isNaN(parsedValue) && isValidMin && isValidMax)  {
                      handleChange(`${field.path}.value`, parsedValue);
                    }
                  }
                }}
                sx={{ 
                  flex: 2, 
                  textAlign: 'left'
                }}
              />
            </div>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper variant="elevation" style={{ margin: '10px' }}>
          <Typography variant="h4">Vehicle Details</Typography>
          <Grid container spacing={2} padding={5}>
            {currentConfig.map(renderField)}
          </Grid>
          <Grid item xs={12}>
            <div style={{ padding: '10px' }}>
              <Button variant="outlined" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="elevation" style={{ margin: '10px' }}>
          <Typography variant="h5">Output</Typography>
          <div style={{ textAlign: 'left', paddingBottom: '10px'}}>
            <pre>{JSON.stringify(savedObject, null, 2)}</pre>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DynamicForm;
