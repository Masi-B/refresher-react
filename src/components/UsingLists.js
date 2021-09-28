import React from "react";
import PeopleInfo from "./PeopleInfo";

function UsingLists() {
  const names = ["Poshi", "piri", "tatu"];
  const mazita = names.map((zita, index) => <h2 key={index}> {zita}</h2>)
  const info = [
    { name: "Poshi", id: 1, skill: "None" },
    { name: "Abyss", id: 2, skill: "Walker" },
  ];
    const infoPrint = info.map((infoShow) => <PeopleInfo key={infoShow.id} infoShow={infoShow }></PeopleInfo> );
  return <div>{mazita}</div>;
}

export default UsingLists;
