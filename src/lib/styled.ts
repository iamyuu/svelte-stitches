import {createCss} from '@stitches/core';
import type {TMedias, TTheme} from '@stitches/core';

const media: TMedias = {
	'initial': '',
	'sm': '(min-width: 640px)',
	'md': '(min-width: 768px)',
	'lg': '(min-width: 1024px)',
}

const theme: TTheme = {
	colors: {
		primary: '#ff3e00'
	},
}

const utils = {
	bg: () => value => ({
		background: value,
	}),
	boxSize: () => value => ({
		width: value,
		height: value
	})
}

type Media = typeof media
type Theme = typeof theme
type Utils = typeof utils

const {css} = createCss<Media, Theme, Utils>({
	media,
	theme,
	utils,
})

function styled(node: Element, initialInput: any) {
  function update(input: any) {
		const {className} = css(input)()

    node.classList.add(className);
  }

  update(initialInput);

  return { update };
}

export default styled;
