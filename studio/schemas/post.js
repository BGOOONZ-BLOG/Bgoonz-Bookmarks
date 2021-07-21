export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the post",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the post",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "description": "The publish date of the post",
            "validation": Rule => Rule.required()
        },
        {
            "type": "reference",
            "name": "author",
            "title": "Author",
            "description": "The author of the post",
            "validation": null,
            "to": [
                {
                    "type": "person"
                }
            ]
        },
        {
            "type": "array",
            "name": "categories",
            "title": "Categories",
            "description": "The categories of the post",
            "validation": null,
            "of": [
                {
                    "type": "reference",
                    "to": [
                        {
                            "type": "category"
                        }
                    ]
                }
            ]
        },
        {
            "type": "array",
            "name": "tags",
            "title": "Tags",
            "description": "The tags of the post",
            "validation": null,
            "of": [
                {
                    "type": "reference",
                    "to": [
                        {
                            "type": "tag"
                        }
                    ]
                }
            ]
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the post displayed in the blog feed",
            "validation": null
        },
        {
            "type": "image",
            "name": "thumb_image",
            "title": "Image (blog feed)",
            "description": "The image displayed in the blog feed",
            "validation": null
        },
        {
            "type": "string",
            "name": "thumb_image_alt",
            "title": "Image alt text (blog feed)",
            "description": "The alt text of the blog feed image",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image (single post)",
            "description": "The image displayed in the single post",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image alt text (single post)",
            "description": "The alt text of the single post image",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_position",
            "title": "Image position (single post)",
            "description": "The featured image position in the blog post relative to the post header content",
            "initialValue": "top",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right",
                    "top"
                ]
            }
        },
        {
            "type": "stackbit_page_meta",
            "name": "seo",
            "title": "Seo",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "post"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Directory",
            "description": "The directory path where this file is stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/pages"
                ]
            }
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
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