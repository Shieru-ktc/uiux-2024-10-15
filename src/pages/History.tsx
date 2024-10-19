import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { useTitleText } from "../contexts/TitleTextContext";
import { useEffect } from "react";

const HISTORY = [
  {
    year: 2002,
    event:
      "Valve社が、ゲームの自動アップデートの問題を解決するために、Steamの開発を開始。",
  },
  {
    year: 2003,
    event:
      "Steamが正式リリースされ、最初のゲーム「カウンターストライク 1.6」が配信される。",
  },
  {
    year: 2004,
    event:
      "Valveの人気ゲーム「ハーフライフ2」がSteamで独占配信され、同プラットフォームが注目される。",
  },
  {
    year: 2005,
    event: "サードパーティ製ゲームがSteamで配信され始める。",
  },
  {
    year: 2007,
    event: "ValveがSteamworksを発表し、デベロッパー向けのツールやDRMを提供。",
  },
  {
    year: 2008,
    event:
      "Steam Cloud機能が導入され、ゲームのセーブデータがクラウドに保存できるようになる。",
  },
  {
    year: 2009,
    event:
      "Macプラットフォームへの対応が発表され、後にLinuxサポートの予告もされる。",
  },
  {
    year: 2010,
    event: "SteamがMacでリリースされ、Valveの全ゲームがMacに対応。",
  },
  {
    year: 2011,
    event:
      "Steamワークショップが導入され、ユーザー作成のMODやコンテンツの共有が可能に。",
  },
  {
    year: 2012,
    event:
      "スチーム・グリーンライトが開始され、ユーザーがゲームを投票で選び、インディーゲームがSteamに登場する道を開く。",
  },
  {
    year: 2013,
    event:
      "Linux版Steamがリリースされ、SteamOSとスチームマシンのプロジェクトが発表される。",
  },
  {
    year: 2015,
    event:
      "SteamマシンとSteamコントローラが発売されるも、商業的成功は限られる。",
  },
  {
    year: 2017,
    event:
      "Steam Directがグリーンライトに代わり、開発者が一定の料金を支払ってゲームを直接配信できるようになる。",
  },
  {
    year: 2018,
    event: "Valveがチャット機能を改良し、Steamチャットをリリース。",
  },
  {
    year: 2019,
    event: "Steamの同時接続ユーザー数が1,800万人を突破。",
  },
  {
    year: 2020,
    event:
      "新型コロナウイルスのパンデミックにより、リモートでのゲームプレイが急増し、Steamの同時接続ユーザー数が過去最高を記録。",
  },
  {
    year: 2021,
    event:
      "Valveがハンドヘルドゲーム機「Steam Deck」を発表し、PCゲームのポータブル性を強化。",
  },
  {
    year: 2022,
    event: "Steam Deckが発売され、人気を博す。",
  },
  {
    year: 2023,
    event: "Steamが20周年を迎え、セールや記念イベントが行われる。",
  },
];

export default function History() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("歴史");
  }, [setTitleText]);
  return (
    <Box padding={5}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>年代</TableCell>
              <TableCell>出来事</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {HISTORY.map((row) => (
              <TableRow key={row.year}>
                <TableCell component="th" scope="row">
                  {row.year}
                </TableCell>
                <TableCell>{row.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
