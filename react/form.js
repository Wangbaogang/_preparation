'use strict';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            value: evt.target.value
        })
    }
    render() {
        return e(
            'form',
            {

            },
            [
                e(
                    'select',
                    {
                        value: this.state.value,
                        onChange: this.handleChange
                    },
                    [
                        e(
                            'option',
                            {
                                key: '1'
                            },
                            '1'
                        ),
                        e(
                            'option',
                            {
                                key: '2'
                            },
                            '2'
                        )
                    ]
                ),
                e(
                    'input',
                    {
                        value: 'abc'
                    }
                )
            ]
        )
    }
}

const container = document.querySelector('#form');
ReactDOM.render(e(Select), container);