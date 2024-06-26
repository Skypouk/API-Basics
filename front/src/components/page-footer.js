import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import main_logo from "../assets/coding.png";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This test project use&nbsp;</span>
              <PageFooterHyperlink path="https://auth0.com/">
                Auth0
              </PageFooterHyperlink>
              &nbsp;to handle authentication.
            </p>
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={main_logo}
              alt="Skypouk logo"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://skypouk.me/">
              Skypouk Inc
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
