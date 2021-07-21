export default {
    "type": "document",
    "name": "tag",
    "title": "Tag",
    "fields": [
        {
            "type": "string",
            "name": "id",
            "title": "ID",
            "description": "A unique identifier used when filtering posts, e.g. \"jamstack\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "link",
            "title": "Link",
            "description": "The link to the tag page, e.g. \"blog/tag/jamstack\"",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the tag",
            "validation": Rule => Rule.required()
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
                    "tag"
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
            "title": "title"
        }
    }
}