import React from "react";
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNowStrict';
import ruLocale from 'date-fns/esm/locale/uk';
import './Time.scss';
const Time = ({date}) => {
    const dateText = distanceInWordsToNow(new Date(date), {addSuffix: true, locale: ruLocale})
    return(
    <>
        {dateText.startsWith("0") ? "зараз": dateText}
    </>
    )
};

Time.propTypes = {
    date: PropTypes.string
};

export default Time;