import React, { useState } from 'react';
import classes from './mainpage.module.css'

const Hero = () => {
  const [showWhenForm, setShowWhenForm] = useState(false);

  return (
    <div className={classes.hero}>
      <div className={classes.form}>
        <p>Where to? <span>(Required)</span> </p>
        
        <label htmlFor="location" >City, State, Location, or Airport </label>
        <input type="text" id="location" name="location" required />
        <div className="form-controls">
          <button className="find-hotel">Find Hotel</button>
        </div>
      </div>
      <div className={classes.form}>
        <p>When? <span>(Optional)</span> </p>
        <button onClick={() => setShowWhenForm(!showWhenForm)}>Toggle When Form</button>
        {showWhenForm && (
          <form>
            <label htmlFor="check-in">Check-in</label>
            <input type="date" id="check-in" name="check-in" />
            <label htmlFor="check-out">Check-out</label>
            <input type="date" id="check-out" name="check-out" />
            <label htmlFor="rooms">Rooms</label>
            <select id="rooms" name="rooms">
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
            </select>
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>
            <button className="special-rates">Special Rates</button>
            <button className="find-hotel">Find Hotel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;
