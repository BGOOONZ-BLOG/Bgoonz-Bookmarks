export default {
    "type": "object",
    "name": "hero_section",
    "title": "Hero section",
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
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image alt text",
            "description": "The alt text of the section image",
            "validation": null
        },
        {
            "type": "text",
            "name": "video_embed_html",
            "title": "Video Embed Code",
            "description": "The HTML embed code for your video",
            "validation": null
        },
        {
            "type": "string",
            "name": "media_position",
            "title": "Image or video position",
            "description": "The position of the image or video relative to the text content",
            "initialValue": "top",
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
            "name": "media_width",
            "title": "Image or video width",
            "description": "The image or video container width as a percentage of the section width. Used only when the image or video position is set to \"left\" or \"right\"",
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
            "name": "align",
            "title": "Section alignment",
            "description": "The horizontal alignment of the section content",
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
                    "hero_section"
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