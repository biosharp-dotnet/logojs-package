import React from 'react';

/**
 * Container component which scales a square glyph to the required dimensions.
 *
 * @prop yscale the factor by which to scale the glyph's height.
 * @prop xscale the factor by which to scale the glyph's width.
 * @prop inverted if set, reflects the glyph vertically.
 * @prop children the SVG contents to transform.
 */
const Glyph = ({ yscale, inverted, xscale, children }) => {
    const yscale = this.props.yscale * (this.props.inverted ? -1 : 1);
    return (
	<g transform={"scale(" + this.props.xscale + "," + yscale + ")"}>
	  {this.props.children}
	</g>
    );
};
export default Glyph;
