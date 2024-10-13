"use client";
import * as Dialog from "@radix-ui/react-dialog";
import InputScore from "./InputScore";
import { roaster } from "./roaster";
import TeamRoaster from "./TeamRoaster";
import TimeTable from "./TimeTable";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { SlSizeFullscreen } from "react-icons/sl";

const toggleFullScreen = () => {
  const element = document.getElementById("full");
  const isFullScreen = document.fullscreenElement;
  isFullScreen ? document.exitFullscreen() : element.requestFullscreen();
};

function Scores() {
  const [leftTeam, setLeftTeam] = useState("ヘベウデス");
  const [rightTeam, setRightTeam] = useState("TUC");
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  // let [newScore, setNewScore] = useState(["ゴール", "アシスト1", "アシスト2"]);
  const nameStyle =
    "grid grid-cols-7 items-center justify-center m-1 bg-gray-900";

  return (
    <div className="bg-slate-950 h-screen mt-4 p-4" id="full">
      <header className="flex mx-6 items-center">
        <Button onClick={toggleFullScreen}>
          <SlSizeFullscreen />
        </Button>
        <div className="m-auto flex grid-flow-row">
          <p>Kannami Hockey League</p>
          <p className="px-4">Game #1</p>
          <p>2024/9/18</p>
        </div>
      </header>
      <main className="grid grid-cols-3 col-auto items-center">
        <div className="leftTeamScore text-5xl flex p-4 items-center justify-start  w-full">
          {leftTeam}
        </div>
        <div className="timer flex justify-center items-center w-full bg-slate-600">
          <Dialog.Root>
            <Dialog.Trigger>
              <h1 className="leftScore text-6xl align-right">{leftScore}</h1>
            </Dialog.Trigger>

            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
              <p>{leftTeam}:</p>
              <div className="flex flex-row justify-around mt-4 gap-8 w-max">
                <InputScore team={leftTeam} title={"ゴール"} />
                <InputScore team={leftTeam} title={"アシスト1"} />
                <InputScore team={leftTeam} title={"アシスト2"} />
              </div>
            </Dialog.Content>
          </Dialog.Root>

          <h2 className="text-4xl mx-6">00:00</h2>

          <Dialog.Root>
            <Dialog.Trigger>
              <h1 className="rightScore text-6xl align-right">{rightScore}</h1>
            </Dialog.Trigger>

            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
              <p>{rightTeam}:</p>
              <div className="grid grid-cols-3 justify-around mt-4 gap-8 w-max">
                {/* <p>{newScore[0]}</p>
								<p>{newScore[1]}</p>
								<p>{newScore[2]}</p> */}

                <InputScore team={rightTeam} title={"ゴール"} pos={0} />
                <InputScore team={rightTeam} title={"アシスト1"} pos={1} />
                <InputScore team={rightTeam} title={"アシスト2"} pos={2} />
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </div>
        <div className="rightTeamScore text-5xl flex p-4 items-center justify-end ">
          {rightTeam}
        </div>
      </main>
      <section className="records grid grid-cols-9 col-auto p-2 bg-gray-800">
        <div className="left Roaster col-span-2">
          <TeamRoaster teamName={leftTeam} />
        </div>
        <section className="timeline grid grid-cols-2 col-span-5 h-min">
          <div>
            <TimeTable id="20240612-A-2" team={leftTeam} />
          </div>
          <div>
            <TimeTable id="20240612-A-2" team={rightTeam} />
          </div>
        </section>
        <div className="col-span-2">
          <TeamRoaster teamName={rightTeam} />
        </div>
      </section>
    </div>
  );
}

export default Scores;
