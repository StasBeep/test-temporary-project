import * as React from 'react';
import {
    Box,
    TextField,
    Typography,
    Button
} from "@mui/material";

import ReviewResultLink from './ReviewResultLink'

interface RequestLinkProps {
    reviewElement: Number
}

const RequestLink = (props: RequestLinkProps) => {
    const { reviewElement } = props;

    const [link, setLink] = React.useState('');
    const [visibleTypography, setVisibleTypography] = React.useState(true);
    const [errorURL, setErrorURL] = React.useState(true);

    /**
     * Проверка input на ссылку
     */
    const checkLink = () => {
        let reg = /(http\:\/\/)|(https\:\/\/)|(file\:\/\/\/)|(ftp\:\/\/)/img;
        if (!reg.test(link)) {
            setErrorURL(false);
        } else {
            setErrorURL(true);
            setVisibleTypography(false);
        }
    }

    /**
     * Отображение в переменной значения value input
     * @param elm input
     */
    const changeLink = (elm: any) => {
        setLink(elm.target.value)
    }

    return (
        <Box>
            <Typography sx={{ pb: 2, fontSize: 30 }}>Сократите URL</Typography>
            <TextField
                id="url"
                onChange={changeLink}
                label="Вставьте URL"
                variant="outlined"
                fullWidth
            />
            <Typography sx={{ color: 'red', fontSize: 17 }} hidden={errorURL} >Это не ссылка, введите ссылку</Typography>
            <Button sx={{ mt: 2 }} variant="contained" onClick={checkLink}>Переделать</Button>
            <ReviewResultLink visibleResult={visibleTypography} element={reviewElement} />
        </Box>
    )
}

export default RequestLink;