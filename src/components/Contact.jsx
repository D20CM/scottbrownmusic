import css from "./contact.module.css";

function Contact() {
  return (
    <section className={css.contact}>
      <h2>Contact</h2>
      <p>You can drop me an email at;</p>
      <a href="mailto:scott@scottbrownmusic">scott@scottbrownmusic.com</a>
      <p>
        You can also give me a ring or WhatsApp <em>07974 201346</em> to discuss
        lessons, bookings, gigs etc.
      </p>
      <p>
        Alternatively, you can also message me on social media at the accounts
        below;
      </p>
      <div className={css.socialButtons}>
        <a
          id="facebook-share"
          href="https://www.facebook.com/scottbrownmusic"
          alt="Scott Brown on Facebook"
        >
          <i
            className="fab large-social fa-facebook"
            data-toggle="tooltip"
            title="Facebook"
          ></i>
        </a>

        <a
          id="insta"
          href="https://www.instagram.com/scottbrownguitar/"
          alt="Scott Brown on Instagram"
        >
          <i
            className="fab large-social fa-instagram"
            data-toggle="tooltip"
            title="Instagram"
          ></i>
        </a>
        <a
          id="youtube"
          href="https://www.youtube.com/@ScottBrown500"
          alt="Scott Brown on YouTube"
        >
          <i
            className="fab large-social fa-youtube"
            data-toggle="tooltip"
            title="Youtube"
          ></i>
        </a>
      </div>
      <p>
        Please feel free to like and follow, it’s the easiest way to stay up to
        date! Also check out{" "}
        <a href="https://www.doublemaltduo.com">Double Malt Duo</a>, as that’s
        where a lot of my energy goes at the moment. Cheers, Scott
      </p>
    </section>
  );
}

export default Contact;
