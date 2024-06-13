import styles from './page.module.css';
import { Button } from "../components/ui/button"

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome example-app 👋
            </h1>
            <Button variant="outline">Click me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
