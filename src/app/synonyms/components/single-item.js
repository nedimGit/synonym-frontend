import React from 'react';

const SingleItem = props => {
  const { item, onItemClick, selectedItem, hoveredItem, customHoveredFunction } = props;

  let isActive,
    isHovered = false;

  if (item && selectedItem) {
    isActive = true;
  }

  if (customHoveredFunction) {
    isHovered = customHoveredFunction(item);
  } else {
    isHovered = hoveredItem && hoveredItem.ID === item.ID;
  }

  return (
    <div onClick={e => onItemClick(e, item)} className={`item ${isActive ? 'selected' : ''} ${isHovered ? 'hovered' : ''} comp-${item.ID}`}>
      <p title={item.Word} className={`${item.visible ? 'f-primary' : 'f-secondary-dark'} noselect`}>
        {item.Word}
      </p>
    </div>
  );
};

export default SingleItem;
