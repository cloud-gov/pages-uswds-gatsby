import React from 'react';

class UswdsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.props.uswdsComponent.add(this.ref.current);
  }

  componentWillUnmount() {
    this.props.uswdsComponent.remove(this.ref.current);
  }

  render() {
    return this.props.render(this.ref);
  }
}

export default UswdsComponent;
