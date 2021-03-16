import React, { MouseEvent, useEffect, useState } from 'react'
import useUser from '@lib/hooks/useUser'
import useEvents from '@lib/hooks/useEvents'

import { Button, Grid, Typography } from '@material-ui/core'
import Fetcher from '@lib/fetcher'
import { useRouter } from 'next/router'

import { signIn, signOut, useSession } from 'next-auth/client'

const Profile = () => {
  const [content, setContent] = useState()
  const [session, loading] = useSession()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/auth/user')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  if (loading) {
    return <Typography>loading...</Typography>
  }

  // If no session exists, display access denied message
  if (!session) {
    return <Typography>Access Denied</Typography>
  }

  console.log(session)
  return (
    <Grid>
      <h1>Protected Page</h1>
      <p>
        You're sign in as
        <strong>{session.user.name || '\u00a0'}</strong>
      </p>
    </Grid>
  )
}

export default Profile
