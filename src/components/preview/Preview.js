import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import '../../stylesheets/preview/_image_preview.scss';
// import Design from "./Design";
// import Fill from "./Fill";
// import Share from "./Share";
import ButtonReset from './Reset';

const Preview = (props) => {
  return (
    <section className="app__preview">
      <div className="button-container">
        <ButtonReset />
      </div>
      <div className="app__preview--card">
        <div className="top-block">
          <div className="name_job js-border border-cold">
            <h3 className="full_name js-name name-cold">Jeanne Baret</h3>
            <h4 className="job js-jobPreview">Botánica</h4>
          </div>
        </div>
        <div className="photo js-photo js-photo-default js__profile-image">
          <div className="js-frame js-frame-cold js-frame-hidden"></div>
        </div>

        <ul className="social_media js-icon icon-cold">
          <a
            className="js-emailPreview"
            href="mailto:"
            target="_blank"
            title="email address"
          >
            <li className="email">
              <i className="far fa-envelope"></i>
            </li>
          </a>

          <a
            className="js-phonePreview"
            href="tel:"
            target="_blank"
            title="phone number"
          >
            <li className="phone">
              <i className="fas fa-mobile-alt"></i>
            </li>
          </a>

          <a
            className="js-linkedinPreview"
            href="https:/www.linkedin.com/in/"
            target="_blank"
            title="linkedin profile"
          >
            <li className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </li>
          </a>

          <a
            className="js-githubPreview"
            href="https:/www.github.com/"
            target="_blank"
            title="github profile"
          >
            <li className="github">
              <i className="fab fa-github-alt"></i>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Preview;
