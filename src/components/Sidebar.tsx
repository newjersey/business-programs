import React, { useContext } from "react";
import { Card } from "./helper-components";
import { Box, Text, Select, Image } from "grommet";
import { LanguageContext } from "../contexts/language";
import { translate, getCopy } from "../forms/index";

interface Props {
  questionCount: number;
  currentIndex: number;
  seal?: string;
  setCurrentIndex: (index: number) => void;
}

const languages = [
  { title: "English", value: "en" },
  { title: "中文", value: "zh" },
  { title: "Español", value: "es" },
];

const Sidebar: React.FC<Props> = (props) => {
  const { questionCount, seal, currentIndex, setCurrentIndex } = props;
  const percent = Math.floor(((currentIndex + 1) / questionCount) * 100);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Card
      pad="medium"
      margin={{ left: "small" }}
      textAlign="left"
      height="0%"
      background="white"
    >
      {seal && (
        <Image
          margin={{ bottom: "small" }}
          src={seal}
          style={{ height: "175px" }}
        />
      )}
      <Box>
        <Text weight={600} color="black">
          {translate(getCopy("language"), language)}
        </Text>
        <Select
          a11yTitle="select language"
          margin={{ top: "xsmall" }}
          options={languages}
          labelKey="title"
          valueKey="value"
          value={language}
          onChange={({
            option,
          }: {
            option: { title: string; value: string };
          }) => setLanguage(option.value)}
        />
      </Box>
    </Card>
  );
};

export default Sidebar;
