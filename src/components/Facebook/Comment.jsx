import React from 'react'
import config from '../../../data/SiteConfig';

const FBComment = (
  <div className="fb-comments" data-href={config.siteUrl} data-numposts="5" />
);

export default FBComment;
