'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger;
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: this.handleClick },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button');
ReactDOM.render(e(LikeButton), domContainer);