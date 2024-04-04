import { Box, Typography } from "@mui/material"

interface ReviewResultLinkProps {
    visibleResult: boolean,
    element: Number
}

const ReviewResultLink = (props: ReviewResultLinkProps) => {
    const { visibleResult, element } = props

    return (
        <Box hidden={visibleResult}>
            <Typography sx={{ pb: 2, pt: 2, fontSize: 25 }}>Результат: </Typography>
            <Typography sx={{ fontSize: 30 }} hidden={element !== 0}>Ссылка</Typography>
            <img
                src="http://support.dt-a.com.au/wp-content/uploads/2018/06/qr-code-rule-website.png"
                alt="qr"
                hidden={element !== 1}
                width={300}
                height={300}
            />
        </Box>
    )
}

export default ReviewResultLink;