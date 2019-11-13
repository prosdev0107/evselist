import React from "react";
import {
  Container,
  Segment,
  Grid,
  Image,
  Button,
  Header,
  Icon,
  Ref
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {graphCmsImageUrl} from "../lib";
import {animateScroll as scroll} from "react-scroll";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.firstSegment = React.createRef();
    this.secondSegment = React.createRef();
    this.thirdSegment = React.createRef();
  }

  scrollToList = () => {
    const currentScroll =
      this.firstSegment.current.offsetHeight +
      this.secondSegment.current.offsetHeight +
      this.thirdSegment.current.offsetHeight;
    scroll.scrollTo(currentScroll, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  render() {
    return (
      <>
        <Ref innerRef={this.firstSegment}>
          <Segment
            children={this.handleRef}
            inverted
            textAlign="center"
            style={{
              minHeight: "50vh",
              padding: "1em 0em",
              display: "flex",
              alignItems: "center",
              backgroundImage: "radial-gradient(#615a56 5%, transparent 0)",
              backgroundSize: "30px 30px"
            }}
            vertical
          >
            <Container text>
              <Image
                alt="evselist.com"
                src="/logo.png"
                style={{border: 0, maxWidth: "50vw"}}
              />
              <Header
                as="h2"
                content="All products and services for EV charging infrastructure."
                inverted
              />
              <Button
                as="a"
                href="#main"
                primary
                size="huge"
                onClick={this.scrollToList}
              >
                <Icon name="plug" />
                Find charging products
              </Button>
            </Container>
          </Segment>
        </Ref>
        <Ref innerRef={this.secondSegment}>
          <Segment style={{padding: "8em 0em"}} vertical>
            <Container text>
              <Grid columns={2} relaxed="very" stackable>
                <Grid.Column>
                  <Image
                    src={graphCmsImageUrl("0mQVA7WNQ9qNNwQwlZGe", {
                      height: 300,
                      width: 300
                    })}
                  />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <p style={{fontSize: "1.4em"}}>
                    Great solutions need great components. Finding the right
                    components requires time and resources. We take care of that
                    for you!
                  </p>
                </Grid.Column>
              </Grid>
            </Container>
          </Segment>
        </Ref>
        <Ref innerRef={this.thirdSegment}>
          <Segment vertical style={{marginBottom: "4em"}}>
            <Container text>
              <Grid columns={2} relaxed="very" stackable streched>
                <Grid.Row verticalAlign="bottom">
                  <Grid.Column>
                    <Header as="h3" style={{fontSize: "1.1em"}}>
                      Access the market for electric vehicle charging with the
                      latest products and services through our database.
                    </Header>
                    <Button
                      fluid
                      as={Link}
                      to="#main"
                      primary
                      size="big"
                      onClick={this.scrollToList}
                    >
                      Access database
                    </Button>
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle">
                    <Header as="h3" style={{fontSize: "1.1em"}}>
                      As a product provider give your items more visibility for
                      worldwide customers through standard or premium listing.
                    </Header>
                    <Button fluid as={Link} to="/add" secondary size="big">
                      Promote product
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Ref>
      </>
    );
  }
}

export default PageHeader;
