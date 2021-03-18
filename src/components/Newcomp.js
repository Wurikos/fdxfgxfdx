import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "400px",
	"height": "400px",
	"background": "#3412d0"
};
const overrides = {};

const Newcomp = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Newcomp, { ...Box,
	defaultProps,
	overrides
});
export default Newcomp;