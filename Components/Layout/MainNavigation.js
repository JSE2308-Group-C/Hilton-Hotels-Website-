import classes from './layout.module.css';

export default function MainNavigation() {
  return (
    <div className={classes.main}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
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
