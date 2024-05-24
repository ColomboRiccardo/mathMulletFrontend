import { supabase } from "./supabase";

export const fetchWeaponHitsData = async (id: number) => {
  const { data, error } =
    (await supabase
      .from("mathHammer_weapon_hit_simulation")
      .select("*")
      .eq("weapon_id", id)) ?? 100;

  return data;
};

export const fetchWeaponWoundsData = async (id: number) => {
  const { data, error } =
    (await supabase
      .from("mathHammer_weapon_wounds_simulation")
      .select("*")
      .eq("weapon_id", id)
      .order("weapon_mode", { ascending: true })
      .order("weapon_hit", { ascending: true })) ?? 100;

  return data;
};

export const getWeapons = async (pageNumber: number) => {
  const minRange = (pageNumber - 1) * 100;
  const maxRange = pageNumber * 100 - 1;
  const { data: weapons } =
    (await supabase
      .from("mathHammer_weapon_datasheet")
      .select("*")
      .range(minRange, maxRange)) ?? [];

  if (weapons == null) {
    return [];
  }
  return weapons;
};

export const getWeaponsCount = async () => {
  const { count: weaponsCount, error } =
    (await supabase
      .from("mathHammer_weapon_datasheet")
      .select("*", { count: "exact", head: true })) ?? 100;

  return weaponsCount;
};
