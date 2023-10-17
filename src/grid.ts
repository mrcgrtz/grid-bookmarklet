const id = 'grid-bookmarklet';
const node = document.querySelector(`#${id}`);

const css = `
:root {
  --${id}-offset: 1rem;
  --${id}-max-width: 100%;
  --${id}-columns: 6;
  --${id}-gutter: 1rem;
  --${id}-color: hsla(204, 80%, 72%, 0.25);
}

@media (min-width: 36rem) {
  :root {
    --${id}-color: hsla(286, 51%, 44%, 0.25);
  }
}

@media (min-width: 48rem) {
  :root {
		--${id}-offset: 2rem;
    --${id}-columns: 12;
		--${id}-max-width: 57rem;
    --${id}-color: hsla(204, 80%, 72%, 0.25);
  }
}

@media (min-width: 62rem) {
  :root {
		--${id}-max-width: 76.25rem;
    --${id}-color: hsla(286, 51%, 44%, 0.25);
  }
}

@media (min-width: 80rem) {
  :root {
    --${id}-color: hsla(204, 80%, 72%, 0.25);
  }
}

:root {
  --${id}-repeating-width: calc(100% / var(--${id}-columns));
  --${id}-column-width: calc((100% / var(--${id}-columns)) - var(--${id}-gutter));
  --${id}-background-width: calc(100% + var(--${id}-gutter));
  --${id}-background: repeating-linear-gradient(
    to right,
    var(--${id}-color),
    var(--${id}-color) var(--${id}-column-width),
    transparent var(--${id}-column-width),
    transparent var(--${id}-repeating-width)
  );
}

#${id} {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 1;
  margin: auto;
  width: calc(100% - (2 * var(--${id}-offset)));
  max-width: var(--${id}-max-width);
  background-image: var(--${id}-background);
  background-size: var(--${id}-background-width) 100%;
  pointer-events: none;
  user-select: none;
}
`;

if (node) {
	node.remove();
	document.querySelector(`#${id}-styles`)?.remove();
} else {
	const style = document.createElement('style');
	style.textContent = css;
	style.id = `${id}-styles`;
	document.head.append(style);

	const grid = document.createElement('div');
	grid.id = id;
	document.body.append(grid);
}
