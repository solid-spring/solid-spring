import type { Component } from "solid-js";
import SolidSpring from '../src';

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <SolidSpring />
      </header>
    </div>
  );
};

export default App;
