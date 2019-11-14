import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Responsive,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";
import "./Footer.css";
import Link from "next/link";
import Newsletter from "./Newsletter";
import { Cookies } from "react-cookie-consent";
import LogoWiedergruen from '../assets/images/logo-wiedergruen-min.svg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewsletter: false,
      count: 0
    };
  }

  handleScroll = e => {
    var limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (window.scrollY > limit / 2) {
      this.setState({
        showNewsletter: true
      });
    }
  };

  handleSubscription = e => {
    if (Cookies.get("Subscription") !== undefined) {
      Cookies.remove("Subscription");
    }
    const { count } = this.state;
    this.setState({
      showNewsletter: true,
      count: count + 1
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { showNewsletter, count } = this.state;
    return (
      <>
        <Newsletter visible={showNewsletter} count={count} />
        <Responsive>
          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row style={{ justifyContent: "center" }}>
                  <Grid.Column width={3}>
                    <a href="https://twitter.com/evselist">
                      <Icon
                        name="twitter"
                        size="big"
                        style={{ marginRight: "15px", color: "white" }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/wiedergruen/">
                      <Icon
                        name="linkedin"
                        size="big"
                        style={{ marginRight: "15px", color: "white" }}
                      />
                    </a>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button icon onClick={this.handleSubscription}>
                      <Icon name='envelope' />
                      Subscribe to updates
                  </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header inverted as="h4" content="Page Links" />
                    <List link inverted>
                      <List.Item>
                        <Link href="/#list">
                          <a>
                            All EV charging products
                          </a>
                        </Link>
                      </List.Item>
                      <List.Item >
                        <Link href="/tag/dc">
                          <a>
                            DC charging stations
                          </a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href="/tag/ac">
                          <a>
                            AC charging stations
                          </a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href="/tag/saas">
                          <a>
                            Backend services
                          </a>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header inverted as="h4" content="About evselist.com" />
                    <List link inverted>
                      <p>
                        evse<span className="primary">list.</span>com is the
                        worlds most comprehensive collection of professional
                        products for electric vehicle charging.
                      </p>
                      <p>
                        The site is offering professionals from all industries a
                        complete overview of products, solutions and offers. The
                        full spectrum from hardware components, physical
                        products, software and service offers up to consultancy
                        services are listed.
                      </p>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <List link inverted>
                      <Header as="h4" inverted content="Legal" />
                      <List.Item>
                        <Link href="/privacy">
                          <a>
                            Privacy policy
                          </a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href="/terms">
                          <a>
                            Terms of service
                          </a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href="/imprint">
                          <a>
                            Imprint
                          </a>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  {/* <Grid.Column width={3}>
                  <Newsletter />
                </Grid.Column> */}
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={8}>
                    Powered by{" "}
                    <a
                      href="https://wiedergruen.com"
                      className="logo-wiedergruen"
                    >
                      <img src={LogoWiedergruen} alt="Wiedergrün" />
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Responsive>
      </>
    );
  }
}

export default Footer;
