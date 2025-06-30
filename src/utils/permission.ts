export function hasPermission(requiredPermission: string): boolean {
  const userStore = useUserStore()
  const userPermissions = userStore.getUserInfo.role
    .flatMap((role: any) => role.menu)
    .map((menu) => menu.permission)
    .filter((permission) => permission !== null)
  console.log('userStore', userPermissions, requiredPermission)
  // 如果是管理员，直接返回true
  if (userStore.isAdmin) return true
  return userPermissions.includes(requiredPermission)
}
