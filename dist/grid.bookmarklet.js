(()=>{var e="grid-bookmarklet",r=document.querySelector(`#${e}`),n=`
:root {
  --${e}-offset: 0;
  --${e}-max-width: 76rem;
  --${e}-columns: 6;
  --${e}-gutter: 1rem;
  --${e}-color: hsla(204, 80%, 72%, 0.25);
}

@media (min-width: 36rem) {
  :root {
		--${e}-offset: 1rem;
    --${e}-color: hsla(286, 51%, 44%, 0.25);
  }
}

@media (min-width: 48rem) {
  :root {
		--${e}-offset: 0;
    --${e}-columns: 12;
		--${e}-max-width: 44rem;
    --${e}-color: hsla(204, 80%, 72%, 0.25);
  }
}

@media (min-width: 62rem) {
  :root {
		--${e}-max-width: 60rem;
    --${e}-color: hsla(286, 51%, 44%, 0.25);
  }
}

@media (min-width: 80rem) {
  :root {
		--${e}-max-width: 76rem;
    --${e}-color: hsla(204, 80%, 72%, 0.25);
  }
}

:root {
  --${e}-repeating-width: calc(100% / var(--${e}-columns));
  --${e}-column-width: calc((100% / var(--${e}-columns)) - var(--${e}-gutter));
  --${e}-background-width: calc(100% + var(--${e}-gutter));
  --${e}-background: repeating-linear-gradient(
    to right,
    var(--${e}-color),
    var(--${e}-color) var(--${e}-column-width),
    transparent var(--${e}-column-width),
    transparent var(--${e}-repeating-width)
  );
}

#${e} {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 1;
  margin: auto;
  width: calc(100% - (2 * var(--${e}-offset)));
  max-width: var(--${e}-max-width);
  background-image: var(--${e}-background);
  background-size: var(--${e}-background-width) 100%;
  pointer-events: none;
  user-select: none;
}
`,a;if(r)r.remove(),(a=document.querySelector(`#${e}-styles`))==null||a.remove();else{let t=document.createElement("style");t.textContent=n,t.id=`${e}-styles`,document.head.append(t);let o=document.createElement("div");o.id=e,document.body.append(o)}})();
