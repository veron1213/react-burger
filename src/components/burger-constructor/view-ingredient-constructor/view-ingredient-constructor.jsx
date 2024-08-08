import React from "react";
import { burgerPropTypes } from "../../../utils/prop-types.js";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeIngredientsConstructor } from "../../../services/view-inrgedients-constructor/actions";
import viewIngredientConstructorStyle from "./view-ingredient-constructor.module.css";
import { replaceIngredients } from "../../../services/view-inrgedients-constructor/actions";
import PropTypes from "prop-types";

function ViewIngredientConstructor({ ingr, index }) {
  const dispatch = useDispatch();
  const dragRef = useRef(null);
  const { _id } = ingr;
  const handleClose = (key) => {
    dispatch(removeIngredientsConstructor({ key }));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "moveInrgedient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!dragRef.current) {
        return;
      }
      const dragIndex = item.index;

      const hoverIndex = index;
      const numbersObject = {
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      };

      dispatch(replaceIngredients(numbersObject));

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "moveInrgedient",
    item: () => {
      return { _id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(dragRef));

  return (
    <div
      ref={dragRef}
      className={classNames(viewIngredientConstructorStyle.ingr)}
      key={ingr.key}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingr.name}
        price={ingr.price}
        thumbnail={ingr.image}
        handleClose={() => handleClose(ingr.key)}
      />
    </div>
  );
}
ViewIngredientConstructor.propTypes = {
  ingr: burgerPropTypes.isRequired,
  index: PropTypes.number.isRequired,
};
export default ViewIngredientConstructor;
