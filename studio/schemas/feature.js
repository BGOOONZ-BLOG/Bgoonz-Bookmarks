export default {
    "type": "object",
    "name": "feature",
    "title": "Feature",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the feature",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the feature displayed below the title",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the feature",
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
            "description": "The image of the feature",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image alt text",
            "description": "The alt text of the feature image",
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
            "description": "The image or video container width as a percentage of the feature width. Used only when the image or video position is set to \"left\" or \"right\"",
            "initialValue": "fifty",
            "validation": null,
            "options": {
                "list": [
                    "thirty-three",
                    "fourty",
                    "fifty",
                    "sixty"
                ]
            }
        },
        {
            "type": "string",
            "name": "align",
            "title": "Feature alignment",
            "description": "The horizontal alignment of the feature content",
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
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "feature"
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