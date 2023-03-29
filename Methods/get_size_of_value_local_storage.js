
function getLocalStorageItemSize(local_storage_key) {
    const value = localStorage.getItem(local_storage_key)
    if (!value) return 0

    // Get the size of the string representation of the value
    const size = new TextEncoder().encode(JSON.stringify(value)).length

    // Return the size in bytes
    return size
}