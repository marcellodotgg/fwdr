export type User = {
  id: number | string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  verified: boolean;
  provider: string;
  provider_id: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
};
