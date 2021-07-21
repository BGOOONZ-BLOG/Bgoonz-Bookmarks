export default {
    "type": "object",
    "name": "header",
    "title": "Header configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Header title",
            "description": "The title displayed in the header if logo image not specified",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo",
            "title": "Logo",
            "description": "The logo image displayed on the left side",
            "validation": null
        },
        {
            "type": "string",
            "name": "logo_alt",
            "title": "Logo alt text",
            "description": "The alt text of the logo image",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_primary_nav",
            "title": "Enable primary navigation menu",
            "description": "Display the navigation menu on the left side, next to the site title/logo",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "primary_nav_links",
            "title": "Primary navigation menu links",
            "description": "List of navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_secondary_nav",
            "title": "Enable secondary navigation menu",
            "description": "Display the navigation menu on the right side",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "secondary_nav_links",
            "title": "Secondary navigation menu links",
            "description": "List of navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_anncmnt",
            "title": "Enable announcement",
            "description": "Display the announcement above the site header",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "anncmnt_content",
            "title": "Announcement content",
            "description": "The text content of the announcement",
            "validation": null
        },
        {
            "type": "string",
            "name": "anncmnt_align",
            "title": "Announcement horizontal alignment",
            "description": "The horizontal alignment of the announcement content",
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
            "name": "anncmnt_is_home_only",
            "title": "Show on home page",
            "description": "Display the announcement on the home page only.",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "anncmnt_has_close",
            "title": "Enable announcement close",
            "description": "Display the announcement close button",
            "validation": null
        },
        {
            "type": "string",
            "name": "anncmnt_id",
            "title": "Announcement ID",
            "description": "A unique identifier, required if close button is enabled. Must be updated each time the announcement content changes",
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
                    "header"
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