import React from "react";
import {Popup, Input, Modal, Button, Form} from "semantic-ui-react";

import {newsletterHandler} from "../../utils/apiHelper";
import {Cookies} from "react-cookie-consent";

import "./Newsletter.css";

const options = [
  {key: "day", value: "day", text: "instant updates"},
  {key: "week", value: "week", text: "weekly updates"},
  {key: "month", value: "month", text: "monthly updates"}
];

export default function Newsletter(props) {
  const [email, setEmail] = React.useState("");
  const [subscription_interval] = React.useState("week");
  const [formStatus, setFormStatus] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const validateEmail = () => {
    let emailValid = true;

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
    }

    return emailValid;
  };

  const handleChange = e => {
    //TO: handle event.
  };

  const handleSubscribe = event => {
    event.preventDefault();
    setFormStatus(1);

    if (!validateEmail()) {
      setFormStatus(4);
      return;
    }

    newsletterHandler(email, subscription_interval)
      .then(response => {
        setFormStatus(2);
        setVisible(false);
        Cookies.set("Subscription", "submitted", {expires: 730});
      })
      .catch(error => {
        setFormStatus(3);
      });
  };

  const handleLater = event => {
    Cookies.set("Subscription", "later", {expires: 2});
    setVisible(false);
  };

  React.useEffect(
    () => {
      if (Cookies.get("Subscription") === undefined) {
        setVisible(props.visible);
      } else {
        setVisible(false);
      }
      return () => {};
    },
    [props.count, props.visible]
  );

  const msgTexts = [
    "Just a min...",
    "Thank you for signing up!",
    "Could not subscribe your newsletter.",
    "Invalid email format."
  ];

  return (
    <Modal size="tiny" open={visible} style={{padding: 10}}>
      <Modal.Header>Stay up to date with the latest products!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          We send regular summaries introducing the latest interesting charging
          products. Subscribe to stay up to date!
        </Modal.Description>
        <Modal.Description>
          <Input
            fluid
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Modal.Description>
        <Modal.Description>Subscribe to max:</Modal.Description>
        <Modal.Description>
          <Form.Dropdown
            fluid
            selection
            name="subscription_interval"
            options={options}
            onChange={handleChange}
            defaultValue={subscription_interval}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className="newsletter-btngroup">
        <Button onClick={e => handleLater(e)}>Later</Button>
        <Popup
          content={msgTexts[formStatus - 1]}
          on="click"
          trigger={
            <Button
              secondary
              icon="checkmark"
              content="Subscribe"
              labelPosition="right"
              onClick={e => handleSubscribe(e)}
            />
          }
        />
      </Modal.Actions>
    </Modal>
  );
}
