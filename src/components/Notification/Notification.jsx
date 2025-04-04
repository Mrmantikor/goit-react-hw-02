import s from "./Notification.module.scss";

const Notifications = () => {
  return (
    <section className={s.section}>
      <div className={s.div}>
        No feedback yet!
        <span className={s["tooltip-text"]}>
          <a
            href="https://github.com/Mrmantikor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Congratulations! You found easter egg! <br /> Developer Vasylych
          </a>
        </span>
      </div>
    </section>
  );
};

export default Notifications;
