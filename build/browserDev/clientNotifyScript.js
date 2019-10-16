ssp()

function ssp() {
  ajax().then(() => window.location.reload(true), () => ssp)
}

function ajax() {
  const xhr = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    xhr.open('GET', 'http://127.0.0.1:18770/waitforbuild', true)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const parse = req => req.response || req.responseText

        if (isHTTPStatusValid(xhr.status)) {
          resolve(parse(xhr))
        } else {
          reject(xhr)
        }
      }
    }

    xhr.onerror = () => {
      reject(xhr)
    }

    xhr.onabort = () => {
      reject(xhr)
    }

    xhr.send()
  })
}

function isHTTPStatusValid(status) {
  return (status >= 200 && status < 300) || status === 304
}
