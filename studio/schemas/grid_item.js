export default {
    "type": "object",
    "name": "grid_item",
    "title": "Item",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the item",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the item displayed below the title",
            "validation": null
        },
        {
            "type": "string",
            "name": "title_align",
            "title": "Title, subtitle alignment",
            "description": "The horizontal alignment of the item title and subtitle",
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
            "description": "The text content of the item",
            "validation": null
        },
        {
            "type": "string",
            "name": "content_align",
            "title": "Content alignment",
            "description": "The horizontal alignment of the item text content",
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
            "type": "string",
            "name": "actions_align",
            "title": "Action buttons alignment",
            "description": "The horizontal alignment of the item action buttons",
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
            "name": "actions_width",
            "title": "Action buttons width",
            "description": "The width of action button",
            "initialValue": "auto",
            "validation": null,
            "options": {
                "list": [
                    "auto",
                    "full-width"
                ]
            }
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the item",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image alt text",
            "description": "The alt text of the item image",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_position",
            "title": "Image position",
            "description": "The position of the image relative to the text content",
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
            "name": "image_width",
            "title": "Image container width",
            "description": "The image container width as a percentage of the item width. Used only when the image position is set to \"left\" or \"right\"",
            "initialValue": "fifty",
            "validation": null,
            "options": {
                "list": [
                    "twenty-five",
                    "thirty-three",
                    "fourty",
                    "fifty",
                    "sixty"
                ]
            }
        },
        {
            "type": "string",
            "name": "image_align",
            "title": "Image alignment",
            "description": "The horizontal alignment of the image",
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
            "type": "boolean",
            "name": "image_has_padding",
            "title": "Image padding",
            "description": "Add padding (space) around the image. Used only when \"Enable cards\" is set to true",
            "validation": null
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
                    "grid_item"
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