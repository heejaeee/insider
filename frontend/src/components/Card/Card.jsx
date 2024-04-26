import './card.css';

import PropTypes from 'prop-types';

function Card({ image, name, role, info }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-role">{role}</p>
                <p className="card-info">{info}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};

export default Card;
