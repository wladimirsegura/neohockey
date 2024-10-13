"use client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { roaster } from "./roaster";
import { set } from "mongoose";
import { useState } from "react";

const nameStyle =
  "grid grid-cols-7 items-center justify-center m-1 bg-slate-900";

function InputScore({ team, title, pos }) {
  let [newScore, setNewScore] = useState(["", "", ""]);
  const listUp = roaster.filter((data) => data.team == team);

  return (
    <div>
      <DropdownMenu.Root>
        <p className="mb-2">
          {title}: {newScore[pos]}
        </p>

        <DropdownMenu.Trigger>
          <Button variant="soft" size={"4"}>
            {title}
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {listUp.map((item, i) => (
            <DropdownMenu.Item
              key={i}
              onSelect={() => {
                let newValue = [...newScore];
                newValue[pos] = item.number;
                setNewScore(newValue);
              }}
              className="my-2"
            >
              <p className="text-3xl">{item.number}</p>
              <p className="text-2xl">{item.name}</p>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

export default InputScore;
