export const logout = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("profile")
}