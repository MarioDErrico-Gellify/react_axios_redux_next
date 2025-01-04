export function handleTypesInGenericForm(labels: string): string {
  switch (labels) {
    case "password":
      return "password";
    case "email":
      return "email";
    case "age":
      return "number";
    default:
      return "text";
  }
}
