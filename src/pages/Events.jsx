import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Container, CardContent, Grid, Card, CardMedia, AppBar, Toolbar, Autocomplete, TextField } from '@mui/material'
import Link from '@mui/material/Link'
import { data } from '../data/data';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
function Events() {

    const getDate = () => {
        const year = new Date().getFullYear()

        const day = new Date().getDate()

        const month = new Date().getMonth() + 1

        if (day < 10) {
            return `${year}-${month}-0${day}`
        }
        if (month < 10) {
            return `${year}-0${month}-${day}`
        }

        return `${year}-${month}-${day}`
    }

    const [categories, setCategories] = useState(data.categories);
    const [events, setEvents] = useState(data.events);
    const [searchCategory, setSearchCategory] = useState({});

    const navigate = useNavigate();
    let location = useLocation();

    let category = location.state != undefined ? location.state.category : '';

    const searchEvents = () => {
        let newEvents = events;
        let eventCategory = document.getElementById("combo-box-demo").value;
        let eventDate = document.getElementById("date").value;
        let eventLocation = document.getElementById("outlined-search").value;
        // let searchCategoryData = eventCategory.toLowerCase().trim();
        // let newCategory = data.categories.filter(q => q.name.toLowerCase().includes(searchCategoryData));
        // console.log("CATEGORY", newCategory[0]);
        // setSearchCategory(newCategory[0]);
        // newEvents = events.filter(q => q.categoryId == searchCategory.id);

        // if (newEvents.length > 0) {
        //     setEvents(newEvents);
        // }

        newEvents = events.filter(q => q.date == eventDate);

        if (newEvents.length > 0) {
            setEvents(newEvents);
        }

        let searchLocationData = eventLocation.toLowerCase().trim();
        newEvents = events.filter(q => q.location.toLowerCase().includes(searchLocationData));
        if (newEvents.length > 0) {
            setEvents(newEvents);
        }

        console.log(newEvents);
        console.log(searchCategory);
    }

    const loadData = (input) => {
        if (input === '') {
            setEvents(data.events);
        }
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("search-btn").click();
            }
        });
    }

    const dateFormat = (date) => {

        var day, mounth, year;

        year = date.split(' ')[0].split("-")[0];
        mounth = date.split(' ')[0].split("-")[1];
        day = date.split(' ')[0].split("-")[2];

        var trMounths = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");

        return day + " " + trMounths[Number(mounth) - 1] + " " + year + " ";
    }

    const getCategory = () => {
        if (category) {
            setEvents(data.events.filter(q => q.categoryId == category.id))
        } else {
            setEvents(data.events);
        }
    }

    function stringToSlug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    const eventDetail = (tier) => {
        navigate(`/${stringToSlug(tier.title)}`, { state: { event: tier } })
    }

    useEffect(() => {

        console.log(data.events[0].date);

        let autoData = [];

        categories.forEach(element => {

            autoData.push({ label: element.name, name: element.name })

        });
        setCategories(autoData);
        console.log(categories);
        getCategory();
    }, [category])

    const tiers =
        events &&
        events.map((event, key) => {
            return {
                key: key,
                title: event.title,
                id: event.id,
                image: event.images[0],
                price1: event.price[0].toFixed(2),
                price2: event.price[1].toFixed(2),
                location: event.location,
                address: data.locations.filter(q => q.id == event.locationId)[0].address,
                locationName: data.locations.filter(q => q.id == event.locationId)[0].name,
                date: dateFormat(event.date),
                description: event.description,
            };
        });

    return (<>
        {
            category ? (
                <Typography gutterBottom variant="p" component="h1" sx={{ textAlign: "center", marginTop: 5 }}>
                    {category.name}
                </Typography>
            )
                : (
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" sx={{ bgcolor: "transparent", display: "flex", alignItems: "center" }}>
                            <Toolbar className="search-bar">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={categories}
                                    sx={{ width: 240, m: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Tüm Kategoriler" onChange={(e) => loadData(e.target.value)} />}
                                />
                                <TextField
                                    id="date"
                                    label="Tarih"
                                    type="date"
                                    defaultValue={getDate()}
                                    sx={{ width: 240, mr: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => loadData(e.target.value)}
                                />
                                <TextField id="outlined-search" sx={{ width: 240 }} label="Mekan veya şehre göre ara..." type="search" onChange={(e) => loadData(e.target.value)} />
                                <Button id="search-btn" variant="contained" sx={{ ml: 4 }} onClick={() => searchEvents()}>Ara</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                )
        }
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {tiers.map((tier) => (
                        <Grid item key={tier.id} xs={12} sm={6} md={4}>
                            <Link
                                component="button"
                                sx={{ textDecoration: "none", textAlign: "start" }}
                                onClick={() => {
                                    eventDetail(tier);
                                }}
                            >
                                <Card
                                    className='card'
                                    sx={{ display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        width="275"
                                        height="275"
                                        image={tier.image}
                                        alt="random"
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "baseline",
                                                textAlign: "baseline",
                                                height: 100,
                                                width: 230,
                                            }}
                                        >
                                            <Typography gutterBottom variant="p" component="p" sx={{ fontSize: ".8rem" }}>
                                                {tier.title}
                                            </Typography>
                                            <Typography>
                                                <b>{tier.date}</b>
                                            </Typography>
                                            <span style={{ fontSize: ".7rem", marginLeft: "auto" }}>{tier.location}</span>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    </>)
}

export default Events