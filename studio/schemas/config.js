export default {
    "type": "document",
    "name": "config",
    "title": "Site configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "path_prefix",
            "title": "Base URL",
            "description": "The base URL of this site. Useful for sites hosted under specific path, e.g.: https://www.example.com/my-site/",
            "hidden": true,
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "domain",
            "title": "Domain",
            "description": "The domain of your site, including the protocol, e.g. https://mysite.com/",
            "validation": null
        },
        {
            "type": "image",
            "name": "favicon",
            "title": "Favicon",
            "description": "A square icon that represents your website",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_type",
            "title": "Layout",
            "description": "The layout of the site",
            "initialValue": "full-width",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "full-width",
                    "boxed"
                ]
            }
        },
        {
            "type": "string",
            "name": "style",
            "title": "Style",
            "description": "The style of the site",
            "initialValue": "classic",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "minimal",
                    "classic",
                    "bold"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Palette",
            "description": "The palette of the site",
            "initialValue": "blue",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "blue",
                    "green",
                    "red",
                    "gray"
                ]
            }
        },
        {
            "type": "string",
            "name": "mode",
            "title": "Mode",
            "description": "The color scheme of the site",
            "initialValue": "dark",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "light",
                    "dark"
                ]
            }
        },
        {
            "type": "string",
            "name": "base_font",
            "title": "Font",
            "initialValue": "sans-serif",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "sans-serif",
                    "serif"
                ]
            }
        },
        {
            "type": "header",
            "name": "header",
            "title": "Header configuration",
            "validation": null
        },
        {
            "type": "footer",
            "name": "footer",
            "title": "Footer configuration",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Site configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/data/config.json"
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
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}