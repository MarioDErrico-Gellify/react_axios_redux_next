export function handleTypesInGenericForm(labels: string): string {
  if (labels.includes("password")) {
    return "password";
  }
  switch (labels) {
    case "password":
      return "password";
    case "input":
      return "file";
    case "email":
      return "email";
    case "age":
      return "number";
    default:
      return "text";
  }
}
