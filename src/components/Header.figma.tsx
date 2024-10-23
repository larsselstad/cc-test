import React from "react"
import Header from "./Header"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Header,
  "https://www.figma.com/design/13fdTVdoIfczIUDi5dncur/code-connect-test?node-id=11-5&node-type=frame&t=T8SXJBmwIRbvLxTh-0",
  {
    props: {
      size: figma.enum("size", {
        xlarge: "xlarge",
        large: "large",
        medium: "medium",
      }),
    },
    example: (props) => <Header size={props.size} />,
  },
)