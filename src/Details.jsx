import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";


const Details = ({info}) => {
    const loadingImg = require('./loader.gif')
    const [imgSrc, setImgSrc] = useState(loadingImg)

    useEffect(() => {
        setImgSrc(loadingImg)
    }, [info.name]);

    return (
        <div className='detailsWrapper'>
            <img src={imgSrc} onLoad={() => setImgSrc(info.avatar)}/>
            <div className='name'><div>{info.name}</div></div>
            <div className='city'><div>City: {info.details.city}</div></div>
            <div className='company'><div>Company: {info.details.company}</div></div>
            <div className='position'><div>Position: {info.details.position}</div></div>
        </div>
    );
};
Details.propTypes = {
    info: PropTypes.object,

}
export default Details;