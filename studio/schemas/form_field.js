export default {
    "type": "object",
    "name": "form_field",
    "title": "Form field",
    "fields": [
        {
            "type": "string",
            "name": "input_type",
            "title": "Type",
            "description": "Type of the form field",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "text",
                    "email",
                    "tel",
                    "number",
                    "checkbox",
                    "select",
                    "textarea"
                ]
            }
        },
        {
            "type": "string",
            "name": "name",
            "title": "Name",
            "description": "The name of the field, submitted with the form",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "label",
            "title": "Label",
            "description": "The caption of the field, shown above the field input",
            "validation": null
        },
        {
            "type": "string",
            "name": "default_value",
            "title": "Placeholder text or default value",
            "description": "The placeholder for textual field types or default option for select field",
            "validation": null
        },
        {
            "type": "array",
            "name": "options",
            "title": "Options",
            "description": "The list of options, used only when the field type is \"select\"",
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "is_required",
            "title": "Is the field required?",
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
                    "form_field"
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
            "title": "name"
        }
    }
}