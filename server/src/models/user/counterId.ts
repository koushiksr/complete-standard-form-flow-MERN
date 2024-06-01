// export async function genId(
//   schemaName: string,
//   fieldName: string
// ): Promise<string | null> {
//   try {
//     // Construct the module path dynamically
//     const modulePath = `../../models/${schemaName.toLowerCase()}/${schemaName.toLowerCase()}Model`;

//     // Dynamically import the module
//     const schemaModule = await import(modulePath);

//     // Access the specified field from the imported module
//     const id = await schemaModule.find();

//     // Check if the field exists and generate an ID
//     // if (field) {
//     // const id = `ID_${field}`;
//     console.log(id, "id");
//     return id;
//     // } else {
//     // console.error(`Field ${fieldName} not found in schema ${schemaName}`);
//     // return null;
//     // }
//   } catch (error) {
//     console.error("Error generating ID:", error);
//     return null;
//   }
// }
