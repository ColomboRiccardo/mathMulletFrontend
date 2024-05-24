export interface WeaponListElementProps {
  weapon_armor_penetration: number;
  weapon_attack: string;
  weapon_damage: string;
  weapon_keywords: string;
  weapon_name: string;
  weapon_range: number;
  weapon_skill: number;
  weapon_strength: string;
  weapon_type: string;
  id: number;
}

export type HitWeaponStats = {
  weapon_id: number;
  weapon_mode: string;
  weapon_theor_hits: number[];
};

export type WoundWeaponStats = {
  weapon_id: number;
  weapon_name: string;
  weapon_mode: string;
  weapon_hit: number;
  weapon_wounds: number[];
};

export interface WeaponsPageLoader {
  totalPages: number;
  pageNumber: number;
  weaponsCount: number;
}
