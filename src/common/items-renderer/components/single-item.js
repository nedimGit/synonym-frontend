import React from 'react';

const SingleItem = props => {
  const { item, onItemClick, selectedItem, hoveredItem, renderItemRightComponent, index, customSelectedFunction, customHoveredFunction } = props;

  let isActive,
    isHovered = false;

  if (customSelectedFunction) {
    isActive = customSelectedFunction(item);
  } else {
    isActive = selectedItem && selectedItem.ID === item.ID;
  }

  if (customHoveredFunction) {
    isHovered = customHoveredFunction(item);
  } else {
    isHovered = hoveredItem && hoveredItem.ID === item.ID;
  }

  return (
    <div onClick={e => onItemClick(e, item)} className={`item ${isActive ? 'selected' : ''} ${isHovered ? 'hovered' : ''} comp-${item.ID}`}>
      <p title={item.Name} className={`${item.visible ? 'f-primary' : 'f-secondary-dark'} noselect`}>
        {item.Name}
      </p>
      {renderItemRightComponent && renderItemRightComponent(item, index)}
    </div>
  );
};

export default SingleItem;
