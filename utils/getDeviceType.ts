export function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor

  if (/android/i.test(userAgent)) {
    return 1 // android
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 0 // iOS
  }

  return 2 // WEB
}
