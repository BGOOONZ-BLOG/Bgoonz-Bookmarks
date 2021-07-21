export default {
    "type": "object",
    "name": "footer",
    "title": "Footer configuration",
    "fields": [
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
            "description": "Display the primary navigation menu",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "primary_nav_title",
            "title": "Primary navigation title",
            "description": "The title of the primary navigation menu",
            "validation": null
        },
        {
            "type": "array",
            "name": "primary_nav_links",
            "title": "Primary navigation menu links",
            "description": "List of primary navigation links",
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
            "description": "Display the secondary navigation menu",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "secondary_nav_title",
            "title": "Secondary navigation title",
            "description": "The title of the secondary navigation menu",
            "validation": null
        },
        {
            "type": "array",
            "name": "secondary_nav_links",
            "title": "Secondary navigation menu links",
            "description": "List of secondary navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_tertiary_nav",
            "title": "Enable tertiary navigation menu",
            "description": "Display the tertiary navigation menu",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "tertiary_nav_title",
            "title": "Tertiary navigation title",
            "description": "The title of the tertiary navigation menu",
            "validation": null
        },
        {
            "type": "array",
            "name": "tertiary_nav_links",
            "title": "Tertiary navigation menu links",
            "description": "List of tertiary navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_social",
            "title": "Enable social links",
            "description": "Display the social links",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "social_links",
            "title": "Social links",
            "description": "List of social links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "content",
            "title": "Footer content",
            "description": "The copyright text",
            "validation": null
        },
        {
            "type": "array",
            "name": "links",
            "title": "Links",
            "description": "A list of links displayed next to the copyright text",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
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
                    "footer"
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
            "title": "content"
        }
    }
}