const TokenKey = "bocapio.api.auth"

export function getTokenNode() {
    return localStorage.getItem(TokenKey)
}

export function setTokenNode(token) {
    localStorage.setItem(TokenKey, token)
}

export function removeTokenNode() {
    return localStorage.removeItem(TokenKey)
}














