import {useEffect, useState} from "react"
import {Loader} from "./Loadable";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";

type GlobalErrorBoundaryProps = {
    error: Error
    eventId?: string
}

export function GlobalErrorBoundary({error, eventId}: GlobalErrorBoundaryProps) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)

    const isChunkLoadingFailedError = error?.message && /Loading chunk [\d]+ failed/.test(error.message)

    useEffect(() => {
        if (isChunkLoadingFailedError) {
            window.location.reload()
        }
    }, [isChunkLoadingFailedError])

    if (isChunkLoadingFailedError) {
        return <Loader />
    }

    const hasErrorMessage = !!error?.message

    return (
        <div className="errorBoundary">
            <Alert
                className="errorBoundaryAlert"
                dismissible={false}
                variant="error"
                // severity="error"
                // action={
                //     hasErrorMessage ? (
                //         <Button color="error" onClick={() => setIsDetailOpen((it) => !it)}>
                //             {isDetailOpen ? "Hide detail" : "Show detail"}
                //         </Button>
                //     ) : undefined
                // }
            >
              <Alert.Heading>Oops! Something is not right.</Alert.Heading>
              <div>
                <p>
                    If this page does not automatically refresh within 30 seconds, please manually reload it in
                    your browser.
                    <br />
                    If the problem continues to happen please email:{" "}
                    {/* <a
                        href={`mailto:support@essencesoftwares.com?subject=Error%20Message&body=Hello%20klassapp,%20I%20got%20this%20error.%20${error?.message}`}>
                        support@essencesoftwares.com
                    </a> */}
                </p>
                {hasErrorMessage && isDetailOpen && (
                    <p>
                        {error.message} {eventId ? `(Event ID: ${eventId})` : ""}
                    </p>
                )}
            </div>
          </Alert>
        </div>
    )
}
