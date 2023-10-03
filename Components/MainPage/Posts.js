
import Image from 'next/image'
import Link from 'next/link'

import classes from './mainpage.module.css'


export default function Post(){

    

    return(
        <div>

<div >
   <h1>
   Elevated event experiences at Hilton
   </h1>

   <p>
   Whether you're a pro planner or new to hosting events, trust Hilton to help you create a seamless, stress-free experience that dazzles your guests at one of our thousands of hotels worldwide.
   </p>
</div>

<div>
    <h1>
    Make every occasion a special occasion
    </h1>
    <Image
    src=''
    alt=''
    width={300}
    height={300}
    />
</div>

<div>
    <h1>
    Gather your group
    </h1>
    <p>
    Get together better with easy-to-use online tools for booking rooms and event spaces.
    </p>
    <Image
    src=''
    alt=''
    width={300}
    height={300}
    />

</div>

<div className={classes.impact}>
    <div>
    <Image
    src=''
    alt=''
    width={300}
    height={300}
    />
    </div>
    <div>
        <h1>Measure and manage your impact</h1>
        <p>Our LightStay Meeting Impact Calculator report generates a customized estimate of your events environmental impact, using the hotels consumption data to project the total carbon emissions, energy use, water, and waste for your event.

The customized forecast is created pre-event and provides you with suggestions to reduce your events projected carbon footprint. The post-event report provides an itemized measurement of the events overall impact.</p>

<button>
        <Link href='viewsample'>View Sample Report</Link>
    </button>
    </div>
    
</div>

<div>
    <h1>
    Experience iconic properties across the globe
    </h1>
    <p>Explore these amazing hotels, ready to welcome you with unparalleled service and memorable experiences that will surprise and delight.</p>
    <Image
    src=''
    alt=''
    width={300}
    height={300}
    />
</div>

<h2>Need help planning your event or booking 10 or more rooms per night? Contact <Link href='hiltonworldwide'>Hilton Worldwide</Link> Sales for assistance.</h2>


<footer className={classes.footer}>
    <div>
<h3>How can we help?</h3>
    </div>
    <div>
        <p>Add Links here!!</p>
    </div>
</footer>

   <h3>
   Whether you're a pro planner or new to hosting events, trust Hilton to help you create a seamless, stress-free experience that dazzles your guests at one of our thousands of hotels worldwide.
   </h3>
</div>






        </div>
    )
}