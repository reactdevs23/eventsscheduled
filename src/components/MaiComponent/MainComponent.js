import React from "react";
import styles from "./MainComponent.module.css";
const MainComponent = ({
  headerFontFamily,
  background,
  heading,
  events,
  link,
}) => {
  return (
    <div className={styles.mainWrapper} style={{ background: background }}>
      <div className={styles.wrapper}>
        <h2
          style={{ fontFamily: headerFontFamily }}
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>
        <div className={styles.eventsContainer}>
          {events.map((event, i) => (
            <div className={styles.event} key={i}>
              <h3
                className={styles.date}
                dangerouslySetInnerHTML={{ __html: event.date }}
              ></h3>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.info}>{event.info}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={link} rel="noreferrer" target="_blank" className={styles.link}>
          {link}
        </a>
      </div>
    </div>
  );
};

export default MainComponent;
