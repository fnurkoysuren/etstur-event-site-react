import React from 'react'
import { Box, Typography, Link } from '@mui/material'

function SiteFooter() {
    return (<>
        <Box sx={{ bgcolor: '#071A2F', color: "#fff", p: 6 }} component="footer">
            <Typography
                variant="subtitle1"
                align="center"
                component="p"
            >
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Tiyatro
                </Link>
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Konser
                </Link>
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Geçmiş Etkinlikler
                </Link>
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                component="p"
                marginTop={2}
            >
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5, fontSize: '1.2rem' }}
                >
                    <i class="fa-brands fa-linkedin-in"></i>
                </Link>                
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5, fontSize: '1.2rem' }}
                >
                    <i class="fa-brands fa-instagram"></i>
                </Link>                
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5, fontSize: '1.2rem' }}
                >
                    <i class="fa-brands fa-facebook-f"></i>
                </Link>                
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5, fontSize: '1.2rem' }}
                >
                    <i class="fa-brands fa-pinterest"></i>
                </Link>                
                <Link
                    variant="button"
                    color="#fff"
                    href="#"
                    sx={{ my: 1, mx: 1.5, fontSize: '1.2rem' }}
                >
                    <i class="fa-brands fa-twitter"></i>
                </Link>                
            </Typography>
        </Box>
    </>)
}

export default SiteFooter