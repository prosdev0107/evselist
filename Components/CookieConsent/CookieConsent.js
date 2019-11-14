import React, { Component } from "react";
import "./CookieConsent.css";
import { Button, Modal } from "semantic-ui-react";
import { Cookies } from "react-cookie-consent";
import ReactGA from "react-ga";
import { TRACKING_CODE } from "../../config/configs";

export default class CookieConsent extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  componentDidMount() {
    if (Cookies.get("CookieConsent") === undefined) {
      this.setState({ visible: true });
    } else {
      ReactGA.initialize(TRACKING_CODE);
    }
  }

  handleAcceptCookie = () => {
    ReactGA.initialize(TRACKING_CODE);
  };

  accept = () => {
    Cookies.set("CookieConsent", true);
    this.handleAcceptCookie();
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <Modal size="tiny" open={visible} style={{ padding: 10 }}>
        <Modal.Header>WE USE COOKIES</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            This website uses cookies to enhance the user experience. When you
            continue to use this website you declare your consent. Read more in
            our <a href="/cookies">Cookie Policy</a>.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className="cookieconsent-btngroup">
          <Button primary onClick={this.accept}>
            ACCEPT
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
