/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "./favicon.png";
import config from "../data/SiteConfig";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off"*/
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    const fbSDKCode = `(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.12&appId=1159961087414951&autoLogAppEvents=1';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));`;
    const gtmCode = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${config.siteGTMID}');`;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script id="fb-sdk-code" dangerouslySetInnerHTML={{ __html: fbSDKCode }} />
          <script id="gtm-code" dangerouslySetInnerHTML={{ __html: gtmCode }} />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <div id="fb-root" />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
