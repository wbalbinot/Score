// Remove the Spaces on the Margin and Padding
function cleanMarginSpace (tag) {
  tag.style.margin = 0;
  tag.style.padding = 0;
  tag.style.height = '100%';
}

// Remove buttons attribute and set margin and border
function spacerAndBorder (tag) {
  tag.style.marginTop = '0.5vh';
  tag.style.marginBottom = '0.5vh';
  tag.style.marginLeft = '0.5vw';
  tag.style.marginRight = '0.5vw'
  tag.style.borderRadius = '5px';
  tag.style.padding = 0;
  tag.style.border = 0;
}

export { cleanMarginSpace, spacerAndBorder };