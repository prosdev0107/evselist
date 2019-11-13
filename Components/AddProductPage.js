import React, {useState} from "react";
import {
  Image,
  Container,
  Segment,
  Header,
  Grid,
  Popup,
  Form
} from "semantic-ui-react";
import "./AddProductPage.css";
import {graphCmsImageUrl} from "../lib";
import {formHandler} from "../utils/apiHelper";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [formStatus, setFormStatus] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    setFormStatus(1);

    if (!text || text.length < 10) {
      setFormStatus(4);
      return;
    }

    formHandler("Subject: Add this product to evselist.com", name, email, text)
      .then(response => {
        setFormStatus(2);
      })
      .catch(error => {
        setFormStatus(3);
      });
  };

  const msgTexts = [
    "Storing product proposal...",
    "Thank you! Product proposal successfully stored!",
    "Could not store product proposal.",
    "Please add some product details like a link to the text field."
  ];

  return (
    <Container>
      <Segment style={{padding: "8em 0em"}} vertical>
        <Header as="h1">Add a product</Header>
        <p style={{fontSize: "1.33em"}}>
          Help us find the right EV charging products for the right use cases by
          expanding the EVSE list!
        </p>
      </Segment>
      <Grid columns="2" verticalAlign="middle" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{paddingBottom: "5em", paddingTop: "5em"}}>
            <Header as="h3" style={{fontSize: "2em"}}>
              This could be someones
              <br /> <span className="ui secondary">perfect solution!</span>
            </Header>
          </Grid.Column>
          <Grid.Column style={{paddingBottom: "5em", paddingTop: "5em"}}>
            <Image
              alt="A perfect charging solution"
              src={graphCmsImageUrl("0mQVA7WNQ9qNNwQwlZGe", {
                height: 300,
                width: 300
              })}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns="2" verticalAlign="middle" stackable>
        <Grid.Column floated="left" width={5}>
          <p>
            You can propose a new product to be added to the list by just a few
            clicks! Just fill-in the form with a product name and company, a
            product link or similar. Our experts will validate the data and add
            the product to the list!
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Form.Group widths='equal'>
            <Form className="ui form" onSubmit={handleSubmit}>
              <Form.Input
                name="name"
                type="text"
                placeholder="Name (optional)"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Form.Input
                name="email"
                type="text"
                placeholder="Email (optional)"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.TextArea
                placeholder="Product link, name, ..."
                name="body"
                value={text}
                error={formStatus===4}
                onChange={e => setText(e.target.value)}
              />
              <Popup
                content={msgTexts[formStatus - 1]}
                on="click"
                trigger={
                  <input
                    type="submit"
                    className={"ui button fluid primary"}
                    value="Send product proposal"
                  />
                }
              />
            </Form>
          </Form.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AddProductPage;
