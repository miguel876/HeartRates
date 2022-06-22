import { Stack } from "@mui/material"
import { HeartRatesDashboard } from "./heartrates/HeartRatesDashboard"

export const Homepage = () => {
  return (
    <Stack sx={{marginTop: 10}}>
      <HeartRatesDashboard />
    </Stack>
  )
}
