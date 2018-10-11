import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  height: 80,
  width: "100%",
  borderRadius: 0
};

class Footer extends React.PureComponent {
  render() {
    return (
      <Segment inverted style={segmentStyle}>
        <div className="ui center aligned container">
          <Header as="h5" inverted>
            &copy; Sovellus, 2018.
          </Header>
          <Icon link name="facebook square" size="large" />
          <Icon link name="instagram" size="large" />
          <Icon link name="twitter" size="large" />
        </div>
      </Segment>
    );
  }
}

export default Footer;
