import s from "./Description.module.scss";

const Description = () => {
  return (
    <section className={s.descriptionContainer}>
      <h2 className={s.title}>Sip Happens Café</h2>
      <p className={s.subtitle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </section>
  );
};

export default Description;
