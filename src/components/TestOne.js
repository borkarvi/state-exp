import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//props = {
// btName: 'login'
//}
const TestOne = (props) => {

// console.log('props', props);
  return (
    <Stack spacing={2} direction="row">

      <Button variant="contained" onClick={() =>{props.funName (props.btName)}}>

        {props.btName}
      </Button>
    </Stack>
  );
};
export default TestOne;