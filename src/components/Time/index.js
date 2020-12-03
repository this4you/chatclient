import React from "react";
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNowStrict';
import ruLocale from 'date-fns/esm/locale/ru';
import './Time.scss';
const Time = ({date}) => (
    <>
        {distanceInWordsToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
    </>
);

Time.propTypes = {
    date: PropTypes.string
};

export default Time;