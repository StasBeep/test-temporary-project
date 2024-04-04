import * as React from 'react';
import {
    Box,
    TextField,
    Typography,
    Button
} from "@mui/material";

import ReviewResultLink from './ReviewResultLink'

const RequestLink = () => {
    const [visileTypegrahy, setVisileTypegrahy] = React.useState(true);

    return (
        <Box>
            <Typography sx={{pb: 2, fontSize: 30}}>Сократите URL</Typography>
            <TextField id="outlined-basic" label="Вставьте URL" variant="outlined" fullWidth />
            <Button sx={{ mt: 2 }} variant="contained" onClick={() => setVisileTypegrahy(false)}>Переделать</Button>
            <ReviewResultLink visibleResult={visileTypegrahy} element={1}/>
        </Box>
    )
}

export default RequestLink;