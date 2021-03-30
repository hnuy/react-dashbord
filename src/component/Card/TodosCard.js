import React from 'react';
import PropTypes from '../../utils/propTypes';

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

import Todos, { propTypes as TodosPropTypes } from '../Todos';

import backgroundImage from '../../assets/img/bg/background_1920-2.jpg';

const TodosCard = ({ image, title, name, todos, ...restProps }) => {
  return (
    <Card {...restProps}>
      <div className="position-relative">
        <CardImg src={image} />
        <CardImgOverlay className="bg-dark" style={{ opacity: 0.2 }}>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardText className="text-white">{name}</CardText>
        </CardImgOverlay>
      </div>
      <Todos todos={todos} />
    </Card>
  );
};

TodosCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  todos: TodosPropTypes.todos,
};

TodosCard.defaultProps = {
  image: backgroundImage,
  title: 'Tasks',
  name: 'Due soon...',
};

export default TodosCard;
