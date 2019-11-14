import React from "react";
import { Menu, Image, Visibility, Button, Grid } from "semantic-ui-react";
import Link from "next/link";
import Search from "./SearchBar";
import "./PageMenu.css";
import Logo from '../assets/images/logo.png';

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

class PageHeader extends React.Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    showSecondSearchInput: false
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: false });

  onToggleSearchInput = () => {
    this.setState(prevState => ({
      showSecondSearchInput: !prevState.showSecondSearchInput
    }));
  };

  render() {
    const { menuFixed, showSecondSearchInput } = this.state;
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          className="page-menu-wrapper"
          vertical
          borderless
          fluid
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Grid className="page-menu-main-grid">
            <Grid.Row className="page-menu-main-content">
              <div className="page-menu-main-content-wrapper">
                <Link href="/">
                  <a className="page-menu-logo">
                    <Image
                      alt="evselist.com"
                      src={Logo}
                      style={{
                        border: 0,
                        maxHeight: "2.5em",
                        marginRight: "1.5em"
                      }}
                    />
                  </a>
                </Link>
                <div className="page-menu-search-input">
                  <Search />
                </div>
                <div className="page-menu-search-button">
                  <Button
                    as="a"
                    icon="search"
                    onClick={this.onToggleSearchInput}
                  />
                </div>
                <div className="page-menu-button">
                  <Link href="/add">
                    <Button as="a">
                      Add Product...
                    </Button>
                  </Link>
                </div>
                <div className="page-menu-button-plus">
                  <Link href="/add">
                    <Button icon="plus" />
                  </Link>
                </div>
              </div>
            </Grid.Row>
          </Grid>
          {showSecondSearchInput && (
            <Menu.Item>
              <Search className="page-menu-secondary-search-input" />
            </Menu.Item>
          )}
        </Menu>
        <div
          id="menuPlaceholder"
          style={menuFixed ? { height: "48px" } : { height: 0 }}
        />
      </Visibility>
    );
  }
}

export default PageHeader;
