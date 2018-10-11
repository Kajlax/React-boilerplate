import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  borderRadius: 0
};

class Footer extends React.PureComponent {
  render() {
    return (
      <Segment inverted style={segmentStyle}>
        <div className="ui center aligned container">
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h5" inverted>
                  Sovellus, 2018
                  <br /> info@sovellus.fi
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" inverted>
                  Katu 1<br /> 00000, Helsinki
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Icon link name="facebook square" size="large" />
                <Icon link name="instagram" size="large" />
                <Icon link name="twitter" size="large" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    );
  }
}

export default Footer;
