import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "display": "block",
        "height": "100% border-box",
        "max-width": "none",
        "overflow-y": "",
        "background": "rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box"
    },
    "index": {
        "display": "block",
        "height": "100% border-box",
        "max-width": "none",
        "overflow-y": "",
        "background": "rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box"
    },
    "rttyf": {
        "display": "block",
        "height": "100% border-box",
        "max-width": "none",
        "overflow-y": "",
        "background": "rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
