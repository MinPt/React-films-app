import React from "react";
import PropTypes from "prop-types";
const List = (props) => {
  const {
    itemList,
    currentGenre,
    onFilter,
    textProperty,
    valueProperty,
  } = props;
  return (
    <div className="list-group">
      <a
        onClick={() => onFilter(null)}
        className={
          currentGenre == null
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
      >
        All genres
      </a>
      {itemList.map((item) => {
        return (
          <a
            onClick={() => onFilter(item[textProperty])}
            key={item[valueProperty]}
            className={
              currentGenre === item[textProperty]
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
          >
            {item[textProperty]}
          </a>
        );
      })}
    </div>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

List.propTypes = {
  itemList: PropTypes.array,
  onFilter: PropTypes.func,
};

export default List;
