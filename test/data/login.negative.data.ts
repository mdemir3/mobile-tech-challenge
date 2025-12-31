export const invalidLoginData = [
  {
    title: 'empty username',
    username: '',
    password: 'secret_sauce',
    expectedError: 'Username'
  },
  {
    title: 'empty password',
    username: 'standard_user',
    password: '',
    expectedError: 'Password'
  },
  {
    title: 'invalid credentials',
    username: 'wrong_user',
    password: 'wrong_pass',
    expectedError: 'do not match'
  }
]