import React from 'react';
import Select from 'react-select';
import { withTranslation } from 'react-i18next';
import artists from '../db/db';
import { options } from '../config/options';

const Artists = (props) => {
    const { t } = props;
    return (
        <>
            <Select
                defaultValue={options[0]}
                options={options}
                value={props.lang}
                onChange={props.change}
                className="App-Select"
            />
            <h1>Artists</h1>
            {
                artists.map(artist => {
                    return (
                        <div key={artist.id}>
                            <h2>{t('artistName')}{artist.name}</h2>
                            <h2>{t('artistCountry')}{artist.country}</h2>
                            <h2>{t('music')}{artist.genre}</h2>
                            <h2>{t('albumsNo')}{artist.albums}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}
export default withTranslation('translations')(Artists);