import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import '../../stylesheets/preview/_image_preview.scss';
import SocialMediaButtons from './SocialMediaButtons';

const CardPreview = (props) => {
  return (
    <section className="app__preview">
      <div className="button-container">
        <button className="button__reset">
          <i className="far fa-trash-alt"></i>
          <span className="button__reset--text">reset</span>
        </button>
      </div>
      <div className="app__preview--card">
        <div className="top-block">
          <div className="name_job js-border border-cold">
            <h3 className="full_name js-name name-cold">{props.name}</h3>
            <h4 className="job js-jobPreview">{props.job}</h4>
          </div>
        </div>
        <div className="photo js-photo js-photo-default js__profile-image">
          <div className="js-frame js-frame-cold js-frame-hidden"></div>
        </div>
        <ul className="social_media js-icon icon-cold">
          <SocialMediaButtons
            socialMediaButtonClass="js-emailPreview"
            socialMediaButtonLink="mailto:"
            socialMediaButtonTitle="email address"
            socialMediaButtonIconClass="email"
            socialMediaButtonIcon="far fa-envelope"
          />
          <SocialMediaButtons
            socialMediaButtonClass="js-phonePreview"
            socialMediaButtonLink="tel:"
            socialMediaButtonTitle="phone number"
            socialMediaButtonIconClass="phone"
            socialMediaButtonIcon="fas fa-mobile-alt"
          />
          <SocialMediaButtons
            socialMediaButtonClass="js-linkedinPreview"
            socialMediaButtonLink="https:/www.linkedin.com/in/"
            socialMediaButtonTitle="linkedin profile"
            socialMediaButtonIconClass="linkedin"
            socialMediaButtonIcon="fab fa-linkedin-in"
          />
          <SocialMediaButtons
            socialMediaButtonClass="js-githubPreview"
            socialMediaButtonLink="https:/www.github.com/"
            socialMediaButtonTitle="github profile"
            socialMediaButtonIconClass="github"
            socialMediaButtonIcon="fab fa-github-alt"
          />
        </ul>
      </div>
    </section>
  );
};

export default CardPreview;
