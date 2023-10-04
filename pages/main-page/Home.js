import Hero from "./Hero";
import Link from "next/link";
import Image from "next/image";
import classes from "./mainpage.module.css"

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <p>
          Join Hilton Honors and get up to 4,500 Bonus Points on your next two
          stays. <Link href="/joinforfree">Join for free</Link>
        </p>
        <p>
          Where will you stay next? Choose from top destinations.{" "}
          <Link href="planyourtrip">Plan Your Trip</Link>
        </p>
      </div>
      <div>
        <h3>Carousel</h3>
      </div>
      <div>
        <h2>Travel is better together</h2>
        <p>
          With Confirmed Connecting Rooms, stay right next door to your favorite
          people and make your Stay the best one yet.
        </p>
        <button>Stay Connected</button>
      </div>
      <div>
        <h2>Make the most of your long weekend</h2>
        <p>
          Long weekends are made for adventure, and at Hilton, we're all about
          maximizing down time. Check out our recommendations for long weekend
          stays or choose your own. Go ahead, take an extra day and stay a
          little longer.
        </p>
        <Image src="" alt="" width={300} height={300} />
      </div>
      <div>
        <h2>Time for an autumn escape</h2>
        <p>Fall into a relaxing stay with one of our exclusive offers.</p>
        <Image src="" alt="" width={300} height={300} />
      </div>
      <div>
        <h2>Turn over a new leaf</h2>
        <p>
          From new openings to boutique breaks, discover a different kind of
          stay.
        </p>
        <Image src="" alt="" width={300} height={300} />
      </div>

      <div>
        <h2>New season, new stays</h2>
        <p>
          Ready for an adventure? Check out our top destinations for great fall
          stays.
        </p>
        <Image src="" alt="" width={300} height={300} />
      </div>

      <div className={classes.honors}>
        <div className={classes.join}>

          <button>
            <Link href="/joinhiltonhotel">Join Hilton Honors</Link>
          </button>
          <Image src="" alt="" width={300} height={300} />
        </div>

        <div className={classes.app}>
          <button><Link href="/hiltonhonorsapp">Hilton Honors App</Link></button>
          <h2>Enhance the way you stay (for free!)</h2>
          <p>
            Hilton Honors members get more value from stays with exclusive
            member rates, lowest price guarantee, and perks like free WiFi.
            Plus, earn Points on every stay that you can use toward free nights
            at more than 7,000 hotels around the world or redeem them with our
            exclusive partners.
          </p>
          <button>
            <Link href='joinforfree' >Join For Free</Link>
          </button>
        </div>
      </div>
      <button>Back To Top</button>
    </div>
  );
}
