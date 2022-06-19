import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Container, CardContent, Grid, Card, CardMedia, AppBar, Toolbar, Autocomplete, TextField } from '@mui/material'


function Events() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const categoriesData = [{
        id: 1,
        name: 'Tiyatro'
    }, {
        id: 2,
        name: 'Konser'
    }, {
        id: 3,
        name: 'Geçmiş Etkinlikler'
    }]

    const [categories, setCategories] = useState(categoriesData)

    useEffect(() => {
        let autoData = [];

        categories.forEach(element => {

            autoData.push({ label: element.name, name: element.name })

        });

        setCategories(autoData)
    }, [])

    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "transparent", display:"flex", alignItems:"center" }}>
                <Toolbar>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={categories}
                        sx={{ width: 300, m: 2 }}
                        renderInput={(params) => <TextField {...params} label="Tüm Kategoriler" />}
                    />
                    <TextField
                        id="date"
                        label="Tarih"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={categories}
                        sx={{ width: 300, m: 2 }}
                        renderInput={(params) => <TextField {...params} label="Yer" />}
                    />
                    <Button variant="contained" sx={{ml: 4}}>Ara</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    width="275px"
                                    height="275px"
                                    image="https://cdn.firsatbufirsat.com/files/images/deal/image/400x400/75/752441_5c0f.jpg?r=2"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="p" component="p">
                                        Nazım Hikmet'in Annesi 'Celile' Tiyatro Oyun Bileti
                                    </Typography>
                                    <Typography sx={{ pt: 2 }}>
                                        <b>65.<span>00</span> TL</b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    </>)
}

export default Events