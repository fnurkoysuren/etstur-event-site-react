import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material'
import React from 'react'

function SiteHeader() {

    return (<>
        <AppBar
            position="sticky"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: '#071A2F' }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }}>
                    Etstur Event
                </Typography>
                <nav style={{textDecoration: "none", color: "#fff"}}>
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
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Giriş Yap
                </Button>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Sepet
                </Button>
            </Toolbar>
        </AppBar>
    </>)
}

export default SiteHeader