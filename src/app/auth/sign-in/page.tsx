"use client"
import { AuthTopBar } from '@/components'
import { Button, Flex, PasswordInput, Stack, TextInput } from '@mantine/core'
import React from 'react'

function SignIn() {
  return (
    <div>
      <AuthTopBar />
      <div className="auth_container">
        <Flex  p={"5%"} mih={"calc(100vh - 70px)"} align={"center"} justify={"center"}>
          <Stack w={350}>
          <h2>Create account</h2>
            <TextInput placeholder='Enter email' size={"md"} />
            <PasswordInput placeholder='Enter password' size={"md"} />
            <PasswordInput placeholder='Confirm password' size={"md"} />
            <Button color='black'>Sign in</Button>
          </Stack>
        </Flex>

      </div>
    </div>
  )
}

export default SignIn
