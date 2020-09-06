declare module "react-admin" {
  /* eslint-disable */
  const Admin: any;
  const Resource: any;
  const ListGuesser: any;
  const List: any;
  const Datagrid: any;
  const TextField: any;
  const EmailField: any;
  const UrlField: any;
  const ReferenceField: any;
  const EditButton: any;
  const EditGuesser: any;
  const Edit: any;
  const SimpleForm: any;
  const TextInput: any;
  const ReferenceInput: any;
  const SelectInput: any;
  const Create: any;
  const Filter: any;
  /* eslint-enable */

  export {
    Admin,
    ListGuesser,
    Resource,
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    ReferenceField,
    EditButton,
    EditGuesser,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Create,
    Filter,
  };

  export * from "ra-core/src/types";
}
