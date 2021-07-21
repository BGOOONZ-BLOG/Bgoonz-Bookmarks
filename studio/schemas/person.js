export default {
    "type": "document",
    "name": "person",
    "title": "Person",
    "fields": [
        {
            "type": "string",
            "name": "id",
            "title": "ID",
            "description": "A unique identifier used when filtering posts, e.g. \"john-doe\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "link",
            "title": "Link",
            "description": "The link to the author page, e.g. \"blog/author/john-doe\"",
            "validation": null
        },
        {
            "type": "string",
            "name": "first_name",
            "title": "First name",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "last_name",
            "title": "Last name",
            "validation": null
        },
        {
            "type": "image",
            "name": "photo",
            "title": "Image",
            "validation": null
        },
        {
            "type": "string",
            "name": "photo_alt",
            "title": "Image alt text",
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
                    "person"
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
                    "data"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "id"
        }
    }
}