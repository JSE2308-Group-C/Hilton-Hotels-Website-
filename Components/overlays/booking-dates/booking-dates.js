import { Fragment, useEffect, useRef, useState } from "react"

export default function BookingDates() {

    const [checkIn , setCheckIn] = useState('')
    const [checkOut , setCheckOut] = useState('')
    const [minCheckInDate, setMinCheckInDate] = useState('');
    const [minCheckOutDate, setMinCheckOutDate] = useState('');
    const [bookedDates, setBookedDates] = useState('No bookings Yet')

    useEffect(() => {
        // Get the current date in YYYY-MM-DD format
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;

        setMinCheckInDate(currentDate);
    }, []);
   
    useEffect(() => {
        console.log("minCheckOutDate updated:", minCheckOutDate);
    }, [minCheckOutDate]);

   function handleCheckIn(event) {
       const { value } = event.target
       setCheckIn(value)
       setMinCheckOutDate(value)
       console.log(minCheckOutDate)
   }

   function handleCheckOut(event) {
        const { value } = event.target
        setCheckOut(value)
    }
    

   function bookingDateSubmmited(event) {
        event.preventDefault()
        const dates = `${checkIn} to ${checkOut}`
        console.log(dates)
        setBookedDates(dates)
    }
    console.log(bookedDates)

    return (
        <Fragment>
        <form onSubmit={bookingDateSubmmited}>
            <h3>When? (Optional) </h3>
            <div>
                <label htmlFor="check-out">Check-in</label>
                <input 
                    type="date" 
                    id="check-in" 
                    name="check-in" 
                    min={minCheckInDate} 
                    required
                    onChange={handleCheckIn}
                    value={checkIn}
                    />
            </div>
            <div>
                <label htmlFor="check-out">Check-out</label>
                <input 
                    type="date" 
                    id="check-out" 
                    name="check-out" 
                    min={minCheckOutDate}
                    required
                    onChange={handleCheckOut}
                    value={checkOut}
                />
            </div>
            <button>Set dates</button>
        </form>                        
        <div>{bookedDates}</div>
        </Fragment>
    )
}
