import {useState} from "react";
import {useForm} from "@mantine/form";
import {TextInput, Button, Container, Loader} from "@mantine/core";
import {MantineFormDTO} from "@/service/userFormTypes";
import {validateForm} from "@/utils/validateFunction/validateFormOne";
import ModalUser from "./modalUser";
import NotificationInfo from "./notification/Notification";
import {useAppDispatch} from "@/hook/hooks";
import {registerUser} from "@/feature/user.slice";

type genericPropsMantine<T> = {
  labels: string[];
  placeholders: string[];
  buttonLabel: string;
  mode?: "uncontrolled" | "controlled";
};

function MantineForm<T extends MantineFormDTO>({
  labels,
  placeholders,
  buttonLabel,
  mode,
}: genericPropsMantine<T>) {
  const dispatch = useAppDispatch();
  const [openModal, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<MantineFormDTO>();
  const [notification, setNotification] = useState(false);

  const form = useForm({
    mode: mode,
    initialValues: {name: "", email: "", age: 18},
    validate: validateForm,
  });

  async function handleSubmit(param: MantineFormDTO) {
    setLoading(true);
    dispatch(
      registerUser({
        email: param.email,
        name: param.name,
        age: param.age,
      })
    )
      .unwrap()
      .then((value) => {
        setModalOpened(true);
        setLoading(false);
        setUserData({name: value.name, age: value.age, email: value.email});
        form.reset();
        setNotification(true);
      })
      .catch((reason) => {
        setLoading(false);
        console.log(reason);
        form.reset();
      });
  }

  function disableButton(): boolean {
    return !form.values.name || !form.values.email || !form.values.age;
  }

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {labels.map((label, _value) => (
          <div key={_value} style={{marginBottom: "1rem"}}>
            <TextInput
              label={label}
              placeholder={placeholders[_value]}
              {...form.getInputProps(label.toLowerCase())}
            />
          </div>
        ))}
        <Button type="submit" mt="lg" disabled={disableButton()}>
          {buttonLabel}
          {loading && <Loader color="lime" />}
        </Button>
      </form>
      <ModalUser
        name={userData?.name!}
        email={userData?.email!}
        age={userData?.age!}
        onClose={() => setModalOpened(false)}
        opened={openModal}
      ></ModalUser>
      {notification && (
        <NotificationInfo
          color={"green"}
          radius={"10"}
          title={"Success"}
          message={
            "if you go to the dashboard page, you can see the Redux useAppSelector information"
          }
          onClose={() => setNotification(false)}
        />
      )}
    </Container>
  );
}

export default MantineForm;
