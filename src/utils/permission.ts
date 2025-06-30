export function hasPermission(requiredPermission: string): boolean {
  const userStore = useUserStore()
  const userPermissions = userStore.getUserInfo.role
    .flatMap((role: any) => role.menu)
    .map((menu) => menu.permission)
    .filter((permission) => permission !== null)
  console.log('userStore', userPermissions, requiredPermission)
  return userPermissions.includes(requiredPermission)
}
