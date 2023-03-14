export const Price = (flights) => {
    //low to heigh filter

    let sortedFlights = flights.sort(function (a, b) {
        return a.farepr - b.farepr;
    });
    return sortedFlights;

}
export const Departure = (flights) => {
    //Earliest First

    let sortedFlights = flights.sort(function (a, b) {
        return new Date(a.dd + " " + a.dt) - new Date(b.dd + " " + b.dt);
    });
    return sortedFlights;

}
export const Arrival = (flights) => {
    //Earliest First

    let sortedFlights = flights.sort(function (a, b) {
        return new Date(a.dd + " " + a.at) - new Date(b.dd + " " + b.at);
    });
    return sortedFlights;

}
export const Duration = (flights) => {
    //Shrortest first

    let sortedFlights = flights.sort(function (a, b) {
        return a.tt - b.tt;
    });
    return sortedFlights;

}
export const PriceRange = (flights, range) => {
    //Range Slider

    let sortedFlights = flights.filter((fl) => {
        if (fl.farepr > range[0] && fl.farepr < range[1]) {

            return true
        } else {
            return false
        }
    });
    console.log(sortedFlights);
    return sortedFlights;

}