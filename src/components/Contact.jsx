import css from "./contact.module.css";
import SocialButtons from "./SocialButtons";

function Contact() {
  return (
    <section className={css.contact}>
      <h2>Contact</h2>
      <p>You can drop me an email at;</p>
      <a href="mailto:scott@scottbrownmusic">scott@scottbrownmusic.com</a>
      <p>
        You can also give me a ring or WhatsApp on <strong>07974 201346</strong>{" "}
        to discuss lessons, bookings, gigs etc.
      </p>
      <p>
        Alternatively, you can also message me on social media at the accounts
        below;
      </p>
      <SocialButtons />
      <p>
        Please feel free to like and follow, it’s the easiest way to stay up to
        date! Also check out{" "}
        <a href="https://www.doublemaltduo.com">Double Malt Duo</a>, as that’s
        where a lot of my energy goes at the moment.
      </p>
      <p>
        Cheers,
        <br /> Scott
      </p>
    </section>
  );
}

export default Contact;
