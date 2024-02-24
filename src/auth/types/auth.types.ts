export type GoogleOAuthUserProfile = {
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  name: string
  picture: string
  sub: string
}

export type User = Pick<
  GoogleOAuthUserProfile,
  'email' | 'given_name' | 'family_name' | 'name' | 'picture'
> & {
  id: string
}
