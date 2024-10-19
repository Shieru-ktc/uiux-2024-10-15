import { useTitleText } from "@/contexts/TitleTextContext";
import { Box, Link, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Design() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("デザイン");
  }, [setTitleText]);

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        デザイン
      </Typography>
      <Typography>
        今回の課題では、マテリアルデザインを採用してみました。
      </Typography>
      <Typography>
        AppBar （上部のメニューバー）とハンバーガーメニューを採用し、
        <br />
        実際のサイトにありそうなページ構成にしています。
        <Typography variant="body2">
          （実際、今回採用した
          <Link href="https://m2.material.io/">Material Design 2のDocs</Link>
          ではこの方式と似たようなものが採用されています。）
        </Typography>
      </Typography>
      <hr />
      <Typography variant="h4" gutterBottom>
        技術スタック
      </Typography>
      <Typography>
        XDではなく、ReactとMUIを用いた実装にしてみました。理由は以下の通りです。
      </Typography>
      <ul>
        <li>Reactにより、モダンなWebサイトが簡単に作成できる</li>
        <li>XDよりも将来性がありそう（XDは現在メンテナンスモードなので）</li>
        <li>
          MUIにより、Material Designに準拠したコンポーネントが簡単に使える
        </li>
      </ul>
    </Box>
  );
}
