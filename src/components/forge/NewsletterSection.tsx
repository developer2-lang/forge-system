import React, { useState } from 'react';

/**
 * Newsletter subscription strip reproducing the live site component.
 * Isolated so it can be removed in production if the site already provides one.
 */
export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Progressive enhancement: handle form submission
    console.log('[Newsletter] Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="news on-dark">
      <div>
        <b>Stay in the loop</b>
        <p>
          Get the latest insights on product design, engineering and innovation
          delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="post">
        <label htmlFor="nl" className="sr-only">
          Email address
        </label>
        <input
          id="nl"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
        <button className="btn btn--amber" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
