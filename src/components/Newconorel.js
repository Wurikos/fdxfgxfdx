import React from "react";
import { useOverrides, StackItem, Stack, SocialMedia, Section, Menu, GoogleMap, Formspree } from "@quarkly/components";
import { Text, Input, Button, List, Link, Image, Icon, Hr, Box } from "@quarkly/widgets";
import EmbedHTML from "./EmbedHTML";
import EmbedJS from "./EmbedJS";
import Newcomp from "./Newcomp";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"embedHtml": {
		"kind": "EmbedHTML",
		"props": {}
	},
	"embedJs": {
		"kind": "EmbedJS",
		"props": {}
	},
	"newcomp": {
		"kind": "Newcomp",
		"props": {}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	}
};

const Newconorel = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<StackItem {...override("stackItem")}>
			<Text {...override("text")} />
		</StackItem>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text1")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
		</Stack>
		<StackItem {...override("stackItem3")}>
			<Text {...override("text3")} />
		</StackItem>
		<Stack {...override("stack1")}>
			{"    "}
			<StackItem {...override("stackItem4")}>
				{"        "}
				<Text {...override("text4")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem5")}>
				{"        "}
				<Text {...override("text5")} />
				{"    "}
			</StackItem>
		</Stack>
		<SocialMedia {...override("socialMedia")} />
		<Section {...override("section")} />
		<Menu {...override("menu")} />
		<EmbedHTML {...override("embedHtml")} />
		<EmbedJS {...override("embedJs")} />
		<Newcomp {...override("newcomp")} />
		<GoogleMap {...override("googleMap")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input")} />
			<Button {...override("button")} />
		</Formspree>
		<Text {...override("text6")} />
		<List {...override("list")}>
			<Text {...override("text7")} />
		</List>
		<Link {...override("link")} />
		<Input {...override("input1")} />
		<Image {...override("image")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Button {...override("button1")} />
		{children}
	</Box>;
};

Object.assign(Newconorel, { ...Box,
	defaultProps,
	overrides
});
export default Newconorel;