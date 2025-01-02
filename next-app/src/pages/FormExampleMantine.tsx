import MantineForm from "@/components/MantineForm";
import { labelsForFormOne, placeholdersForFormOne } from "@/constants/costants";
import { Container } from "@mantine/core";
import { useEffect, useRef } from "react";
import { formatDateToItalianLocale } from "@/utils/date";
import { useTranslation } from "react-i18next";

export default function FormExampleMantine() {
  const renderCount = useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    renderCount.current += 1;
  });

  const formattedDate = formatDateToItalianLocale(new Date());
  return (
    <Container mt={20}>
      <p>{t("exampleForm")}</p>
      <p>{t("languages")}</p>
      <p>{formattedDate}</p>
      <p>The component has been rendered {renderCount.current} times.</p>
      <MantineForm
        mode={"controlled"}
        labels={labelsForFormOne}
        placeholders={placeholdersForFormOne}
        buttonLabel="Submit"
      />
    </Container>
  );
}
