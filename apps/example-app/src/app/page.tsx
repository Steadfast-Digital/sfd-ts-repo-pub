import React from 'react';

import { Button } from '../components/ui/button';

import styles from './page.module.css';

export default function index() {
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
