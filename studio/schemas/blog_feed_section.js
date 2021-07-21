export default {
    "type": "object",
    "name": "blog_feed_section",
    "title": "Blog feed section",
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
            "description": "Action buttons displayed below blog posts",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "blog_feed_cols",
            "title": "Blog feed columns",
            "description": "Show the specified number of posts in a blog feed grid row",
            "initialValue": "three",
            "validation": null,
            "options": {
                "list": [
                    "two",
                    "three"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "enable_cards",
            "title": "Enable cards",
            "description": "Display posts as cards, i.e. add border, background and some padding around post content",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_recent",
            "title": "Show recent posts only",
            "description": "Show the specified number of recent posts. Should not be used with author, category and tag filters",
            "validation": Rule => Rule.required()
        },
        {
            "type": "number",
            "name": "recent_count",
            "title": "Number of recent posts to show",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "reference",
            "name": "author",
            "title": "Author filter",
            "description": "Filter posts by an author",
            "validation": null,
            "to": [
                {
                    "type": "person"
                }
            ]
        },
        {
            "type": "reference",
            "name": "category",
            "title": "Category filter",
            "description": "Filter posts by a category",
            "validation": null,
            "to": [
                {
                    "type": "category"
                }
            ]
        },
        {
            "type": "reference",
            "name": "tag",
            "title": "Tag filter",
            "description": "Filter posts by a tag",
            "validation": null,
            "to": [
                {
                    "type": "tag"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "show_date",
            "title": "Show date",
            "description": "Show the publish date of the post",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_categories",
            "title": "Show categories",
            "description": "Show the categories of the post",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_author",
            "title": "Show author",
            "description": "Show the author of the post",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_excerpt",
            "title": "Show excerpt",
            "description": "Show the excerpt of the post",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_image",
            "title": "Show image",
            "description": "Show the post image thumbnail",
            "initialValue": true,
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
                    "blog_feed_section"
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