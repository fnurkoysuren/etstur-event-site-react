import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { data } from "../data/data";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

function EventDetail() {

    let loc = useLocation();
    let id = loc.state.id;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [event, setEvent] = useState([]);
    const [images, setImages] = useState([]);
    const [slideLength, setSlideLenght] = useState(0);
    const [location, setLocation] = useState([]);

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
                setEvent(element);
                setLocation(data.locations.filter(q => q.id == element.locationId))
                setImages(element.images);
                console.log(element.images);
                console.log(location);
            }
        })
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (<>
        <Container sx={{ display: "flex", marginTop: "3rem" }} className="event-header">
            <Grid>
                <h2>{event.title}</h2>
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
            </Grid>
            <Grid>
                <div className="map">
                    <div class="single-event-map">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </Grid>
        </Container>


    </>)
}

export default EventDetail