import React from 'react';
import * as actions from "./actions.js";
import {connect} from 'react-redux';

class PhoneForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        if (this.refs.phoneInput.value !== "") {
            var itemText = this.refs.phoneInput.value;
            this.refs.phoneInput.value = "";
            return this.props.addPhone(itemText);
        }
    }

    render() {
        return <div>
            <input ref="phoneInput"/>
            <button onClick={this.onClick.bind(this)}>Добавить</button>
        </div>
    }
}

class PhoneItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <p>
                <b>{this.props.text}</b><br/>
                <button onClick={() => {
                    this.props.deletePhone(this.props.text)
                }}>Удалить
                </button>
            </p>
        </div>
    }
}

class PhonesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.phones.map(item =>
                <PhoneItem key={item}
                           text={item}
                           deletePhone={this.props.deletePhone}/>
            )}
        </div>
    }
}

class AppView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <PhoneForm addPhone={this.props.addPhone}/>
            <PhonesList {...this.props} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        phones: state.get('phones')
    };
}

export default connect(mapStateToProps, actions)(AppView);