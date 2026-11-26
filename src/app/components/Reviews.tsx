import shared from "./shared.module.css";
import classes from "./Reviews.module.css";

type Review = {
  name: string;
  role?: string;
  text: string;
  /** Out of 5 */
  rating: number;
};

// Shown large at the top of the section
const featuredReview: Review = {
  name: "Maya Abecassis",
  role: "Bride",
  text: "Daniella was kind, understanding and relaxing. Throughout my trial and on the day she kept me calm and knew exactly what she was doing. I was over the moon with the results.",
  rating: 5,
};

const reviews: Review[] = [
  {
    name: "Abigail Abrams",
    text: "She is fantastic! As a professional makeup artist I have used her skills many times. She does a fast and truly astonishing job — will be working with her again for sure.",
    rating: 5,
  },
  {
    name: "Dalia Goldmann",
    text: "Thank you so much for my beautiful makeup this weekend. We had a beautifully chilled-out time getting ready and the end result was perfect. Our day was wonderful and you made us feel amazing.",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <p className={classes.stars} aria-label={`${rating} out of 5 stars`}>
      <span aria-hidden="true">{"★".repeat(rating)}</span>
    </p>
  );
}

function Reviews() {
  return (
    <section id="reviewsId" className={classes.section}>
      <div className={`${shared.container} ${classes.inner}`}>
        <figure className={classes.featured}>
          <p className={classes.label}>Kind words</p>
          <blockquote className={classes.featuredQuote}>
            “{featuredReview.text}”
          </blockquote>
          <figcaption className={classes.attribution}>
            {featuredReview.name}
            {featuredReview.role && ` · ${featuredReview.role}`}
          </figcaption>
        </figure>

        <div className={classes.grid}>
          {reviews.map((review) => (
            <figure key={review.name} className={classes.card}>
              <Stars rating={review.rating} />
              <blockquote className={classes.cardQuote}>“{review.text}”</blockquote>
              <figcaption className={classes.attribution}>
                {review.name}
                {review.role && ` · ${review.role}`}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
