import {get} from "lodash"
import {toastError} from "./toastHelper"
// import * as Sentry from "@sentry/react"

const errorsTimeoutIds: any = {}

function displayErrorVeryNice(message: any, withoutDelay: boolean = false, delay: number = 5000) {
  /*  maybe?
  const isProduction = process.env.REACT_APP_NODE_ENV === "production"
  if (!isProduction) {
      return toastError(message)
  }
*/
  if (withoutDelay) {
      return toastError(message)
  }
  clearTimeout(errorsTimeoutIds[message])
  errorsTimeoutIds[message] = setTimeout(() => {
      toastError(message)
  }, delay)
}

export function handleError(error :any, withoutDelay: boolean = false) {
    let errorMessage = get(error, "response.data.message", "")
    if (!errorMessage) {
        const calendarErrorMessage = get(error, "response.data.errors[0].message", "")
        errorMessage = calendarErrorMessage || error?.message
    }
    if (!errorMessage) {
        const authErrors = error?.errors || {}
        if (Object.keys(authErrors).length) {
            const errorValue = get(authErrors, Object.keys(authErrors)[0])
            if (Array.isArray(errorValue)) {
                errorMessage = errorValue.join(", ")
            } else if (typeof errorValue === "string") {
                errorMessage = errorValue
            }
        }
    }
    displayErrorVeryNice(errorMessage, withoutDelay)

    // Sentry.captureException(error)
}

export function getErrorCode(error: any) {
    return get(error, "response.data.code", "")
}

export function handleErrorChat(error: any) {
    let errorMessage = get(error, "response.data.errors[0].message", "")
    if (!errorMessage) {
        errorMessage = error.message
    }
    displayErrorVeryNice(errorMessage)

    // Sentry.captureException(error)
}

export function handleErrorMessage(error: any) {
    toastError(error)
}
