import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import '../../stylesheets/preview/_image_preview.scss';
// import Design from "./Design";
// import Fill from "./Fill";
// import Share from "./Share";

const SocialMediaButtons = (props) => {
  return (
    <>
      <a
        className={props.socialMediaButtonClass}
        href={props.socialMediaButtonLink}
        target="_blank"
        title={props.socialMediaButtonTitle}
      >
        <li className={props.socialMediaButtonIconClass}>
          <i className={props.socialMediaButtonIcon}></i>
        </li>
      </a>
    </>
  );
};

export default SocialMediaButtons;
