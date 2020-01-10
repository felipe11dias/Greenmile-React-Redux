export function addToTeste(user) {
   return {
      type: '@user/USER_TESTE',
      user
   }
}

export function addToUserRequest(name) {
   return {
      type: '@user/USER_REQUEST',
      name: name
   }
}

export function addToUserSuccess(user) {
   return {
      type: '@user/USER_SUCCESS',
      user: user
   }
}

export function addToUserFailed(user) {
   return {
      type: '@user/USER_FAILED',
      user: user
   }
}