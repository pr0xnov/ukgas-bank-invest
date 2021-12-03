const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', evt => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const selectSingleRegion = document.querySelector('.__select-region');
const selectSingle_titleRegion = selectSingleRegion.querySelector(
  '.__select__title-region',
);
const selectSingle_labelsRegion = selectSingleRegion.querySelectorAll(
  '.__select__label-region',
);

// Toggle menu
selectSingle_titleRegion.addEventListener('click', () => {
  if ('active' === selectSingleRegion.getAttribute('data-state')) {
    selectSingleRegion.setAttribute('data-state', '');
  } else {
    selectSingleRegion.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labelsRegion.length; i++) {
  selectSingle_labelsRegion[i].addEventListener('click', evt => {
    selectSingle_titleRegion.textContent = evt.target.textContent;
    selectSingleRegion.setAttribute('data-state', '');
  });
}
