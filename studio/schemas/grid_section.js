export default {
    "type": "object",
    "name": "grid_section",
    "title": "Grid section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section displayed above the title",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action buttons",
            "description": "Action buttons displayed below section items",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "array",
            "name": "grid_items",
            "title": "Grid items",
            "validation": null,
            "of": [
                {
                    "type": "grid_item"
                }
            ]
        },
        {
            "type": "string",
            "name": "grid_cols",
            "title": "Grid columns",
            "description": "Show the specified number of items in a grid row",
            "initialValue": "three",
            "validation": null,
            "options": {
                "list": [
                    "two",
                    "three",
                    "four"
                ]
            }
        },
        {
            "type": "string",
            "name": "grid_gap_vert",
            "title": "Grid gap vertical",
            "description": "The vertical spacing between grid items",
            "initialValue": "small",
            "validation": null,
            "options": {
                "list": [
                    "small",
                    "medium",
                    "large"
                ]
            }
        },
        {
            "type": "string",
            "name": "grid_gap_horiz",
            "title": "Grid gap horizontal",
            "description": "The horizontal spacing between grid items",
            "initialValue": "small",
            "validation": null,
            "options": {
                "list": [
                    "small",
                    "medium",
                    "large"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "enable_cards",
            "title": "Enable cards",
            "description": "Display items as cards, i.e. add border, background and some padding around the item content",
            "validation": null
        },
        {
            "type": "string",
            "name": "align",
            "title": "Section alignment",
            "description": "The horizontal alignment of the section content (title, subtitle, action buttons)",
            "initialValue": "center",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right",
                    "center"
                ]
            }
        },
        {
            "type": "string",
            "name": "padding_top",
            "title": "Section top padding",
            "description": "The padding area (space) on the top of the section",
            "initialValue": "medium",
            "validation": null,
            "options": {
                "list": [
                    "none",
                    "small",
                    "medium",
                    "large"
                ]
            }
        },
        {
            "type": "string",
            "name": "padding_bottom",
            "title": "Section bottom padding",
            "description": "The padding area (space) on the bottom of the section",
            "initialValue": "medium",
            "validation": null,
            "options": {
                "list": [
                    "none",
                    "small",
                    "medium",
                    "large"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "has_border",
            "title": "Section border",
            "description": "Add section bottom border",
            "validation": null
        },
        {
            "type": "string",
            "name": "background_color",
            "title": "Background color",
            "description": "The background color of the section",
            "initialValue": "none",
            "validation": null,
            "options": {
                "list": [
                    "none",
                    "primary",
                    "secondary"
                ]
            }
        },
        {
            "type": "image",
            "name": "background_image",
            "title": "Background image",
            "description": "The image displayed in the background of the section",
            "validation": null
        },
        {
            "type": "number",
            "name": "background_image_opacity",
            "title": "Background image opacity",
            "description": "An integer between 0 and 100. A lower value makes the image more transparent",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "string",
            "name": "background_image_size",
            "title": "Background image size",
            "description": "The size of the background image",
            "initialValue": "cover",
            "validation": null,
            "options": {
                "list": [
                    "auto",
                    "contain",
                    "cover"
                ]
            }
        },
        {
            "type": "string",
            "name": "background_image_position",
            "title": "Background image position",
            "description": "The starting position of a background image. The first value is the horizontal position, and the second value is the vertical",
            "initialValue": "center center",
            "validation": null,
            "options": {
                "list": [
                    "left top",
                    "left center",
                    "left bottom",
                    "center top",
                    "center center",
                    "center bottom",
                    "right top",
                    "right center",
                    "right bottom"
                ]
            }
        },
        {
            "type": "string",
            "name": "background_image_repeat",
            "title": "Background image repeat",
            "description": "Repeat the image to cover the whole area",
            "initialValue": "no-repeat",
            "validation": null,
            "options": {
                "list": [
                    "repeat",
                    "no-repeat"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "grid_section"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}