import { useState } from 'react';
import { Stack, Typography, styled, Fade } from '@mui/material';
import { theme } from '../theme/theme';
import { Container } from '@mui/system';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const StyledStack = styled(Stack, 
    {shouldForwardProp: (prop) => prop !== "isAvailable"})<{isAvailable?: boolean}>(({ isAvailable }) => ({
    position: 'absolute', 
    zIndex: 1101, 
    top: 0, 
    width: '100%', 
    backgroundColor: isAvailable ? theme.palette.success.main : theme.palette.error.main,     
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: theme.palette.primary.light,
  }))


export const OfflineMessage = () => {
    const [ { message, isAvailable, show }, setMessage ] = useState({ message: "", isAvailable: false, show: false });

    window.addEventListener("load", () => {
        window.addEventListener("online", () => {
            setMessage((props) => ({ ...props, message:  "You are back online!", isAvailable: true }))
            setTimeout(() => {
                setMessage((props) => ({ ...props, show: false}))
            }, 2000)
        });
    
        window.addEventListener("offline", () => {
            setMessage({ message: "The Network connection was lost!", isAvailable: false, show: true})
        });
    });
    
  return (
    show ?
        <Fade in={show}>
            <StyledStack isAvailable={isAvailable}>
                <Container>
                    {isAvailable ? <CloudQueueIcon /> : <CloudOffIcon />}
                    <Typography> 
                        { message }
                    </Typography>
                </Container>
            </StyledStack>
        </Fade>
        :
        <Stack />
  )
}
