import React from 'react'
import { Stack, TextField, Typography } from '@mui/material'

const getLabel = (str = "") => str?.split(" ")?.join("_")
export default function CustomTextField({ isNew = false, field, answer = null, setAnswer, formik = {}, isDisabled=false }) {

    const label = getLabel(field?.question)
    return (
        <Stack alignItems="flex-start" gap={1}>
            {!isNew && <Typography variant='subtitle2'>{field?.question}</Typography>}
            <TextField
                fullWidth
                placeholder="Enter your answer"
                {...formik?.getFieldProps(label)}
                required={field?.isRequired}
                error={Boolean(formik?.errors[label])}
                helperText={formik?.errors[label]}
                disabled={isDisabled}
            />
        </Stack>
    )
}
