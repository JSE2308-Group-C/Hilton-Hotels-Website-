import classes from "./layout.module.css";
import MeetingsAndEvents from "../../pages/main-page/MeetingsAndEvents";

import Link from "next/link";
import Logo from "./Logo";

export default function MainNavigation() {
  
  return (
    <div className={classes.main}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <Link href="/"><Logo /></Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>

          <li>
            <Link href="/offers">Offers</Link>
          </li>
          <li>
            <Link href="/main-page/MeetingsAndEvents">Meetings & Events</Link>
          </li>
          <li>
            <Link href="/credit-cards">Credit Cards</Link>
          </li>
          <li>
            <Link href="/hilton-getaways">Hilton Getaways</Link>
          </li>
          <li>
            <Link href="/hilton-grand-vacations">Hilton Grand Vacations</Link>
          </li>
        </ul>
      </nav>

      <div className={classes.signin}>
        <h3>Log In</h3>
      </div>
    </div>
  );
}
