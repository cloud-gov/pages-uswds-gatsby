import React from "react"
import Layout from "../components/layout"
import circle from "../images/uswds/circle-124.png"
import styles from "./index.module.css"

export default () => (
  <Layout>
    <section className={`usa-hero ${styles.hero}`}>
      <div className="grid-container">
        <div className="usa-hero-callout">
          <h2 className="usa-hero-heading">
            <span className="usa-hero-callout-alt">Hero callout:</span>Bring attention to a project priority
          </h2>
          <p>Support the callout with some short explanatory text. You don’t need more than a couple of sentences.</p>
          <a className="usa-button" href="javascript:void(0)">Call to action</a>
        </div>
      </div>
    </section>

    <section className="grid-container usa-section">
      <div className="usa-width-one-third">
        <h2>A tagline highlights your approach</h2>
      </div>
      <div className="usa-width-two-thirds">
        <p>The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.</p>
        <p>Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.</p>
      </div>
    </section>

    <section className="usa-graphic_list usa-section usa-section-dark">
      <div className="grid-container">
        <div className="usa-graphic_list-row grid-row grid-gap">
          <div className="usa-media_block tablet:grid-col">
            <img className="usa-media_block-img"  src={circle} alt="Alt text"/>
            <div className="usa-media_block-body">
              <h3 className="usa-graphic_list-heading">Graphic headings can vary.</h3>
              <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>
            </div>
          </div>
          <div className="usa-media_block tablet:grid-col">
            <img className="usa-media_block-img"  src={circle} alt="Alt text"/>
            <div className="usa-media_block-body">
              <h3 className="usa-graphic_list-heading">Stick to 6 or fewer words.</h3>
              <p>Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>
            </div>
          </div>
        </div>
        <div className="usa-graphic_list-row grid-row grid-gap">
          <div className="usa-media_block tablet:grid-col">
            <img className="usa-media_block-img"  src={circle} alt="Alt text"/>
            <div className="usa-media_block-body">
              <h3 className="usa-graphic_list-heading">Never highlight anything without a goal.</h3>
              <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>
            </div>
          </div>
          <div className="usa-media_block tablet:grid-col">
            <img className="usa-media_block-img"  src={circle} alt="Alt text"/>
            <div className="usa-media_block-body">
              <h3 className="usa-graphic_list-heading">Could also have 2 or 6.</h3>
              <p>In addition to your goal, find out your users’ goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="usa-section">
      <div className="grid-container">
        <h2 className="font-heading-xl">Section heading</h2>
        <p className="usa-font-lead">Everything up to this point should help people understand your agency or project: who you are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they should get in touch here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.</p>
        <a className="usa-button usa-button-big" href="#">Call to action</a>
      </div>
    </section>
  </Layout>
)
