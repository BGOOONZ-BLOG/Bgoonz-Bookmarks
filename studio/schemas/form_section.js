export default {
    "type": "object",
    "name": "form_section",
    "title": "Form section",
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
            "description": "The subtitle of the section displayed below the title",
            "validation": null
        },
        {
            "type": "string",
            "name": "title_align",
            "title": "Title, subtitle alignment",
            "description": "The horizontal alignment of the section title and subtitle",
            "initialValue": "left",
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
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "content_align",
            "title": "Content alignment",
            "description": "The horizontal alignment of the section text content",
            "initialValue": "left",
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
            "name": "form_position",
            "title": "Form position",
            "description": "The position of the form relative to the text content of the section",
            "initialValue": "bottom",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right",
                    "top",
                    "bottom"
                ]
            }
        },
        {
            "type": "string",
            "name": "form_width",
            "title": "Form width",
            "description": "The form container width as a percentage of the section width. Used only when the form position is set to \"left\" or \"right\"",
            "initialValue": "fifty",
            "validation": null,
            "options": {
                "list": [
                    "fourty",
                    "fifty",
                    "sixty"
                ]
            }
        },
        {
            "type": "string",
            "name": "form_layout",
            "title": "Form layout",
            "description": "The layout of the form. \"Inline\" layout can only be used if the form has one input field",
            "initialValue": "stacked",
            "validation": null,
            "options": {
                "list": [
                    "stacked",
                    "inline"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "enable_card",
            "title": "Display form in a box",
            "description": "Display form inside a box, i.e. add border and background to the form container",
            "validation": null
        },
        {
            "type": "string",
            "name": "form_id",
            "title": "Form ID",
            "description": "A unique identifier of the form. Must not contain whitespace",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "form_action",
            "title": "Form action",
            "description": "The path of your custom \"success\" page, if you want to replace the default success message.",
            "validation": null
        },
        {
            "type": "array",
            "name": "form_fields",
            "title": "Form fields",
            "validation": null,
            "of": [
                {
                    "type": "form_field"
                }
            ]
        },
        {
            "type": "string",
            "name": "submit_label",
            "title": "Submit button label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "align_vert",
            "title": "Section vertical alignment",
            "description": "The vertical alignment of the section text content and form. Used only when the form position is set to \"left\" or \"right\"",
            "initialValue": "top",
            "validation": null,
            "options": {
                "list": [
                    "top",
                    "middle",
                    "bottom"
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
                    "form_section"
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