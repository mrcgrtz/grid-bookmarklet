const id = 'grid-bookmarklet';
const body = document.body;
const node = document.querySelector(`#${id}`);
const grid = document.createElement('div');

const css
	= 'position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;user-select:none;pointer-events:none;background-position:0 0;';

if (node?.className === 'plain') {
	node.remove();
} else {
	if (node?.className === 'rows') {
		node.remove();
		grid.className = 'plain';
		grid.style.cssText
			= `${css}background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQBAMAAABzZ+XyAAAAD1BMVEX///8zzMzMmcwzzMyKr8xbQuVpAAAABXRSTlMARER3dw+R52kAAAAnSURBVChTY3BxMQYCQSDAR7u4MIwqxKtQSQnEYQACfLSS0qhCvAoBfpk/wSqLG9QAAAAASUVORK5CYII=)`;
	} else {
		grid.className = 'rows';
		grid.style.cssText
			= `${css}background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABCBAMAAAAyIUwOAAAAFVBMVEX///8zzMzMmcyZmZkzzMyKr8x2qqoSHzPEAAAAB3RSTlMARERVd3d3b6zWQAAAAEZJREFUSEtjDGV4z8DAcBaIjfHQggyMowrxKlRicCFC4R6QQvsNDGBTBRlw0qw8owpHFY4qHFU4qnBU4ajCUYXDQCFxDSQAonZUrjWIoNsAAAAASUVORK5CYII=)`;
	}

	grid.id = id;
	body.append(grid);
}
