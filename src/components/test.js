import React, { Component } from 'react';
import Select from 'react-select';
import { withTranslation } from 'react-i18next';
import { options } from '../config/options';

export class Test extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    value={this.props.lang}
                    onChange={this.props.change}
                    className="App-Select"
                />
                <h3>{t('test')}</h3>
            </>
        )
    }
}

export default withTranslation('translations')(Test);