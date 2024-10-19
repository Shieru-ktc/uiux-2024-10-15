import { useEffect } from "react";
import { useTitleText } from "../contexts/TitleTextContext";
import { Box, Typography } from "@mui/material";

export default function HowToUse() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("使い方");
  }, [setTitleText]);
  return (
    <Box padding={2}>
      <Typography variant="h3" component="h1">
        Steamでゲームを買うまで
      </Typography>
      <hr />
      <ol>
        <li>Steamにアカウントを登録する</li>
        <li>Steamクライアントをダウンロード・インストールする</li>
        <li>ほしいゲームをカートに入れる</li>
        <li>支払い方法を登録する</li>
        <li>購入する</li>
      </ol>
    </Box>
  );
}
