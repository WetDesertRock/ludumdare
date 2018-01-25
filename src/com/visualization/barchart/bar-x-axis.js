import {h, Component} 				from 'preact/preact';

// Non used prop `height` is the expected maximum extent of axis
// content down from the `yZeroPos` y.
//
// Component returns a group to support extension with ticks and labels

export default class XAxis extends Component {
	render( props ) {
		const {yZeroPos, padLeft, padRight} = props;
		
		// NOTE: This emits SVG, not HTML
		return (
			<g>
				<line class={cN('-chart-axis', 'x-axis', this.props.class)} x1={padLeft} y1={yZeroPos} x2={100 - padRight} y2={yZeroPos} />
			</g>
        );
	}
}
