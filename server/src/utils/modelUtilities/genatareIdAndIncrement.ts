export async function genId(schemaName: String, fieldName: any) {
  try {
    // Import the module dynamically based on the schemaName parameter
    const { [fieldName]: field } = await import(
      `../../models/${schemaName.toLowerCase()}/${schemaName.toLowerCase()}Model`
    );
    // const id = await field.findOne({ id: 1 });
    // console.log({ id }, "djgwhu");
    return "id";
  } catch (error) {
    console.error("Error generating ID:", error);
    return null; // Or handle the error accordingly
  }
}
