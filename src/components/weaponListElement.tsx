import React, { FC, ReactElement, ReactNode, useState } from "react";
import { fetchWeaponHitsData, fetchWeaponWoundsData } from "../api/fetchCalls";
import {
  WeaponListElementProps,
  HitWeaponStats,
  WoundWeaponStats,
} from "../types/datasheetTypes";
import { JsxAttribute } from "typescript";

const WeaponListElement = ({
  weapon_armor_penetration,
  weapon_attack,
  weapon_damage,
  weapon_keywords,
  weapon_name,
  weapon_range,
  weapon_skill,
  weapon_strength,
  weapon_type,
  id,
}: WeaponListElementProps) => {
  const [openState, setOpenState] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);
  const [hitWeaponStats, setHitWeaponStats] = useState<HitWeaponStats[]>([]);
  const [woundWeaponStats, setWoundWeaponStats] = useState<WoundWeaponStats[]>(
    []
  );

  const handleButtonOpen = async () => {
    setOpenState(!openState);
    if (!wasOpened) {
      setWasOpened(true);
      //   const hitWeaponStats: HitWeaponStats[] =
      //     (await fetchWeaponHitsData(id)) ?? [];
      //   setHitWeaponStats(hitWeaponStats);
      const woundWeaponStats: WoundWeaponStats[] =
        (await fetchWeaponWoundsData(id)) ?? [];
      setWoundWeaponStats(woundWeaponStats);
    }
  };

  return (
    <li className="w-full text-slate-50 text-left my-1 bg-gray-800 p-4 rounded-lg grid grid-cols-12 auto-rows-min">
      <span
        className={`capitalize text-lg font-semibold col-span-3 ${
          openState ? "mb-4" : ""
        }`}
      >
        {weapon_name}
      </span>
      <span className="capitalize ">{weapon_type}</span>
      <span className="col-span-3 grid grid-cols-6 ">
        <span className="capitalize">{weapon_range}</span>
        <span className="capitalize">{statsCleanup(weapon_attack)}</span>
        <span className="capitalize">{weapon_skill}</span>
        <span className="capitalize">{statsCleanup(weapon_strength)}</span>
        <span className="capitalize">{weapon_armor_penetration}</span>
        <span className="capitalize">{statsCleanup(weapon_damage)}</span>
      </span>
      <span className="capitalize col-span-4 ">
        {statsCleanup(weapon_keywords)}
      </span>
      <span className="col-span-1 text-xl justify-self-end mr-4 ">
        <button onClick={handleButtonOpen}>+</button>
      </span>
      <div
        className={`${
          openState ? "col-span-12 bg-slate-50 rounded-xl p-1" : "hidden"
        }`}
      >
        <div className="text-xs border-4 border-black rounded-xl m-1 p-2">
          <div className="grid grid-cols-5 grid-rows-2 text-black border-b-2 border-gray-700">
            <div className="text-sm">Weapon mode</div>
            <div className="text-sm">Weapon hit probability</div>
            <div className="text-sm col-span-2">Weapon wound vs toughness</div>
            <div className="text-left">+</div>
            <div className="grid row-start-2 col-start-3 col-span-3 grid-cols-11">
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
            </div>
          </div>
          {openState
            ? woundWeaponStats.map(
                (weaponStat: WoundWeaponStats, index: number) => (
                  <div className="grid grid-cols-5 text-black border-b-2">
                    <div
                      className="col-start-1 capitalize"
                      key={weaponStat.weapon_id + index}
                    >
                      {weaponStat.weapon_mode}
                    </div>
                    <div className="col-start-2 capitalize">
                      {weaponStat.weapon_hit}
                    </div>
                    <div className="col-start-3 col-span-3 grid grid-cols-11 capitalize">
                      {weaponStat.weapon_wounds.map((item) => (
                        <div className={probabilityColor(item)}>{item}</div>
                      ))}
                    </div>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </li>
  );
};

const statsCleanup = (stat: string) => {
  let cleanStat = "";
  switch (stat) {
    case "[1,2,3]":
      cleanStat = "D3";
      break;
    case "[2,3,4]":
      cleanStat = "D3+1";
      break;
    case "[1,2,3,4,5,6]":
      cleanStat = "D6";
      break;
    case "[2,3,4,5,6,7]":
      cleanStat = "D6+1";
      break;
    case "[4,8,12,16,20,24]":
      cleanStat = "4D6";
      break;
    case "[2,3,4,5,6,7,8,9,10,11,12]":
      cleanStat = "2D6";
      break;
    case "[4,5,6,7,8,9,10,11,12,13,14]":
      cleanStat = "2D6+2";
      break;
    case "[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]":
      cleanStat = "3D6";
      break;
    default:
      cleanStat = stat.replace("[", "").replace("]", "").replaceAll('"', "");
  }
  return cleanStat;
};

const renderAdditionalStats = (
  hitWeaponStats: HitWeaponStats[],
  woundWeaponStats: WoundWeaponStats[]
): ReactNode => {
  return <div></div>;
};

const additionalStatsElement = (mode: string, hits: number[]) => {
  return <div></div>;
};

const probabilityColor = (probability: number) => {
  let bgColor = "";
  if (probability < 0.2) {
    bgColor = "bg-red-500";
  } else if (probability >= 0.2 && probability < 0.4) {
    bgColor = "bg-orange-500";
  } else if (probability >= 0.4 && probability < 0.6) {
    bgColor = "bg-amber-500";
  } else if (probability >= 0.6 && probability < 0.8) {
    bgColor = "bg-lime-500";
  } else if (probability >= 0.8) {
    bgColor = "bg-green-500";
  }
  return bgColor;
};

export default WeaponListElement;
