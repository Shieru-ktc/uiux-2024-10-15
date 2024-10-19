import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useTitleText } from "../contexts/TitleTextContext";
import { useEffect } from "react";

export default function About() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("概要");
  }, [setTitleText]);

  return (
    <Stack padding={5} spacing={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            概要
          </Typography>
          <Typography variant="h5" component="div">
            Steam
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            ゲームプラットフォーム
          </Typography>
          <Typography variant="body2">
            Valveが運営する激ヤバゲームプラットフォーム。
            <br />
            死ぬほどセールをするせいで、そこらかしこで
            <span
              style={{
                backgroundColor: "#4C6A21",
                color: "#BDEE10",
                padding: "5px",
                fontSize: "2em",
                borderRadius: "2px",
              }}
            >
              -80%
            </span>
            みたいな数字が見える。
          </Typography>
          <Typography variant="body2">
            有名なゲームが多いが、インディーゲームも多く、Steamでしか買えないゲームも多い。
            <br />
            このプラットフォームによって無限に金が入ってくるせいで、Valveは新しいゲームを作ってくれない。Portal
            3まだですか？
          </Typography>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={3}>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              運営会社
            </Typography>
            <Typography variant="h5" component="div">
              Valve
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              アメリカの非公開会社
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              リリース日
            </Typography>
            <Typography variant="h5" component="div">
              2003年
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>9月12日</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
