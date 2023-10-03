import classes from './layout.module.css';
import Link from 'next/link'

export default function MainNavigation() {
  return (
    <div className={classes.main}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
          <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/locations'>Locations</Link>
          </li>
          <li>
            <a href="/offers">Offers</a>
          </li>
          <li>
            <a href="/meetings-events">Meetings & Events</a>
          </li>
          <li>
            <a href="/credit-cards">Credit Cards</a>
          </li>
          <li>
            <a href="/hilton-getaways">Hilton Getaways</a>
          </li>
          <li>
            <a href="/hilton-grand-vacations">Hilton Grand Vacations</a>
          </li>
        </ul>
      </nav>

      <div className={classes.signin}>
        <h3>Log In</h3>
      </div>
    </div>
  );
}
