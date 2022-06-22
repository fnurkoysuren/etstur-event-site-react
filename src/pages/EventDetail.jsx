import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { data } from "../data/data";
import { Button, Typography } from '@mui/material'
import { Container } from "@mui/system";
import { Box } from "@mui/material";

function EventDetail() {

    let loc = useLocation();
    let id = loc.state.event.id;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [event, setEvent] = useState({});
    const [images, setImages] = useState([]);
    const [slideLength, setSlideLenght] = useState(0);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
        data.events.map(element => {
            if (element.id == id) {
                setSlideLenght(element.images.length);
                console.log("EVENT", loc.state.event);
                setEvent(loc.state.event);
                setImages(element.images);
            }
        })
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const addressUrl = `https://maps.google.com/maps?q=${loc.state.event.location}`;



    return (<>
        <Container sx={{ display: "flex", marginTop: "3rem" }} className="event-header">
            <Box>
                <Typography gutterBottom variant="p" component="h3">
                    {event.title}
                </Typography>
                <div className="slider">
                    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                    {images.map((slide, index) => {
                        return (
                            <div
                                className={index === currentSlide ? "slide current" : "slide"}
                                key={index}
                            >
                                {index === currentSlide && (
                                    <div>
                                        <img src={slide} alt="slide" className="image" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Box>
            <div className="address">
                <Box sx={{ display: "flex", flexDirection: "column", margin: 10 }}>
                    <div className="map">
                        <div className="single-event-map">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <Typography gutterBottom variant="p" component="p" sx={{ fontSize: ".8rem" }}>
                        <b>Adres: </b>{event.address}
                    </Typography>
                </Box>
            </div>
        </Container>
        <Container sx={{ marginTop: 5, marginBottom: 10  }}>
            <Typography gutterBottom variant="p" component="h4" >
                Tarih: <b>{event.date}</b>
            </Typography>
            <Typography gutterBottom variant="p" component="h4" >
                Yer: {event.locationName}
            </Typography>
            <Typography gutterBottom variant="p" component="p" sx={{ fontSize: ".8rem" }}>
                {event.description}
            </Typography>
            {
                loc.state.event.price1 == 0 ? (
                    <Typography gutterBottom variant="p" component="p" sx={{ fontSize: ".8rem", marginTop:5 }}>
                        ÜCRETSİZDİR.
                    </Typography>
                )
                    : (
                        <>
                            <Typography gutterBottom variant="p" component="h3" sx={{  marginTop:5 }}>
                                Tam Bilet: {event.price1} TL
                            </Typography>
                            <Typography gutterBottom variant="p" component="h3">
                                Öğrenci Bilet: {event.price2} TL
                            </Typography>
                        </>
                    )
            }
            <Button variant="outlined" sx={{marginTop: 2}}>Satın Al</Button>
        </Container>


    </>)
}

export default EventDetail