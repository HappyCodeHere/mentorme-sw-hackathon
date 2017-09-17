import React, { PropTypes } from 'react';

import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import './SocialButtons.css';

const { VKShareButton, FacebookShareButton, TwitterShareButton, TelegramShareButton, LinkedinShareButton, GooglePlusShareButton } = ShareButtons;
const { VKShareCount, FacebookShareCount, LinkedinShareCount, GooglePlusShareCount } = ShareCounts;

const VKIcon = generateShareIcon('vk');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const LinkedinIcon = generateShareIcon('linkedin');
const GooglePlusIcon = generateShareIcon('google');

const link = 'https://mentorforme.herokuapp.com';
const title = 'Mentor for me';
const description = '';
const image = 'http://www.eventsfree.by/logo.png';
const size = 32;

const propTypes = {

}

const SocialButtons = () => {
  return (
    <ul className="social-buttons">

      <li>
        <VKShareButton url={link} title={title} description={description} image={image}>
          <VKIcon size={size} round={true} />
        </VKShareButton>
      </li>

      <li>
        <FacebookShareButton url={link} title={title} description={description} picture={image}>
          <FacebookIcon size={size} round={true} />
        </FacebookShareButton>
      </li>

      <li>
        <TwitterShareButton url={link} title={title}>
          <TwitterIcon size={size} round={true} />
        </TwitterShareButton>
      </li>

      <li>
        <TelegramShareButton url={link} title={title}>
          <TelegramIcon size={size} round={true} />
        </TelegramShareButton>
      </li>

      <li>
        <LinkedinShareButton url={link} title={title} description={description}>
          <LinkedinIcon size={size} round={true} />
        </LinkedinShareButton>
      </li>

      <li>
        <GooglePlusShareButton url={link}>
          <GooglePlusIcon size={size} round={true} />
        </GooglePlusShareButton>
      </li>

    </ul>
  )
}

SocialButtons.propTypes = propTypes;

export default SocialButtons;
