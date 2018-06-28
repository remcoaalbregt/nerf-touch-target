import React, { Component } from 'react';
import styled from 'styled-components';
import Score from '../connectors/scoreConnector';
import Target from '../connectors/targetConnector';

const Wrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,

    }
  }

  render() {
    return (
      <Wrapper>
          <Target />
          <Score />
      </Wrapper>
    );
  }
}

export default App;
