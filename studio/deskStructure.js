import S from "@sanity/desk-tool/structure-builder";

function transformType(type) {
    let schemaType = type.getSchemaType();
    if (schemaType.singleInstance === true) {
        return type.child(
            S.editor()
                .id(schemaType.name)
                .schemaType(schemaType.name)
                .documentId(schemaType.name)
        )
    }
    return type;
}

export default () =>
    S.list()
        .title("Content")
        .items([
            ...S.documentTypeListItems().map(transformType)
        ]);
